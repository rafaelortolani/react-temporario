import { configs } from '../configs';
import OneSignal from 'react-onesignal';

const options = {
    autoRegister: true,
    autoResubscribe: true,
    notifyButton : { enable: true }
}

OneSignal.initialize(configs.onesignal, options);

try{
    OneSignal.registerForPushNotifications();
}catch(error){
}