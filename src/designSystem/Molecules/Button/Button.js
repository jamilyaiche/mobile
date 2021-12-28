import React from 'react'
import DSBoutton from '../../Atoms/DSBoutton/DSBoutton'
import DSIcon from '../../Atoms/DSIcon/DSIcon'
import DSLabel from '../../Atoms/DSLabel/DSLabel'
import PropTypes from 'prop-types'
import Style from '../../../assets/styles/Style'
import {View} from 'react-native'

const Button = (props) => {
  const displayBoutonContent = (size, theme) => {
    return (
      <DSLabel
        style={[props.center ? Style.btnLabel : Style.btnLabelLeft, size, theme, props.styleBtnTxt, props.disabled && disabledLable]}
        allowFontScaling={props.allowFontScaling}
      >
        {props.text}
      </DSLabel>
    )
  }

  const displayBoutonIcon = (size, theme) => {
    if (props.icon) {
      return (
        <DSIcon
          size="extra-small"
          name={props.icon}
          color={props.disabled ? disabledLable.color:theme.color}
          style={{paddingRight:10}}
          {...(props.onPress !== undefined && { onPress: props.onPress })}
          disabled={props.disabled}
        />
      )
    }
  }

  let btnStSize = Style.btnNormal
  let labelStSize = Style.btnLabelNormal
  let disabledLable = Style.btnLabelDisabled
  if (props.size === 'large') {
    btnStSize = Style.btnLarge
    labelStSize = Style.btnLabelLarge
  } else if (props.size === 'small') {
    btnStSize = Style.btnSmall
    labelStSize = Style.btnLabelSmall
  }
  let btnStTheme = {}
  let labelStTheme = {}
  let disabledTheme = {}
  if (props.theme === 'default') {
    btnStTheme = Style.btnDefault
    labelStTheme = Style.btnLabelDefault
    disabledTheme = Style.btnPrimaryDisabled

  } else if (props.theme === 'transparent') {
    btnStTheme = Style.btnTransparent
    labelStTheme = Style.btnLabelTransparent
    disabledTheme = {}
  } else if (props.theme === 'primary') {
    btnStTheme = Style.btnPrimary
    labelStTheme = Style.btnLabelPrimary,
    disabledTheme = Style.btnPrimaryDisabled
  }
  else if (props.theme === 'white') {
    btnStTheme = Style.btnWhite
    labelStTheme = {...Style.btnLabelPrimary,...Style.whiteButtonLabel},
    disabledTheme = Style.btnPrimaryDisabled
  }

  return (
    <DSBoutton
      disabled={props.disabled}
      {...(props.onLongPress !== undefined && { onLongPress: props.onLongPress })}
      {...(props.onPress !== undefined && { onPress: props.onPress })}
      {...(props.onPressIn !== undefined && { onPressIn: props.onPressIn })}
      {...(props.onPressOut !== undefined && { onPressOut: props.onPressOut })}
      delayLongPress={props.delayLongPress}
      style={
        props.customizeBtn 
        ? props.styleBtn 
        : [Style.btn, btnStSize, btnStTheme, props.styleBtn , props.disabled && disabledTheme]
      }
    >
      <View style={{flexDirection:'row', justifyContent:'center',alignItems: 'center'}} >
      {displayBoutonIcon(labelStSize, labelStTheme)}
      <View style={{alignSelf:'center'}} >
      {displayBoutonContent(labelStSize, labelStTheme)}
      </View>
      </View>
    </DSBoutton>
  )
}

Button.defaultProps = {
  size: 'normal',
  theme: '',
  text: 'Button',
  Icon: '',
  allowFontScaling: false,
  disabled: false,
  delayLongPress: 500,
  center: true,
  styleBtnTxt: {},
  styleBtn: {},
  customizeBtn: false

}

Button.propTypes = {
  Icon: PropTypes.string,
  allowFontScaling: PropTypes.bool,
  center: PropTypes.bool,
  customizeBtn: PropTypes.bool,
  delayLongPress: PropTypes.number,
  disabled: PropTypes.bool,
  icon: PropTypes.any,
  onLongPress: PropTypes.func,
  onPress: PropTypes.func,
  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func,
  size: PropTypes.string,
  styleBtn: PropTypes.object,
  styleBtnTxt: PropTypes.object,
  text: PropTypes.string,
  theme: PropTypes.string
}

export default Button
