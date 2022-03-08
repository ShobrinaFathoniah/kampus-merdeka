import React from 'react'
import { Text } from 'react-native'

const Ubuntu = ({ type = "Regular", color= "black", children }) => {
    // return <Text style={{fontFamily: 'UbuntuMono-Regular'}}>{props.text}</Text>
    return <Text style={{ fontFamily: `UbuntuMono-${type}`, color: color }}>{children}</Text>
}

export default Ubuntu