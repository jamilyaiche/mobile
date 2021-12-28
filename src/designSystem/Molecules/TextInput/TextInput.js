import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import DSTextInput from '../../Atoms/DSTextInput/DSTextInput'
import DSLabel from '../../Atoms/DSLabel/DSLabel'
import Colors from '../../../assets/styles/Colors'
import Style from '../../../assets/styles/Style'
import DSIcon from '../../Atoms/DSIcon/DSIcon'

const TextInput = (props) => {
  const [focused, setFocused] = React.useState(false)
  const [passwordHidden, setPasswordHidden] = React.useState(true)
  

  const displayStyle1 = () => {
    return (
      <View>
        {displayLabel()}
        <DSTextInput
          {...(props.inputRef !== undefined && { inputRef: props.inputRef })}
          {...(props.value !== undefined && { value: props.value })}
          value={props.value}

          onFocus={() => {
            setFocused(true)
            if (props.onFocus !== undefined) {
              props.onFocus()
            }
          }}
          onBlur={() => {
            setFocused(false)
            if (props.onBlur) {
              props.onBlur()
            }
          }}
          placeholder={props.placeholder}
          autoCapitalize={props.autoCapitalize}
          autoCorrect={props.autoCorrect}
          editable={props.editable}
          keyboardType={props.keyboardType}
          {...(props.maxLength !== undefined && { maxLength: props.maxLength })}
          multiline={props.multiline}
          numberOfLines={props.numberOfLines}
          {...(props.onChange !== undefined && { onChange: props.onChange })}
          {...(props.onChangeText !== undefined && { onChangeText: props.onChangeText })}
          {...(props.onContentSizeChange !== undefined && { onContentSizeChange: props.onContentSizeChange })}
          {...(props.onEndEditing !== undefined && { onEndEditing: props.onEndEditing })}
          {...(props.onKeyPress !== undefined && { onKeyPress: props.onKeyPress })}
          {...(props.onLayout !== undefined && { onLayout: props.onLayout })}
          {...(props.onScroll !== undefined && { onScroll: props.onScroll })}
          {...(props.onSelectionChange !== undefined && { onSelectionChange: props.onSelectionChange })}
          {...(props.onSubmitEditing !== undefined && { onSubmitEditing: props.onSubmitEditing })}
          placeholderTextColor={props.placeholderTextColor || Colors.black(0.3)}
          returnKeyType={props.returnKeyType}
          secureTextEntry={(props.type === 'password' && passwordHidden)}
          {...(props.selectionColor !== undefined && { selectionColor: props.selectionColor })}
          selectTextOnFocus={props.selectTextOnFocus}
          style={[
            Style.textInput,
            props.leftIconName && {paddingLeft: 40} , 
            props.multiline && Style.textInputMultiline ,
            focused && !props.isInvalid && props.withBorderBottem && Style.borderBottom,
            props.rightIconName && {paddingRight: 40},
            props.isInvalid && Style.boderError,
            
          ]}

        />
        {displayRightIcon()}
        {displayErrorMessageStyle1()}
        {displayLeftIcon()}
      </View>
    )
  }

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
  const displayLeftIcon=()=>{
    if(props.leftIconName){
    return (
      <DSIcon
        onPress={props.onLeftIconPress ? props.onLeftIconPress : null}
        {...(props.onLeftIconPressIn !== undefined && { onPressIn: props.onLeftIconPressIn })}
        {...(props.onLeftIconPressOut !== undefined && { onPressOut: props.onLeftIconPressOut })}
        {...(props.onLeftIconLongPress !== undefined && { onLongPress: props.onLeftIconLongPress })}
        style={[Style.TextInputLeftIcon,!props.label && {top:32},props.leftIconStyle ]}
        name={props.leftIconName}
        color={props.leftIconColor} 
        size={props.leftIconSize}
      />
    )
    }
  }
  const displayRightIcon = () => {
    if (props.rightIconName) {
      return (
        <DSIcon
          onPress={props.onRightIconPress ? props.onRightIconPress : null}
          {...(props.onRightIconPressIn !== undefined && { onPressIn: props.onRightIconPressIn })}
          {...(props.onRightIconPressOut !== undefined && { onPressOut: props.onRightIconPressOut })}
          {...(props.onRightIconLongPress !== undefined && { onLongPress: props.onRightIconLongPress })}
          style={[Style.TextInputRightIcon,!props.label && {top:38},props.rightIconStyle ]}
          name={props.rightIconName}
          color={props.rightIconColor} 
          size={props.rightIconSize}
        />
      )
    }
    return null
  }
  const displayErrorMessageStyle1 = () => {
    if (props.isInvalid) {
      return (
        <DSLabel style={Style.textInputErrorMessageStyle1}>{props.errorMessage}</DSLabel>
      )
    }
  }
    return displayStyle1()
}
TextInput.defaultProps = {
  leftIconSize:"small",
  leftIconStyle:{},
  leftIconColor:Colors.black(),
  rightIconSize:'xxx-small',
  rightIconColor:Colors.black(),
  rightIconStyle:{}
}
TextInput.propTypes = {
  autoCapitalize: PropTypes.any,
  autoCorrect: PropTypes.any,
  editable: PropTypes.any,
  errorMessage: PropTypes.any,
  inputRef: PropTypes.any,
  isInvalid: PropTypes.any,
  keyboardType: PropTypes.any,
  label: PropTypes.any,
  leftIconName: PropTypes.shape({
    paddingLeft: PropTypes.number
  }),
  maxLength: PropTypes.any,
  multiline: PropTypes.any,
  numberOfLines: PropTypes.any,
  onBlur: PropTypes.func,
  onChange: PropTypes.any,
  onChangeText: PropTypes.any,
  onContentSizeChange: PropTypes.any,
  onEndEditing: PropTypes.any,
  onFocus: PropTypes.func,
  onKeyPress: PropTypes.any,
  onLabelLayout: PropTypes.any,
  onLabelLongPress: PropTypes.any,
  onLabelPress: PropTypes.any,
  onLabelTextLayout: PropTypes.any,
  onLayout: PropTypes.any,
  onRightIconLongPress: PropTypes.any,
  onRightIconPress: PropTypes.any,
  onRightIconPressIn: PropTypes.any,
  onRightIconPressOut: PropTypes.any,
  onScroll: PropTypes.any,
  onSelectionChange: PropTypes.any,
  onSubmitEditing: PropTypes.any,
  placeholder: PropTypes.any,
  placeholderTextColor: PropTypes.any,
  returnKeyType: PropTypes.any,
  rightIconName: PropTypes.shape({
    paddingRight: PropTypes.number
  }),
  selectTextOnFocus: PropTypes.any,
  selectable: PropTypes.any,
  selectionColor: PropTypes.any,
  type: PropTypes.string,
  value: PropTypes.any
}

export default TextInput
