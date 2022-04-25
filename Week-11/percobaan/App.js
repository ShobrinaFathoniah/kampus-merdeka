import {View, Text, TouchableOpacity, Button} from 'react-native';
import React, {useEffect} from 'react';
import crashlytics from '@react-native-firebase/crashlytics';
import analytics from '@react-native-firebase/analytics';

const App = () => {
  useEffect(() => {
    crashlytics().log('App mounted.');
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
          onPress={async () =>
            await analytics().logEvent('login', {
              id: 3745092,
              item: 'mens grey t-shirt',
              description: ['round neck', 'long sleeved'],
              size: 'L',
            })
          }
        />
      </View>
    </View>
  );
};

export default App;
