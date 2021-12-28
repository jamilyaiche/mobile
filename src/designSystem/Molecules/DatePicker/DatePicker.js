import PropTypes from "prop-types";
import React, { useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Popover from 'react-native-popover-view'
import Colors from '../../../assets/styles/Colors'
import Style from '../../../assets/styles/Style'
import DSIcon from '../../Atoms/DSIcon/DSIcon'
import DSLabel from '../../Atoms/DSLabel/DSLabel'
import { Calendar } from '../../index'
const DatePicker = (props) => {
  const [isVisible, setIsVisible] = React.useState(false)
  const [selectedDate, setSelectedDate] = React.useState('')
  const [markedDate, setMarkedDate] = React.useState({})
  useEffect(() => {
     if(props.selectedDate){
        setSelectedDate(props.selectedDate)
        setMarkedDate({[`${props.selectedDate.split('/').reverse().join('-')}`]: {
            customStyles: {
              container: {
                borderColor: Colors.blue(),
                borderWidth:1,
                borderRadius:0
              }
            }
          }})
     }
  }, [])
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
        style={[Style.TextInputRightIcon, { top:18}]}
        name={iconName}
        color={Colors.black()}
        size='small'
      />
    )
  }


  return (
    <View>
    {displayLabel()}
      <Popover
        isVisible={isVisible}
        popoverStyle={Style.datePickerPopOver}
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
            {!selectedDate? 
            <Text style={[{padding: 16,paddingLeft:8 }]} >{props.placeholder}</Text>
            :
            <Text style={[{padding:16,paddingLeft:8}]}> 
            {
              selectedDate
            }
             </Text>
        }
            {displayRightIcon('calendar')}
          </TouchableOpacity>
        )}>
            {isVisible &&
        <Calendar
        onDayPress={(date)=>{
            setSelectedDate(date.dateString.split('-').reverse().join('/')),
            setIsVisible(false),
            setMarkedDate({[`${date.dateString}`]:{
                customStyles: {
                  container: {
                    borderColor: Colors.blue(),
                    borderWidth:1,
                    borderRadius:0
                  }
                }
              }}),
              props.onChange && props.onChange(date)
        }}
        markingType={'custom'}
        markedDates={markedDate}
        {...props}
        />
    }
      </Popover>
      {displayErrorMessage()}
    </View>
  )
}

DatePicker.propTypes = {
  errorMessage: PropTypes.string,
  isInvalid: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onLabelLayout: PropTypes.any,
  onLabelLongPress: PropTypes.any,
  onLabelPress: PropTypes.any,
  onLabelTextLayout: PropTypes.any,
  onRightIconLongPress: PropTypes.any,
  onRightIconPress: PropTypes.any,
  onRightIconPressIn: PropTypes.any,
  onRightIconPressOut: PropTypes.any,
  placeholder: PropTypes.string,
  selectable: PropTypes.any,
  selectedDate: PropTypes.string
}

DatePicker.defaultProps = {
  onChange: (value) => console.log(value),
  isInvalid:false,
  errorMessage:'',
  label:"hi there",
  selectedDate:'', // format dd/mm/yyyy,
  placeholder:'date picker'
}



export default DatePicker
