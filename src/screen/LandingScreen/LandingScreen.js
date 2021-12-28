import React from 'react';
import { ScrollView, View } from 'react-native';
import Colors from '../../assets/styles/Colors';
import { Button, Container, TextInput } from '../../designSystem';
import CardImage from '../../designSystem/Molecules/Card/CardImage';
import ListCard from '../../designSystem/Organisms/ListCard';
export default function LandingScreen(props) {
  const card1 = [
    { id: 1, icon: {name:'calendar'}, title: 'Pass through' },
    { id: 2, icon: {name:'calendar'}, title: 'Pass through' },
    { id: 3, icon: {name:'calendar'}, title: 'Pass through', label: '2 éléments' },
    { id: 4, icon: {name:'calendar'}, title: 'Pass through', label: '2 éléments' },
    { id: 5, icon: {name:'calendar'}, title: 'Pass through', label: '2 éléments' },
  ]
  const card2 = [
    { id: 1, image:{ height: 104,source:(require('../../assets/images/apart1.jpg')) }, title: '12 Avenue de Wagram 4ème étage', label: 'appartement' },
    { id: 2, image:{ height: 104,source:(require('../../assets/images/apart2.jpg')) }, title: '12 Avenue de Wagram 4ème étage', label: 'appartement' },
    { id: 3, image:{ height: 104,source:(require('../../assets/images/apart3.jpg')) }, title: '12 Avenue de Wagram 4ème étage', label: 'appartement' },
    { id: 4, image:{ height: 104 }, title: '12 Avenue de Wagram 4ème étage', label: 'appartement' },
    { id: 5, image:{ height: 104 }, title: '12 Avenue de Wagram 4ème étage', label: 'appartement' },
  ]
  return (
    <>
      <Container styleContainer={{ backgroundColor: Colors.grey() }}>
        <ScrollView>
          <TextInput placeholder='Nom' />

          <TextInput placeholder='Prenom' />
          <Button text="Connexion" size='large' theme='primary' styleBtn={{ marginTop: 15 }} />
          <Button text="Inscription" size='large' theme='white' />

          <CardImage style={{ marginBottom: 10 }} image={{ height: 104 }} text='12 Avenue de Wagram 4ème étage' label='appartement' />
          <View style={{
            marginBottom: 10,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",

          }}>
            <CardImage style={{ width: '49%' }} icon={{ name: 'calendar', background: 'round' }} text='Photos' label='47 éléments' height={104} />
            <CardImage style={{ width: '49%' }} icon={{ name: 'calendar', background: 'round' }} text='Photos' label='47 éléments' height={104} />
          </View>

          <View style={{
            marginBottom: 10,
            flexDirection: "row",
            flexWrap: "wrap",


          }}>
            <CardImage style={{ height: 132, width: 136, marginEnd: 8 }} icon={{ name: 'calendar' }} text='Pass through' label='2 éléments' />
            <CardImage style={{ height: 132, width: 136, marginEnd: 8 }} icon={{ name: 'calendar' }} text='Pass through' label='2 éléments' />
          </View>
          <ListCard cardStyle={{ height: 132, width: 136, marginEnd: 8 }}
            label='Services' position='horizontal' cardData={card1} />
          <ListCard cardStyle={{ marginBottom: 10 }}
            label='Vos Projets' cardData={card2} />


        </ScrollView>
      </Container>

    </>
  );
}
