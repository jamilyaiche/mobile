import React, {useEffect} from 'react';
import Store, {persistor} from './src/Redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import MainContainer from './src/navigation/MainContainer';
import Colors from './src/assets/styles/Colors';
import Style from './src/assets/styles/Style';

const App = () => {
  useEffect(() => {
    if (SplashScreen) {
      SplashScreen.hide();
    }
  });

  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <View style={{flex: 1}}>
            {Platform.OS === 'ios' && (
              <View style={Style.outSideSafeAreaViewContainer} />
            )}
            
              <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{flex: 1}}>
                <StatusBar backgroundColor={Colors.black()} />
                <MainContainer />
              </KeyboardAvoidingView>
          </View>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
