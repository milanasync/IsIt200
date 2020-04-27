import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

// redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// import actions here
//ACTION_IMPORT

import {CommonTypographyComponent} from '../../components';
import Colors from '../../theme/Colors.styles';

const styles = StyleSheet.create({});

const CommonButtonComponent = ({
  app,
  title = '',
  onPress = (_) => {},
  bottom = false,
  loading = false,
  float = false,
  sm = false,
  success= false
}) => {
  let style = app.styles.button;
  if (bottom) {
    style = app.styles.buttonBottom;
  }
  if (float) {
    style = app.styles.buttonBottomFloat;
  }

  if (sm) {
    style = app.styles.buttonBottomOutlineSm;
  }

  if(success) {
    style = {...style, ...{borderColor: Colors.sucess}}
  }
  return (
    <TouchableOpacity onPress={(_) => onPress()} style={style}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <CommonTypographyComponent btn sm={sm} success={success}>{title}</CommonTypographyComponent>
      )}
    </TouchableOpacity>
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
)(CommonButtonComponent);
