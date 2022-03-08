import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Profile(props) {
    return (
        <View>
            <Text style={{fontFamily: 'UbuntuMono-Regular'}}>Profile</Text>

            <TouchableOpacity onPress={() => props.navigation.navigate("Register")}>
                <Text>
                    Goes to Register
                </Text>
            </TouchableOpacity>
        </View>
    )
}