/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Quiz = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text>Imagine this is a cool question</Text>
      </View>

      <View style={styles.options}>
        <TouchableOpacity>
          <Text>Cool option 01 :</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Text>Cool option 02 :</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
           <Text>Cool option 03 :</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Text>Cool option 04 :</Text>
        </TouchableOpacity>
       
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity>
          <Text>SKIP</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>NEXT</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container:{
    padding: 18,
    height: '100%',
    backgroundColor: '#ADE8F4',
    borderColor: '#ADE8F4',
  },
  top:{
    marginVertical: 18,
  },

  options:{
    marginVertical: 18,
    flex: 1,
  },

  buttons:{
    marginBottom: 12,
    paddingVertical: 18,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

});
