import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';

// redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// import actions here
import ApplicationActions from '../../redux/actions';

// main layout view
import MainLayoutScreen from '../Main/LayoutScreen';
import {
  CommonInputComponent,
  CommonButtonComponent,
  CommonTypographyComponent,
} from '../../components';

import PostmanCollectionListRequest from './ListRequest';

import {getCollectionsCall} from '../../api';

class PostmanCollectionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postmanCollectionId: '77b20a02bdd0e3665abf',
      errorMsg: '',
      loading: false,
      response: {},
    };
  }

  componentDidMount() {
    this.props.Create_PostmanCollectionForm({});
  }

  componentWillUnmount() {}

  getPostmanCollection = async (_) => {
    let {postmanCollectionId} = this.state;
    if (postmanCollectionId === '') {
      this.setState({
        errorMsg: this.props.app.strings.enterPostmanId,
      });
      return;
    }

    this.setState({
      loading: true,
    });

    let response = await getCollectionsCall({id: postmanCollectionId});
    if (response) {
      this.props.Create_PostmanCollectionForm(response);
      this.setState({loading: false, errorMsg: ''});
    } else {
      this.props.Create_PostmanCollectionForm({});
      this.setState({
        errorMsg: this.props.app.strings.instanceNotFoundError,
      });
      this.setState({loading: false});
    }
  };

  addNew = () => {
    this.props.Create_PostmanCollectionForm({});
    this.setState({postmanCollectionId: ''});
  };
  render() {
    console.warn(this.props.PostmanCollectionForm.selected);
    return (
      <>
        <MainLayoutScreen>
          {this.props.PostmanCollectionForm.selected.item !=
          undefined ? null : (
            <CommonInputComponent
              errorMsg={this.state.errorMsg}
              onChangeText={(text) =>
                this.setState({postmanCollectionId: text})
              }
              value={this.state.postmanCollectionId}
              label={this.props.app.strings.postmanCollectionId}
            />
          )}
          <PostmanCollectionListRequest
            loading={this.state.loading}
            requests={this.props.PostmanCollectionForm.selected.item}
          />
        </MainLayoutScreen>
        {this.props.PostmanCollectionForm.selected.item != undefined ? (
          <CommonButtonComponent
            onPress={this.addNew}
            float
            title={this.props.app.strings.add}
          />
        ) : (
          <CommonButtonComponent
            loading={this.state.loading}
            onPress={this.getPostmanCollection}
            bottom
            title={this.props.app.strings.submit}
          />
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = (state) => {
  return {
    app: state.appReducers.app,
    PostmanCollectionForm: state.PostmanCollectionFormReducers,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ...ApplicationActions.PostmanCollectionFormActions,
    },
    dispatch,
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostmanCollectionForm);
