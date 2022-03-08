import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Home(props) {
    return (
        <View>
            <Text style={{fontFamily: 'UbuntuMono-Regular'}}>Home</Text>

            <TouchableOpacity onPress={() => props.navigation.navigate("Explore")}>
                {/* goback lebih dinamis */}
                {/* navigate.goBack() */}
                <Text>
                    Goes to Explore
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})

//flow
// screen awal register -> login -> home -> oexplore -> profile -> statement awal (register) <cant find variable props carisendiri penyelesaiannya>