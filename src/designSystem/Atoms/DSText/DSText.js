import React from 'react'
import { View, Text } from 'react-native'

export default function DSText(props) {
    return (
        <View> 
            <Text style={props.style}>{props.text}</Text>
        </View>
    )
}
