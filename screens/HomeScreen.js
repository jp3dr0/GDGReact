import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';

import ImageSrc from '../assets/music-player.png';

const HomeScreen = (props) => {
    return <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.text}>Hello from home</Text>
            <Image
                style={styles.logo} 
                source={ImageSrc}
                resizeMode="contain"/>
            <Text style={styles.title}>Título</Text>
            <Text style={styles.subtitle}>Subtítulo</Text>             
        </ScrollView>
        <Button
            onPress = {
                () => props.navigation.navigate('Search') 
                /*
                console.log('Pressionado')}
                */
            }
            title="Começar" />
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 40,
    },
    subtitle: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    logo: {
        height: 200
    },
    text: {
      color: 'blue',
    }
});

export default HomeScreen;