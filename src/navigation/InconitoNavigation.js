import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LandingScreen from '../screen/LandingScreen/LandingScreen';
import Connexion from '../screen/auth/Connexion';
import Inscription from '../screen/auth/Inscription';

const MainStack = createStackNavigator();

const InconitoNavigation = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="connexion"
        options={{header: () => null}}
        component={Connexion}
      />
       <MainStack.Screen
        name="inscription"
        options={{header: () => null}}
        component={Inscription}
      />
    </MainStack.Navigator>
  );
};

export default InconitoNavigation;
