import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function ButtonText({text, onPress}){
  return (
    <TouchableOpacity style={styles.cardOpacity} activeOpacity={0.55}  onPress={onPress}>
        <View style={styles.card}>
            <Text style={styles.smallBoldText}>{text} </Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    cardOpacity:{
        width: '87.5%',
        height: 144,
        backgroundColor: 'white',
        marginVertical: 12,
        borderRadius: 24,
        elevation: 4,
        shadowOffset: { width: 1, height: 1},
        shadowColor: '#000',
        shadowOpacity: 0.6,
        shadowRadius: 4,
    },
    card:{
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 24,
        borderWidth: 1,
        borderColor: '#4789E9',
    },
    smallBoldText:{
        marginVertical: 4,
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'left',
        color: 'black'
    }
})