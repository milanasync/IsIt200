import React, {Component} from 'react';
import {Text, StyleSheet, FlatList} from 'react-native';

// redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
  CommonListItemComponent,
  CommonListEmptyComponent,
} from '../../components';
// import actions here
//ACTION_IMPORT

const styles = StyleSheet.create({});

const PostmanCollectionListRequest = ({app, requests, loading= false }) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={app.styles.list}
      data={requests}
      ListEmptyComponent={<CommonListEmptyComponent loading={loading}/>}
      renderItem={({item}) => <CommonListItemComponent item={item} />}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    app: state.appReducers.app,
    PostmanCollectionForm: state.PostmanCollectionFormReducers,
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
)(PostmanCollectionListRequest);
