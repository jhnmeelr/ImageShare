import React from 'react';
import { View, ScrollView } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Icon } from 'native-base';

import * as Actions from '../actions';

import Header from '../components/header';
import Gallery from '../components/gallery';
import ActivityIndicator from '../components/activity-indicator';

class ImagesList extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="list" style={{fontSize: 40, color: tintColor}}/>
    ),
    drawerLabel: 'All Images'
  };

  componentWillMount() {
    this.props.fetchImages();
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.addingImage && nextProps.addingImage) {
      this.scrollable.scrollTo({ y: 0 });
    }
  }

  render() {
    const { navigation, addingImage, images, fetchingImages } = this.props;

    return (
      <View style={{flex: 1}}>
        <Header
          onMenuButtonPress={() => navigation.navigate('DrawerOpen')}
          onCameraButtonPress={() => navigation.navigate('Camera')}
        />
        <ScrollView ref={scrollable => this.scrollable = scrollable}>
          {addingImage && <ActivityIndicator message="Adding image" /> }
          <Gallery imageList={images} loading={fetchingImages}/>
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    images: state.imagesReducer.images,
    addingImage: state.imagesReducer.addingImage,
    fetchingImages: state.imagesReducer.fetchingImages
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ImagesList);
