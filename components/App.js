import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Header from './Header';
import Card from './Card';

class App extends React.Component {
  render() {
    return (
      <View >
        <Header title={"Albums"}></Header>
        <Card />
      </View>
    );
  }
}

export default App;
