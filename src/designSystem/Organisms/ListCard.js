import React from 'react'
import { View, Text, FlatList } from 'react-native'
import Colors from '../../assets/styles/Colors';
import Style from '../../assets/styles/Style';
import DSLabel from '../Atoms/DSLabel/DSLabel';
import CardaImge from '../Molecules/Card/CardImage'

export default function ListCard(props) {

    const renderItem = ({ item }) => (
        <CardaImge style={item.icon?{ height: 132, width: 136, marginEnd: 8, marginBottom: 20 }:{ marginVertical: 8 }} icon={item.icon} image={item.image} text={item.title} label={item.label} />
    );
    

    return (
        <View styleContainer={{ backgroundColor: Colors.grey() }}>
            <DSLabel style={Style.sectionLabel}>{props.label}</DSLabel>
            <FlatList
                data={props.cardData}
                horizontal={props.position === 'horizontal'}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />


        </View>
    )
}
