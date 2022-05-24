import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { normalize } from '../../utils/normalize';

const CategoryItem = () => {
  return (
    <>
    <View style={styles.container}>
      <Image
        style={styles.imagePlate}
        source={require('../../assets/img/plato2.png')}
      />
      <View style={styles.description}>
        <Text style={styles.textDescription}>Lemon chicken</Text>
        <View style={styles.stars}>
          {[1, 2, 3, 4, 5].map((e, i) => (
            <Icon
              key={i}
              style={styles.star}
              name="star"
              size={20}
              color="grey"
            />
          ))}
          <Text style={styles.textScore}>8,6</Text>
        </View>
        <TouchableOpacity style={styles.bookButton}><Text style={styles.textBook}>Book</Text></TouchableOpacity>
      </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection: 'row',
    backgroundColor:'#ffff',
    paddingVertical:10,
  },
  imagePlate: {
    flexBasis:'30%',
    height: 150,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  description: {
    flexBasis:'70%',
    alignItems: 'center',
    justifyContent:'center',
    paddingHorizontal:20,
    
    
  },
  textDescription: {
    color:'black',
    fontSize:normalize(20),
    fontWeight:'700',
  },
  stars:{
    flexDirection:'row',
    marginTop:5,
  },
  star: {
    opacity:0.9,
  },
  textScore: {
    marginLeft:20,
    color:'grey',
    opacity:0.9,
  },
  bookButton:{
    paddingHorizontal: 40,
    paddingVertical: 5,
    marginTop:5,
    lineHeight:20,
    borderColor:'grey',
    borderWidth:1,
    borderRadius:10,
    
  },
  textBook:{
    color:'grey',
    fontSize:normalize(11),
    fontWeight:'400',
  },

});

export default CategoryItem;
