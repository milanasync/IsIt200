import React, {Component} from 'react';
import {Text, StyleSheet, StatusBar, View, ScrollView} from 'react-native';

// redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// import actions here
//ACTION_IMPORT

const styles = StyleSheet.create({});

const MainLayoutScreen = (props) => {
  return (
    <>
      <StatusBar {...props.app.styles.statusBar} />
      <ScrollView style={props.app.styles.mainContainer} keyboardShouldPersistTaps="handled">{props.children}</ScrollView>
    </>
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
export default connect(mapStateToProps, mapDispatchToProps)(MainLayoutScreen);
