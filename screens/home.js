/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import Title from '../components/title';

const Home = () => {
  return (
    <View>
      <Title />
      <View style={styles.bannerContainer}>
        <Image source={{uri:'https://iconscout.com/illustration/giving-different-feedback-and-review-in-websites-2112230'}}
        style={styles.banner}
        resizeMode="contain"
        />
      </View>
      <TouchableOpacity>
        <Text>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner:{
    height:300,
    width:300,
  },
  bannerContainer:{
    justifyContent: 'center',
    alignItems: 'center',
  },
});
