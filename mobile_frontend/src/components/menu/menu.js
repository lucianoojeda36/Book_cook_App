import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { normalize } from '../../utils/normalize';

const Menu = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.activeText}>BreakFast</Text>
        <Icon name="menu-outline" size={30} color="black" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:20,
    paddingVertical: 30,
    
  },
  activeText:{
    color:'black',
    fontSize:normalize(24),
    fontWeight:'700',
  }
})


export default Menu