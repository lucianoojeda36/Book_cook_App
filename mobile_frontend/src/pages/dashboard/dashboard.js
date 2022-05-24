import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Card from '../../components/card/card';
import LateralMenu from '../../components/lateralMenu/lateralMenu';
import Menu from '../../components/menu/menu';
import Popular from '../../components/popular/popular';
import {normalize} from '../../utils/normalize';
import {useQuery, gql} from '@apollo/client';

const GET_RECIPES = gql`
  query recipes {
    recipes{
      _id
      category
      description
      retweets
      ingredients
      calories
      likes
      comments
      score
      image 
    
  }
}
`;

const Dashboard = ({navigation}) => {
  const {loading, error, data} = useQuery(GET_RECIPES);
  
  if (loading) return <Text style={styles.activeText}>loading...</Text>;
  if (error) return <Text style={styles.activeText}>`Error! ${error.message}`</Text>;
  
  var base64Img = `data:image/png;base64,${data.recipes[0].image[0]}`
  return (
    <View style={styles.container}>
      <View>
        <Menu />
      </View>
      <View style={styles.card}>
        <LateralMenu navigation={navigation} />
        <Card img={base64Img}/>
      </View>
      <View style={styles.popular}>
        <Popular navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  card: {
    height: '60%',
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  popular: {},
  activeText: {
    color: 'black',
    fontSize: normalize(24),
    fontWeight: '700',
  },
});

export default Dashboard;
