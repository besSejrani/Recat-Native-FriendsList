import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

const FriendListItem = ({ freund, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image
          source={{ uri: freund.picture.thumbnail }}
          style={styles.image}
        />
        <View style={styles.info}>
          <Text style={styles.text}>
            {freund.name.first} {freund.name.last}
          </Text>
          <Text style={styles.smallText$}>{freund.email}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    padding: 10
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 30
  },
  info: {
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  text: {
    fontSize: 18
  },
  smallText: {
    fontSize: 16,
    fontWeight: '100'
  }
};

export default FriendListItem;
