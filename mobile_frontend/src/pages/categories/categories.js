import React from 'react';
import {View, Text, StyleSheet, ImageBackground, StatusBar} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import CategoryItem from '../../components/categories/categoryItem';
import {normalize} from '../../utils/normalize';

const Categories = () => {
  return (
    <>
      <View style={styles.container}>
        
          <ImageBackground
            style={styles.wrapper}
            resizeMode="cover"
            source={require('../../assets/img/imagen3.jpg')}>
            <View style={styles.wrapperHeder}>
              <Text style={styles.headerText}>Selection of light food</Text>
              <View style={styles.scores}>
                {[1, 2, 3, 4, 5].map((e, i) => (
                  <View style={styles.stars} key={i}>
                    <Icon name="star" size={20} color="#ffff" />
                  </View>
                ))}
                <Text style={styles.textScore}>999 people score</Text>
              </View>
            </View>
          </ImageBackground>
          <ScrollView contentContainerStyle={{marginBottom: 20,}} style={styles.listItem}>
          {[1, 2, 3, 4, 5, 6, 7].map((e, i) => (
            <View key={i}>
              <CategoryItem />
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  wrapper: {
    paddingVertical: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperHeder: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: normalize(24),
    fontWeight: '700',
    color: '#ffff',
  },
  scores: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stars: {},
  textScore: {
    fontSize: normalize(11),
    fontWeight: '400',
    color: '#ffff',
    marginLeft: 20,
  },
  listItem:{
    paddingHorizontal:20,
    marginVertical: 20,
  }
});

export default Categories;
