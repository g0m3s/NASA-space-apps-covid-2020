import PushNotification from 'react-native-push-notification';

export default {

    configure(){

        PushNotification.configure({

            onNotification(notificacao){

                console.log('notificacao recebida', notificacao);
                // PushNotification.configure();

            }

        });

        return PushNotification;

    }


};