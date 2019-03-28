//import library
import React, {components } from 'react';
import { View, Text } from 'react-native';

//create component
class Header extends components {
    render() {
        return (
            <View>
                <Text>{this.props.title}</Text>
            </View>
        )
    }
}

//export