import React from 'react'
import { View } from 'react-native'
import Style from '../../../assets/styles/Style'

const DSContainer = (props) => {
  return (
        <View style={[Style.container,props.styleContainer]}>
            {props.children}
        </View>
  )
}

DSContainer.defaultProps = {
  styleContainer:{}
}

export default DSContainer
