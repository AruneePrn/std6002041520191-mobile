//import library
import React, {Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import CardSection from './CardSection';

class Card extends Component {
    render() {
        return (
            <View>
                <CardSection>
                <View style={{flexDirection: "row"}}>
                        <Image
                            style={{width: 150, height: 150, marginLeft:10, marginTop:10}}
                            source={{uri: 'https://bit.ly/2TArDzu'}}
                        />
                        <View style={{marginTop: 60, marginLeft: 10}}>
                            <Text>Name: Arunee Prakobphon</Text>
                            <Text>No.: 6002041520191</Text>
                        </View>
                    </View>
                </CardSection>

                <CardSection>
                    <View style={{marginLeft:10, marginTop:20, alignItems:"center"}}>
                        <Image
                            //style={{justifyContent:"center",alignItems:'center', marginLeft:10, marginTop:10}}
                            style={{width: 250, height: 200}}
                            source={{uri: 'https://bit.ly/2FBq27o'}}
                        />
                        <Text>The Dog</Text>
                    </View>
                </CardSection>

                <CardSection>
                    <View style={styles.button}>
                        <Button
                            style={{width: 300, height:20,backgroundColor: 'red' }}
                            title="Buy"
                        />
                    </View>
                    
                </CardSection>

                
            </View>
        );
    }
}

const styles = {
    button: {
        justifyContent:'center', 
        alignItems:'center', 
        marginTop: 10
    },
    /*images: {
        justifyContent:'center', 
        alignItems:'center', 
    }*/
}

export default Card;