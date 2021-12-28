import PropTypes from 'prop-types'
import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Popover from 'react-native-popover-view'
import Colors from '../../../assets/styles/Colors'
import Style from '../../../assets/styles/Style'
import DSIcon from '../../Atoms/DSIcon/DSIcon'
import DSLabel from '../../Atoms/DSLabel/DSLabel'
import { CheckBox } from '../../index'
const SelectInput = (props) => {
  const [isVisible, setIsVisible] = React.useState(false)
  const [selected, setSelected] = React.useState(props.selected)
  const displayLabel= () => {
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

  const displayErrorMessage = () => {
    if (props.isInvalid) {
      return (
        <DSLabel style={Style.textInputErrorMessageStyle1}>{props.errorMessage}</DSLabel>
      )
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
  const displayOptions = () => {
    const options =
      props.data.map((element) => {
        return <TouchableOpacity onPress={() => onSelect(element)} >
          <Text style={{ padding: 16 }} >{element.label}</Text>
        </TouchableOpacity>
      })
    return options
  }
  const displayOptionsMultiSelect = () => {
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
    return options
  }
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
  return (
    <View>
    {displayLabel()}
      <Popover
        isVisible={isVisible}
        popoverStyle={Style.popOverStyle}
        arrowStyle={Style.arrowPopOver}
        placement='bottom'
        backgroundStyle={{ backgroundColor: 'transparent' }}
        onRequestClose={() => setIsVisible(false)}
        from={(
          <TouchableOpacity
            onPress={() => setIsVisible(true)}
            style={[
              Style.textInput,
              isVisible ? Style.borderBottom : null,
              props.isInvalid && Style.boderError
            ]}
          >
            {selected.length===0 ? 
            <Text style={[{padding: 16,paddingLeft:8 }]} >{props.placeholder}</Text>
            :
            <Text style={[{padding:16,paddingLeft:8}]}> 
            {
              selected.map((element ,index) => {
              if(index === 0){
                return(element.label)
              }else{
                return(`, ${element.label}`)
              }
            })}
             </Text>
        }
            {displayRightIcon(isVisible ? 'arrow-up' : 'arrow-down')}
          </TouchableOpacity>
        )}>
        <ScrollView>
          {props.multiselect ?
            displayOptionsMultiSelect()
            :
            displayOptions()
          }
        </ScrollView>
      </Popover>
      {displayErrorMessage()}
    </View>
  )
}

SelectInput.defaultProps = {
  data: [{ label: 'test 1', value: { id: '1233', name: 'hi' } }, { label: 'test 2', value: { id: '1233', name: 'hi' } }, { label: 'test 3', value: { id: '1233', name: 'hi' } }],
  selected: [],
  onChange: (value) => console.log(value),
  multiselect: false,
  isInvalid:false,
  errorMessage:'',
  label:"hi there"
}

SelectInput.propTypes = {
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
  placeholder: PropTypes.string

}

export default SelectInput
