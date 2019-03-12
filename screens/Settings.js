import React, { Component } from 'react';
import { Text, View, Platform, SectionList } from 'react-native';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {
              title: 'Version',
              data: [{ key: '1', info: '1.0' }]
            },
            {
              title: 'Impressum',
              data: [
                {
                  key: '1',
                  info: 'Ynsane SA'
                },
                {
                  key: '4',
                  info: 'copyright 2018'
                }
              ]
            }
          ]}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item.info}</Text>
          )}
          renderSectionHeader={({ section }) => (
            <Text style={styles.section}>{section.title}</Text>
          )}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    marginTop: Platform.OS === 'android' ? 24 : 0,
    flex: 1
  },
  section: {
    backgroundColor: 'whitesmoke',
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    fontSize: 18,
    padding: 5
  },
  item: {
    color: 'dimgrey',
    fontSize: 18,
    padding: 5
  }
};

export default Home;
