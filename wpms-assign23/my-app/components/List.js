import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from './ListItem';

const mediaArray = [
  {
    key: '0',
    title: 'Title 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    thumbnails: {
      w160: 'http://placekitten.com/160/161',
    },
  },
  {
    key: '1',
    title: 'Title 2',
    description:
      'Donec dignissim tincidunt nisl, non scelerisque massa...',
    thumbnails: {
      w160: 'http://placekitten.com/160/164',
    },
  },
  {
    key: '2',
    title: 'Title 3',
    description:
      'Phasellus imperdiet nunc tincidunt molestie vestibulum...',
    thumbnails: {
      w160: 'http://placekitten.com/160/167',
    },
  },
];

const List = () => {
  return (
    <FlatList
      data={mediaArray}
      renderItem={({ item }) => <ListItem singleMedia={item} />}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
});

export default List;