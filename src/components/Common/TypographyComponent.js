import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';

// redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Colors from '../../theme/Colors.styles';

// import actions here
//ACTION_IMPORT

const styles = StyleSheet.create({});

const CommonTypographyComponent = (props) => {
  let style = props.app.styles.text;
  if(props.btn) {
    style = props.app.styles.buttonText;
  }

  if(props.btn && props.sm) {
    style = props.app.styles.buttonBottomOutlineText;
  }

  if(props.error) {
    style = props.app.styles.errorText;
  }

  if(props.success) {
    style = {...style, ...{color: Colors.success}}
  }
  return (
    <Text
      {...props}
      style={style}>
      {props.children}
    </Text>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
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
)(CommonTypographyComponent);
