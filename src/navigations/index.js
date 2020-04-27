import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// styles
import GlobalCss from '../theme/Global.style';
import Colors from '../theme/Colors.styles';
import Strings from '../theme/Strings.statics';

// import actions here
import ApplicationActions from '../redux/actions';

// naviagtion
import PostmanCollection from './PostmanCollection';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props.setAppAction({
      styles: GlobalCss,
      colors: Colors,
      strings: Strings,
    });
  }
  render() {
    return (
      <NavigationContainer>
        <PostmanCollection />
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    app: state.appReducers.app,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ...ApplicationActions.AppActions,
    },
    dispatch,
  );
export default connect(mapStateToProps, mapDispatchToProps)(App);
