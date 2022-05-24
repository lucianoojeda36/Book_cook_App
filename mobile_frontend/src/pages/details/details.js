import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import CardDetails from '../../components/cardDetails/cardDetails'

const Details= () => {
  return (
   <>
   <ImageBackground style={styles.container} source={require('../../assets/img/imagen2.jpg')}>
     <CardDetails/>
   </ImageBackground>
   </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
    
  },
});


export default Details;
