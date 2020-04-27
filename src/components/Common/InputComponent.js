import React, {Component, useState} from 'react';
import {Text, StyleSheet, TextInput} from 'react-native';

// redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// import actions here
//ACTION_IMPORT

import {CommonTypographyComponent} from '../../components';

const styles = StyleSheet.create({});

const CommonInputComponent = (props) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <CommonTypographyComponent>{props.label}</CommonTypographyComponent>
      <TextInput
        {...props}
        style={active ? props.app.styles.activeInput : props.app.styles.input}
        onFocus={(_) => setActive(true)}
        onBlur={(_) => setActive(false)}
      />
      <CommonTypographyComponent error>
        {props.errorMsg}
      </CommonTypographyComponent>
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
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommonInputComponent);
