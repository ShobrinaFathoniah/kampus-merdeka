import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Explore(props) {
    return (
        <View>
            <Text>Explore</Text>

            <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}>
                <Text>
                    Goes to Profile
                </Text>
            </TouchableOpacity>
        </View>
    )
}