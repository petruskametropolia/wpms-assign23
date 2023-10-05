import React from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const ListItem = ({ singleMedia }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => {}}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: singleMedia.thumbnails.w160 }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{singleMedia.title}</Text>
        <Text style={styles.description}>{singleMedia.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#red',
    backgroundColor: '#808080',
    height: 300,
  },
  imageContainer: {
    width: 140, 
    height: '100%',
    marginRight: 16,
    backgroundColor: 'white', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#black', 
  },
  description: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#black',
  },
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

export default ListItem;