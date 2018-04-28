import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import FirstComponent from './src/components/FirstComponent';
import Header from './src/components/Header';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Initial Message'
    };
    this.handleOnPress = this.handleOnPress.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange(e) {
    this.setState(
      {
        message: e.target.value
      }
    )
  }
  handleOnPress() {
    console.log('testing me');
    return null;
  }
  render() {
    const { message } = this.state;
    return (      
      <View style={styles.container}>
        <Header title="Kimmy Menu World" />
        <Text>My React ?Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <TextInput 
        style={{height: 40, borderColor: 'gray', borderWidth: 2}}
        value={this.state.message}
        onChange={this.handleOnChange}
        />
        <FirstComponent message={message} />
        <Button
          onPress={this.handleOnPress}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
