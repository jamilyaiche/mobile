import React from 'react'
import { View } from 'react-native'
import Colors from '../../../assets/styles/Colors'
import Style from '../../../assets/styles/Style'
import DSCard from '../../Atoms/DSCard/DSCard'
import DSIcon from '../../Atoms/DSIcon/DSIcon'
import DSImage from '../../Atoms/DSImage/DSImage'
import DSLabel from '../../Atoms/DSLabel/DSLabel'
import DSText from '../../Atoms/DSText/DSText'

export default function CardaImge(props) {
    const elems = [<DSText text={props.text} style={Style.CardTitle} />,
    props.label && <DSLabel style={Style.cardLabel}>{props.label}</DSLabel>]
    return (
        <View style={props.style}>
            <DSCard>
                {props.image && <DSImage height={props.image.height} ratio={-1} source={props.image.source ? props.image.source : require('../../../assets/images/no-image.jpg')} />}
                {props.icon && <View style={
                    props.icon.background === 'round' ? Style.cardIconRoundBackground : Style.cardIcon}>
                    <View style={props.icon.background === 'round' && Style.roundView}>
                        <DSIcon name={props.icon.name} color={props.icon.color || props.icon.background === 'round' ? Colors.white() : Colors.seconday()} size={props.icon.size || props.icon.background === 'round' ? 'normal' : 'medium'} />

                    </View>

                </View>}
                <View style={{ marginTop: 5 }}>
                    {props.icon ? elems : elems.reverse()}
                </View>

            </DSCard>
        </View>
    )
}
