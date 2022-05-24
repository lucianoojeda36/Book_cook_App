import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {normalize} from '../../utils/normalize';

const LateralMenu = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={{
          width:60,
        }}
      >
       {
         [1,2,3,4,5].map((e,i)=><View key={i}>
         <TouchableOpacity style={styles.menuButton} onPress={()=>navigation.navigate('categories')}>
           <Text style={styles.textButton}>Salad</Text>
         </TouchableOpacity>
       </View>)
       } 
       
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  menuButton: {
    height: 100,
    backgroundColor: '#EEEEEE',
    marginLeft:5,
    marginRight:15,
    marginVertical:5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textButton: {
    color: 'black',
    fontSize: normalize(10),
    fontWeight: '400',
    transform: [{ rotate: '-90deg' }],
  },
});

export default LateralMenu;
