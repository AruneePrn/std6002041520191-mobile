//import library
import React, {Component } from 'react';
import { View, Text } from 'react-native';

//create component
class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.text}>{this.props.title}</Text>
            </View>
        );
    }
}

//style
const styles = {
    header: {
        padding:10,
        alignItems:'center',
        backgroundColor: '#5DADE2'
    },
    text: {
        fontSize: 30,
        color:'#D5D8DC'
    }  
};

//export
export default Header;