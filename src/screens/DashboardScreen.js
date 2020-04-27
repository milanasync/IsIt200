import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

// redux
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

// import actions here
import ApplicationActions from '../redux/actions';

class DashboardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return <Text>DashboardScreen works!</Text>;
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => {
  return {
    state,
    DashboardScreen: state.DashboardScreenReducers
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...ApplicationActions.DashboardScreenActions
    },
    dispatch,
  );
export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);

