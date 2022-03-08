import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ubuntu from '../../components/Ubuntu/Ubuntu'

export default function Explore(props) {
    return (
        <View>
            <Text style={{fontFamily: 'UbuntuMono-Regular'}}>Explore</Text>

            <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}>
                <Text>
                    Goes to Profile
                </Text>
                {/* <Ubuntu text="Hallo inidari uubntu" /> */}
                <Ubuntu color="red" type="Bold">Ini dari ubuntu lainnya</Ubuntu>
            </TouchableOpacity>
        </View>
    )
}