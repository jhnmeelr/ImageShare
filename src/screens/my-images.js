import React from 'react';
import { View, ActivityIndicator, Dimensions } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Icon } from 'native-base';

import * as Actions from '../actions';
import Header from '../components/header';
import ImagesGrid from '../components/images-grid';

let { height } = Dimensions.get('window');

class MyImages extends React.Component {
  static navigationOptions = {
    drawerLabel: 'My Images',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="person" style={{ fontSize: 40, color: tintColor }}/>
    )
  };

  componentWillMount() {
    this.props.fetchImages(this.props.user.name);
  }

  render() {
    const { navigation, fetchingImages, images } = this.props;

    return (
      <View>
        <Header onMenuButtonPress={() => navigation.navigate('DrawerOpen')} onCameraButtonPress={() => navigation.navigate('Camera')}/>
        {fetchingImages &&
          <View style={{ justifyContent: 'center', height: (height - 50) }}>
            <ActivityIndicator/>
          </View>}
        <ImagesGrid images={images}/>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    images: state.imagesReducer.userImages,
    user: state.imagesReducer.user,
    fetchingImages: state.imagesReducer.fetchingUserImages
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MyImages);
