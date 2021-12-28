import PropTypes from 'prop-types'
import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Popover from 'react-native-popover-view'
import Colors from '../../../assets/styles/Colors'
import Style from '../../../assets/styles/Style'
import DSIcon from '../../Atoms/DSIcon/DSIcon'
import DSLabel from '../../Atoms/DSLabel/DSLabel'
import { CheckBox, TextInput } from '../../index'
const AutoComplet = (props) => {
  const inputRef = React.useRef()
  const [isVisible, setIsVisible] = React.useState(false)
  const [selected, setSelected] = React.useState(props.selected)
  const [options, setOptions] = React.useState([])
  const displayLabel = () => {
    return (
      <DSLabel
        {...(props.onLabelLayout !== undefined && { onLayout: props.onLabelLayout })}
        {...(props.onLabelLongPress !== undefined && { onLongPress: props.onLabelLongPress })}
        {...(props.onLabelPress !== undefined && { onPress: props.onLabelPress })}
        {...(props.onLabelTextLayout !== undefined && { onTextLayout: props.onLabelTextLayout })}
        selectable={props.selectable}
        style={Style.textInputLabel}
      >
        {props.label}
      </DSLabel>
    )
  }
  const displayOptions = (value = '') => {
    const options =
      props.data.map((element) => {
        if (element.label.includes(value) && value !== '') {
          return <TouchableOpacity onPress={() => onSelect(element)} >
            <Text style={{ padding: 16 }} >{element.label}</Text>
          </TouchableOpacity>
        } else {
          return <TouchableOpacity onPress={() => onSelect(element)} >
            <Text style={{ padding: 16 }} >{element.label}</Text>
          </TouchableOpacity>
        }
      })
    setOptions(options)
  }
  const displayOptionsMultiSelect = (value = '') => {
    const options =
      props.data.map((element) => {
        return <TouchableOpacity onPress={() => onSelect(element)} style={Style.multiSelectOption}  >
          <CheckBox
            isChecked={selected.includes(element)}
            checkBoxColor={selected.includes(element) ? Colors.blue() : Colors.grey()}
            onClick={() => onSelect(element)}
          />
          <Text style={Style.multiSelectLabel}>{element.label}</Text>
        </TouchableOpacity>
      })
    setOptions(options)
  }
  React.useEffect(() => {
    if (props.multiselect) {
      displayOptionsMultiSelect()
    } else {
      displayOptions()
    }
  }, [])
  const onSelect = (value) => {
    let aux = [...selected]
    if (props.multiselect) {
      if (aux.includes(value)) {
        aux.splice(aux.indexOf(value), 1)
      }
      else {
        aux.push(value)
      }

    } else {
      aux = [value]
      setIsVisible(false)
    }
    setSelected(aux)
    props.onChange(aux)
  }
  const [inputValue, setInputValue] = React.useState('')
  const refreshOptions = (value) => {
    if (props.multiselect) {
      displayOptionsMultiSelect(value)
    } else {
      displayOptions(value)
    }
  }
  const displayRightIcon = (iconName) => {
    return (
      <DSIcon
        onPress={props.onRightIconPress ? props.onRightIconPress : null}
        {...(props.onRightIconPressIn !== undefined && { onPressIn: props.onRightIconPressIn })}
        {...(props.onRightIconPressOut !== undefined && { onPressOut: props.onRightIconPressOut })}
        {...(props.onRightIconLongPress !== undefined && { onLongPress: props.onRightIconLongPress })}
        style={[Style.TextInputRightIcon, { top: 25 }]}
        name={iconName}
        color={Colors.black()}
        size='xxx-small'
      />
    )
  }
  const displayErrorMessage = () => {
    if (props.isInvalid) {
      return (
        <DSLabel style={Style.textInputErrorMessageStyle1}>{props.errorMessage}</DSLabel>
      )
    }
  }
  return (
    <View>
      {displayLabel()}
      <Popover
        isVisible={isVisible}
        popoverStyle={Style.popOverStyleAutoComplete}
        arrowStyle={Style.arrowPopOver}
        placement='bottom'
        animationConfig={{ duration: 0 }}
        backgroundStyle={{ backgroundColor: 'transparent' }}
        onRequestClose={() => { setIsVisible(false), setInputValue('') }}
        onOpenStart={() => inputRef.current.focus()}
        from={(
          <TouchableOpacity
            onPress={() => setIsVisible(true)}
            style={[
              Style.textInput,
              isVisible && Style.borderBottom,
              props.isInvalid && Style.boderError
            ]}
          >

            {selected.length === 0 ?
              <Text style={[{ padding: 16, paddingLeft: 8 }]} >{props.placeholder}</Text>
              :
              <Text style={[{ padding: 16, paddingLeft: 8 }]}>
                {
                  selected.map((element, index) => {
                    if (index === 0) {
                      return (element.label)
                    } else {
                      return (`, ${element.label}`)
                    }
                  })}
              </Text>
            }
            {displayRightIcon(isVisible ? 'arrow-up' : 'arrow-down')}
          </TouchableOpacity>

        )}>
        <>
          <TextInput
            inputRef={inputRef}
            value={inputValue}
            rightIconName={'arrow-up'}
            onChangeText={(value) => (setInputValue(value), refreshOptions(value))}
            inputRef={inputRef}
            label={props.label}
            isInvalid={props.isInvalid}
            errorMessage={props.errorMessage}
          />
          <View style={Style.popOverStyleAutoCompleteOptionContainer}>
            <ScrollView >
              {!props.multiselect ?
                props.data.map((element) => {
                  if (element.label.toLowerCase().includes(inputValue.toLowerCase())) {
                    return <TouchableOpacity onPress={() => onSelect(element)}  >
                      <View style={{ padding: 16, flexDirection: 'row' }}>
                        {element.label.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1 && <Text>{element.label.slice(0, element.label.toLowerCase().indexOf(inputValue.toLowerCase()))}</Text>}
                        <Text style={{ fontWeight: 'bold' }} >{element.label.slice(element.label.toLowerCase().indexOf(inputValue.toLowerCase()), inputValue.length + element.label.toLowerCase().indexOf(inputValue.toLowerCase()))}</Text>
                        <Text>{element.label.slice(inputValue.length + element.label.toLowerCase().indexOf(inputValue.toLowerCase()), element.label.length)}</Text>
                      </View>
                    </TouchableOpacity>
                  }
                })
                :
                props.data.map((element) => {
                  if (element.label.toLowerCase().includes(inputValue.toLowerCase())) {
                    return <TouchableOpacity onPress={() => onSelect(element)} style={{ flexDirection: 'row', padding: 16 }}  >
                      <CheckBox
                        isChecked={selected.includes(element)}
                        checkBoxColor={selected.includes(element) ? Colors.blue() : Colors.grey()}
                        onClick={() => onSelect(element)}
                      />
                      <View style={{ flexDirection: 'row', paddingLeft: 8, paddingTop: 5 }}>
                        {element.label.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1 && <Text>{element.label.slice(0, element.label.toLowerCase().indexOf(inputValue.toLowerCase()))}</Text>}
                        <Text style={{ fontWeight: 'bold' }} >{element.label.slice(element.label.toLowerCase().indexOf(inputValue.toLowerCase()), inputValue.length + element.label.toLowerCase().indexOf(inputValue.toLowerCase()))}</Text>
                        <Text>{element.label.slice(inputValue.length + element.label.toLowerCase().indexOf(inputValue.toLowerCase()), element.label.length)}</Text>
                      </View>
                    </TouchableOpacity>
                  }
                })
              }
            </ScrollView>
          </View>
        </>
      </Popover>
      {displayErrorMessage()}
    </View>

  )
}
AutoComplet.defaultProps = {
  data: [{ label: 'Test 1 1', value: { id: '1233', name: 'hi' } }, { label: 'test 1 2', value: { id: '1233', name: 'hi' } }, { label: 'TeSt 1 3', value: { id: '1233', name: 'hi' } }],
  selected: [],
  onChange: (value) => console.log(value),
  multiselect: true,
  isInvalid: false,
  errorMessage: '',
  label: "hi there"
}

AutoComplet.propTypes = {
  onLabelLayout: PropTypes.func,
  onLabelLongPress: PropTypes.func,
  onLabelPress: PropTypes.func,
  onLabelTextLayout: PropTypes.func,
  onChange: PropTypes.func,
  selectableLabel: PropTypes.bool,
  isInvalid: PropTypes.bool,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  data: PropTypes.array,
  placeholder: PropTypes.string,
  selectedKey: PropTypes.number,

}

export default AutoComplet
