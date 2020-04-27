import React, {Component, useState} from 'react';
import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import LottieView from 'lottie-react-native';

// redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {CommonTypographyComponent, CommonButtonComponent} from '../';

import {getTestGetCall} from '../../api';

// import actions here
//ACTION_IMPORT

const styles = StyleSheet.create({});

const testApi = async (item) => {
  switch (item.request.method) {
    case 'GET':
      return await getTestGetCall(item.request.url);
    case 'POST':
      return false;
    default:
      return false;
  }
};

const CommonListItemComponent = ({app, item}) => {
  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  return (
    <TouchableWithoutFeedback>
      <View style={app.styles.listItem}>
        {loading ? (
          <View style={app.styles.listLoading}>
            <LottieView
              style={app.styles.loading}
              source={require('./loading.lottie.json')}
              autoPlay
              loop
            />
          </View>
        ) : null}
        <View style={app.styles.listItemRow}>
          <View style={app.styles.nintyPercent}>
            <CommonTypographyComponent>{item.name}</CommonTypographyComponent>
            <CommonTypographyComponent>
              {item.request.url}
            </CommonTypographyComponent>
          </View>
          <View style={app.styles.tenPercent}>
            <CommonTypographyComponent>
              {item.request.method}
            </CommonTypographyComponent>
          </View>
        </View>
        <View style={app.styles.listItemRowAround}>
          <CommonButtonComponent
            onPress={async (_) => {
              setLoading(true);
              setSuccess(false);
              let response = await testApi(item, setLoading);
              setLoading(false);
              if (response) {
                setSuccess(true);
              }
            }}
            sm
            title={app.strings.test}
          />
          <CommonButtonComponent sm title={app.strings.edit} />
          <CommonButtonComponent sm title={app.strings.headers} />
          <CommonButtonComponent sm title={app.strings.params} />
          {success ? (
            <CommonButtonComponent sm success title={app.strings.success} />
          ) : null}
        </View>
      </View>
    </TouchableWithoutFeedback>
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
)(CommonListItemComponent);
