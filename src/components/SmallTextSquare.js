import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

export default function SmallTextSquare({categoryText, imageRoute}){
  return (
    <View style={styles.card}>
        <View style={styles.categoryContent}>
            <Image style={{width: '50%', height: '50%'}} 
                source={imageRoute} resizeMode='contain'/>
            <Text style={styles.text}>{categoryText}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
        width: '80%',
        height: 128,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 12,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: '#4789E9',
        elevation: 4,
        shadowOffset: { width: 1, height: 1},
        shadowColor: '#000',
        shadowOpacity: 0.6,
        shadowRadius: 4,
    },
    categoryContent:{
        width: '100%',
        height: 128,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        marginVertical: 4,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        color: 'black'
    }
})