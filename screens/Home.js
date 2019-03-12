import React, { Component } from 'react';
import {
  View,
  Platform,
  FlatList,
  ActivityIndicator,
  Text
} from 'react-native';
import FriendListItem from '../components/FriendListItem';

class Home extends Component {
  state = {
    data: [],
    loading: true
  };

  componentDidMount = () => {
    this.fetchData();
  };

  fetchData = async () => {
    try {
      let res = await fetch('https://randomuser.me/api/?results=20');
      const resJson = await res.json();

      this.setState({ data: resJson.results, loading: false });
    } catch (error) {
      alert('Versuchen Sie noch einmal');
      this.setState({ loading: false });
    }
  };

  refresh = () => {
    this.setState({ loading: true });
    this.fetchData();
  };

  static navigationOptions = { header: null };

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.spinner}>
          <ActivityIndicator size="large" color="#2196f3" />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <FlatList
            data={this.state.data}
            keyExtractor={item => item.email}
            renderItem={({ item }) => (
              <FriendListItem
                freund={item}
                onPress={() =>
                  this.props.navigation.navigate('Freunde', {
                    freund: item
                  })
                }
              />
            )}
            ItemSeparatorComponent={() => <View style={styles.listSeperator} />}
            ListEmptyComponent={() => {
              <Text style={styles.listEmpty}>
                Keine Data konnten geladen werden
              </Text>;
            }}
            onRefresh={this.refresh}
            refreshing={this.state.loading}
          />
        </View>
      );
    }
  }
}

const styles = {
  container: {
    marginTop: Platform.OS === 'android' ? 24 : 0,
    flex: 1,
    paddingTop: 30
  },
  listSeperator: {
    height: 1,
    marginVertical: 5
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listEmpty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18
  }
};

export default Home;
