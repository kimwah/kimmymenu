import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';

export default class Card extends Component {
  render() {
    const { containerStyle } = styles;
    return (
      <View style={containerStyle}>
        {this.props.children}
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  }
};

/**
 *         <Text>{title}</Text>
        <Text>{artist}</Text>
        <Text>{url}</Text>
        <Text>{image}</Text>
        <Image style={{ width: 50, height: 50 }} source={{ uri: thumbnail_image }} />
 */