import {View, Text, TouchableOpacity, Button} from 'react-native';
import React, {useEffect} from 'react';
import crashlytics from '@react-native-firebase/crashlytics';
import analytics from '@react-native-firebase/analytics';
import messaging from '@react-native-firebase/messaging';

const App = () => {
  useEffect(() => {
    crashlytics().log('App mounted.');
    // const unsubscribe = messaging().onMessage(async remoteMessage => {
    //   Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    // });

    // return unsubscribe;
  });

  return (
    <View>
      <Text>App</Text>
      <TouchableOpacity onPress={() => crashlytics().crash()}>
        <Text>Test</Text>
      </TouchableOpacity>
      <View>
        <Button
          title="Add To Basket"
          onPress={async () => {
            await analytics().logEvent('login', {
              id: 3745092,
              item: 'mens grey t-shirt',
              description: ['round neck', 'long sleeved'],
              size: 'L',
            });
            const token = await messaging().getToken();
            console.log(token, 'tooken');
          }}
        />
      </View>
    </View>
  );
};

export default App;
