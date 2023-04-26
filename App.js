import * as React from 'react';
import { StyleSheet, StatusBar, View, Text } from 'react-native';
import ButtonText from './src/components/ButtonText';
import ButtonImage from './src/components/ButtonImage';
import SmallTextSquare from './src/components/SmallTextSquare';

export default function App() {
  return (
    <View style={styles.screenCont}>
      <StatusBar></StatusBar>
      <View style={styles.container}>
          <View style={styles.headerContainer}>

          </View>
          <View style={styles.contentContainer}>

          </View>
          
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.navContainer}>
          <ButtonImage cWidth='70%' cHeight='60%' imageRoute={require('./src/assets/home.png')}/>
          <Text style={styles.navText}>Inicio</Text>
        </View>
        <View style={styles.navContainer}>
          <ButtonImage cWidth='70%' cHeight='60%' imageRoute={require('./src/assets/close.png')}/>
          <Text style={styles.navText}>Multiplicacion</Text>
        </View>
        <View style={styles.navContainer}>
          <ButtonImage cWidth='70%' cHeight='60%' imageRoute={require('./src/assets/divide.png')}/>
          <Text style={styles.navText}>Division</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screenCont:{
      flex: 1,
      backgroundColor: '#89CFF0',
      alignItems: 'center',
      justifyContent: 'center'
  },
  container:{
      width: '90%',
      height: '90%'
  },
  bottomContainer:{
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#A9A9A9'
  },
  navContainer:{
    width: '30%',
    height: '100%',
    alignItems: 'center'
  },
  headerContainer:{
    width: '100%',
    height: '20%',
    backgroundColor: 'blue'
  },
  contentContainer:{
    width: '100%',
    height: '80%',
    backgroundColor: 'yellow'
  },
  titleText:{
      marginVertical: 8,
      fontWeight: 'bold',
      fontSize: 36,
      textAlign: 'center',
      color: 'black'
  },
  headerText:{
      marginVertical: 4,
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'left',
      color: 'black'
  },
  navText:{
    marginVertical: 2,
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'center',
    color: 'black'
},
})