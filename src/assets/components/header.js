import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Icon, Button } from 'native-base';
import { Platform } from 'react-native';

export default class Header extends React.Component {
  render() {
    const { onMenuButtonPress, onCameraButtonPress } = this.props;

    return (
      <View style={styles.container}>

        {Platform.OS === 'android' &&
          <Button transparent onPress={onMenuButtonPress}>
            <Icon android="md-menu" style={styles.menuIcon}/>
          </Button>}

        <Image source={require('../assets/images/logo.png')} style={styles.logo} />

        {Platform.OS === 'android' &&
          <Button onPress={onCameraButtonPress} transparent>
            <Icon name="camera" style={styles.cameraIcon}/>
          </Button>}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  menuIcon: {
    fontSize: 30,
    color: 'black'
  },
  logo: {
    height: 25,
    resizeMode: 'contain',
    margin: 10
  },
  cameraIcon: {
    fontSize: 30,
    color: 'black'
  }
});
