import React from 'react';
import { Image, ScrollView, Dimensions, View, StyleSheet } from 'react-native';

let { width } = Dimensions.get('window');

export default class ImagesGrid extends React.Component {
  render() {
    const { images } = this.props;

    return (
      <ScrollView>
        <View style={styles.imageContainer}>
          {images && images.map(img => <Image style={styles.image} key={img.id} source={{ uri: img.src }}/>)}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  },
  image: {
    width: (width / 3 - 2),
    margin: 1,
    height: (width / 3 - 2),
    resizeMode: 'cover'
  }
});
