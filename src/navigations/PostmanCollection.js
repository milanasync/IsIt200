import * as React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

// redux
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

// import actions here

// screens
import PostmanCollectionForm from '../screens/PostmanCollection/Form';

const screens = [
  {
    name: "PostmanCollectionForm",
    component: PostmanCollectionForm
  }
];

const PostmanCollection = () => {
  return (
    <Stack.Navigator>
      {screens.map(screen => (
        <Stack.Screen
          name="PostmanCollectionForm"
          component={PostmanCollectionForm}
          options={
            {
              title: 'Postman Collection',
              headerTitleAlign: 'center', // option (center, left) Defaults to center on iOS and left on Android.
              headerStyle: {},
              headerTitleStyle: {},
              headerBackTitleStyle: {},
              headerLeftContainerStyle: {},
              headerTitleContainerStyle: {},
              headerRightContainerStyle: {},
              headerTintColor: '',
              headerTransparent: false,
              cardShadowEnabled: true,
              cardOverlayEnabled: true, // Defaults to true on Android and false on iOS.
              //headerStatusBarHeight: 0,
              //headerBackground: settings => { return null },
              //header: settings => { return null }, // React Element
              //headerTitle:settings => { return null }, // React Element
              //headerRight: settings => { return null }, // React Element
              //headerLeft: settings => { return null }, // React Element
              //headerBackImage: settings => { return null }, // React element
              //headerBackTitle:'', // Title string used by the back button on iOS. Defaults to the previous scene's headerTitle
              //headerBackTitleVisible:true,
            }
          }
        />
      ))}
    </Stack.Navigator>
  );
}

const mapStateToProps = state => {
  return {
    state,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      // add action here
    },
    dispatch,
  );
export default connect(mapStateToProps, mapDispatchToProps)(PostmanCollection);
