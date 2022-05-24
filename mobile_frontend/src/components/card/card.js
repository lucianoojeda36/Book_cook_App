import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {normalize} from '../../utils/normalize';

const Card = ({img}) => {
  
  return (
    <>
      <ImageBackground
        imageStyle={{borderRadius: 25}}
        source={{uri:img}}
        resizeMode="cover"
        style={styles.container}>
        <View style={styles.wrapperText}>
          <View style={styles.title}>
            <Text style={styles.titleText}>Garden Salad</Text>
            <Icon name="heart" size={30} color="black" />
          </View>
          <View style={styles.description}>
            <Text style={styles.descriptionText}>
              Avocado ,purpule potato,chilli,cauliflor,Brocoli
            </Text>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 45,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  wrapperText: {
    paddingTop: 20,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  description: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  descriptionText: {
    color: 'black',
    fontSize: normalize(16),
    fontWeight: '400',
  },
  titleText: {
    color: 'black',
    fontSize: normalize(20),
    fontWeight: '700',
  },
});

export default Card;
