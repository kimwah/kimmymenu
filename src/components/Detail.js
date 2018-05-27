import React from 'react';
import { Text, Image, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const Detail = (props) => {
  if (props.product) {
    const { title, artist, url, image, thumbnail_image } = props.product;
    console.log('props product:', props.product);
    return (
      <Card>
        <CardSection>
          <View style={styles.thumbnnailContainerStyle}>
            <Image style={styles.thumbnailStyle} source={{ uri: thumbnail_image }} />
          </View>
          <View style={styles.headerContentStyle}>
            <Text style={styles.headerTextStyle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </CardSection>
        <CardSection>
            <Image style={styles.imageStyle} source={{uri: image}} />
        </CardSection>  
      </Card>
    );
  } else {
    return null;
  }
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 60,
    width: 60
  },
  thumbnnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex:1,
    width: null
  }
};

export default Detail;