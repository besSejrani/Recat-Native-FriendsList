import React, { Component } from 'react';
import AppContainer from './screens/AppNavigator';

export default class App extends Component {
  render() {
    return <AppContainer style={styles.container} />;
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
};
