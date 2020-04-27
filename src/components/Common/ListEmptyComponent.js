import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import LottieView from 'lottie-react-native';

// redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {CommonTypographyComponent} from '..';

// import actions here
//ACTION_IMPORT

const styles = StyleSheet.create({});

const CommonListEmptyComponent = ({app, loading = false}) => {
  return (
    <View style={app.styles.center}>
      {!loading ? (
        <CommonTypographyComponent>
          {app.strings.noDataFound}
        </CommonTypographyComponent>
      ) : (
        <LottieView style={app.styles.loading} source={require('./loading.lottie.json')} autoPlay loop />
      )}
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    app: state.appReducers.app,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      //ACTION_TO_PROPS
    },
    dispatch,
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommonListEmptyComponent);
