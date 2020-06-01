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

import Notification from './services/notification';

var titulos = ['hi how are you?','How is your day going?','Have you taken a sun today?'];//titulos aleatorios
var textos = ['how about taking the day to see that movie you love? it`s okay to take a day off and not be extremely productive','how about creating a routine to get organized in the home office? you can start your day by stretching','if you feel you need help, several psychologists are attending online. How about talking about what`s going on with someone prepared?'];//mensagens que aparecerao



const App: () => React$Node = () => {

    const getRandom = (max) => {
        return Math.floor(Math.random() * max + 1)
    }

  const createNotification = () => {

    Notification
    .configure()
    .localNotificationSchedule({

        title: titulos[getRandom(2)],
        message: textos[getRandom(2)],
        color: 'red',
        vibration: 450,
        date: new Date(Date.now() + 1 )//lembrar que da pra agendar por aqui

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

        <ScrollView>
            
                <View style = {styles.viewStyle}>

                    <Text style = {styles.h2}> After clicking the button below, you will receive notifications with cool messages during your day </Text>


                    <View style= {styles.viewButton} onPress={createNotification} >

                        <Text style = {styles.button} onPress={createNotification} >Click me</Text>

                    </View>


            </View>


            <View style = {styles.viewT2}>

                <Text style = {styles.h2}> You can also write a message that can reach a person anywhere in the world </Text>

                <TextInput
                
                    placeholder =  '            write a message'
                    style = {styles.textInput}

                />

                <View style= {styles.viewButtonSend} onPress={createNotification} >

                    <Text style = {styles.button} onPress={createNotification} >Submit</Text>

                </View>

                    <Text style = {styles.h5P2} onPress={createNotification} >It will be evaluated before reaching another person. Remember to be nice and kind</Text>

            </View>


        </ScrollView>

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
    viewT2: {

        marginTop: 200,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10

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
    h5P2: {

        fontSize: 10,
        color: "black",
        marginTop: 15

    },
    button: {

        fontSize: 30,
        color: "white",

    },

    viewButtonSend: {

        marginTop: 10,
        backgroundColor: "rgb( 117,93,196 )",
        width: 150,
        height: 50,
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
        flex: 1 ,
        alignSelf: 'flex-end'

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

    textInput: {

        height: 80,
        padding: 30,
        width: 500,
        backgroundColor: '#00000011',
        borderRadius: 20

    }
});

export default App;
