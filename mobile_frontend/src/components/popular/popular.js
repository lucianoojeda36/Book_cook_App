import React from 'react';
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {normalize} from '../../utils/normalize';

const Popular = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperHeader}>
        <Text style={styles.titleText}>Popular</Text>
        <Icon name="ellipsis-horizontal-outline" color="black" size={32} />
      </View>
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate('details')} activeOpacity={1}>
        <ImageBackground
          source={require('../../assets/img/imagen3.jpg')}
          resizeMode="cover"
          imageStyle={{borderRadius: 20}}
          style={styles.popularImages}>
          <View style={styles.imageContainer}>
            <Text style={styles.imageTitle}>Garden Salad</Text>
            <View style={{flexDirection:'row'}}>
            {[1,2,3,4,5].map((e,i)=><Icon key={i} name="star" size={15} color="black" />)}
            </View>
          </View>
        </ImageBackground>
        <ImageBackground
          source={require('../../assets/img/imagen4.jpg')}
          resizeMode="cover"
          imageStyle={{borderRadius: 20}}
          style={styles.popularImages}>
          <View style={styles.imageContainer}>
            <Text style={styles.imageTitle}>Garden Salad</Text>
            <View style={{flexDirection:'row'}}>
            {[1,2,3,4,5].map((e,i)=><Icon key={i} name="star" size={15} color="black" />)}
            </View>
          </View>
        </ImageBackground>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  wrapperHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: normalize(24),
    fontWeight: '700',
    color: 'black',
  },
  popularImages: {
    marginVertical:10,
  },
  imageContainer:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    paddingVertical: 10,
    
  },
  imageTitle:{
    color: 'black',
    fontSize: normalize(11),
    fontWeight: '400',
  },

});

export default Popular;
