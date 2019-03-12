import React, { Component } from 'react';
import { Text, ScrollView, Platform, Image, Dimensions } from 'react-native';

class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title:
        navigation.getParam('freund').name.first +
        ' ' +
        navigation.getParam('freund').name.last
    };
  };

  render() {
    const freund = this.props.navigation.getParam('freund');
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={{ uri: freund.picture.large }} style={styles.image} />
        <Text>
          {freund.name.first} {freund.name.last}
        </Text>
      </ScrollView>
    );
  }
}

const screenWidth = Dimensions.get('window').width * 0.75;

const styles = {
  container: {
    marginTop: Platform.OS === 'android' ? 24 : 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  image: {
    width: screenWidth,
    height: screenWidth,
    marginBottom: 20
  }
};

export default Home;
