import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Icon } from 'native-base';
import Camera from 'react-native-camera';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions';

class CameraScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="camera" style={{ fontSize: 40, color: tintColor }}/>
    ),
  };

  takePicture = () => {
    const options = {};

    this.camera.capture({ metadata: options })
      .then((data) => {
        this.props.addImage(data);
        this.props.navigation.navigate('ImagesList');
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={camera => this.camera = camera}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
        >
          <Button onPress={this.takePicture} style={styles.cameraButton} transparent>
            <Icon name="camera" style={{ fontSize: 70, color: 'white' }}/>
          </Button>
        </Camera>
        <Button onPress={() => this.props.navigation.navigate('ImagesList')} style={styles.backButton} transparent>
          <Icon ios="ios-arrow-dropleft" android="md-arrow-dropleft" style={{fontSize: 30, color: 'white'}}/>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  },
  cameraButton: {
    flex: 0,
    alignSelf: 'center'
  },
  backButton: {
    position: 'absolute',
    top:20
  }
});

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CameraScreen);
