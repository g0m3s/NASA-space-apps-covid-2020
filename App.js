/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Button,
} from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

import Notification from './services/notification';
// import notification from './services/notification';

var titulos = ['ok 1','ok 2','ok 1','ok 2','ok 1','ok 2','ok 1','ok 2','ok 1','ok 2'];//titulos aleatorios
var textos = ['ok 1','ok 2','ok 1','ok 2','ok 1','ok 2','ok 1','ok 2','ok 1','ok 2'];//mensagens que aparecerao



const App: () => React$Node = () => {

    const getRandom = () => {

        return Math.floor(Math.random() * max + 1)

    }

  const createNotification = () => {

    Notification
    .configure()
    .localNotificationSchedule({

        // title: titulos[(Math.floor(Math.random() * 10 + 1))],
        // message: textos[(Math.floor(Math.random() * 10 + 1))],
        title: 'are you having nightmares?',
        message: 'this is happening to several people, it is usually due to the stress of this situation, so try to calm down',
        color: 'red',
        vibration: 450,
        // repeatType: "time",
        // repeatTime: 4000,
        date: new Date(Date.now() + 1 )

    });

  }

  const alteraTamanho = () => {

    styles.header.height = 300
    styles.viewEscondida.display = 'flex'

  }

  return (

    <>

        <View style = {styles.header}>

            <Text style = {styles.h1} onPress={alteraTamanho} > Hi! :) </Text>

            <Text style = {styles.h5} onPress={alteraTamanho} > tap here </Text>        

            <View style = {styles.viewEscondida}>

                <Text style = {styles.h2Header} > Our idea is that you don't feel alone or sad. </Text>

            </View>

            

        </View>

        <View style = {styles.viewStyle}>

            <Text style = {styles.h2}> After clicking the button below, you will receive notifications with cool messages during your day </Text>


            <View style= {styles.viewButton} onPress={createNotification} >

                <Text style = {styles.button} onPress={createNotification} >Click me</Text>

            </View>

            {/* <Text style = {styles.h2} >You can also write messages to other people</Text> */}

        </View>

    </>

  );

};

const styles = StyleSheet.create({

    viewStyle: {

        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 15,
        textAlign: 'left',

    },
    viewButton: {

        marginTop: 100,
        backgroundColor: "rgb( 117,93,196 )",
        width: 250,
        height: 70,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,

    },
    viewEscondida: {

        display: 'none',
        height: 30

    },
    h1: {

        fontSize: 50,
        color: "white",

    },
    h2: {

        fontSize: 25,
        color: "black",

    },
    h5: {

        fontSize: 10,
        color: "white",

    },
    button: {

        fontSize: 30,
        color: "white"

    },
    header: {

        backgroundColor: "rgb( 117,93,196 )",
        // flex: 1,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',

    },
    h2Header: {

        fontSize: 25,
        color: "white",
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },

});

export default App;
