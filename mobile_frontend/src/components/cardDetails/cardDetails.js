import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {normalize} from '../../utils/normalize';

const CardDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleHeader}>Garden Salad</Text>
        <Icon name="heart" size={30} color="black" style={{marginLeft: 30}} />
      </View>
      <View style={styles.tags}>
        <View style={styles.score}>
          {[1, 2, 3, 4, 5].map((e, i) => (
            <Icon key={i} name="star" size={15} color="black" />
          ))}
          <Text style={styles.scoreText}> 897 people score</Text>
        </View>
        <View style={styles.hashTags}>
          {[1, 2, 3].map((e, i) => (
            <View
              key={i}
              style={{backgroundColor: '#615c61', marginRight: 10, padding: 5}}>
              <Text style={styles.hashTagsText}>Daily</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </View>
      <View style={styles.quantity}>
        {[1, 2, 3, 4].map((e, i) => (
          <View key={i} style={styles.quantityItem}>
            <Text style={styles.quantityText}>Avocado 0.5 kg</Text>
          </View>
        ))}
      </View>
      <View style={styles.tableHealth}>
        {[1, 2, 3].map((e, i) => (
          <View style={styles.tableHealthItem} key={i}>
            <Text style={styles.tableHealthItemText}>180 + calories</Text>
          </View>
        ))}
      </View>
      <View style={styles.buttonAddFauvoriteWrapper}>
        <TouchableOpacity style={styles.buttonAddFauvorite}>
          <Text style={styles.buttonAddFauvoriteText}>Add my cook book</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.icons}>
        <View style={styles.iconsItem}>
          <Icon name="heart" size={30} color="#ffff" />
          <Text style={styles.iconsItemText}>435</Text>
        </View>
        <View style={styles.iconsItem}>
          <Icon name="chatbubble-outline" size={30} color="#ffff" />
          <Text style={styles.iconsItemText}>521</Text>
        </View>
        <View style={styles.iconsItem}>
          <Icon name="arrow-redo-outline" size={30} color="#ffff" />
          <Text style={styles.iconsItemText}>588</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 40,
    backgroundColor: '#615c61',
    opacity: 0.7,
    borderRadius: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingTop: 20,
  },
  titleHeader: {},
  tags: {},
  score: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  hashTags: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  titleHeader: {
    color: '#ffff',
    fontSize: normalize(24),
    fontWeight: '700',
  },
  scoreText: {
    color: '#ffff',
    fontSize: normalize(11),
    fontWeight: '400',
    marginLeft: 20,
  },
  hashTagsText: {
    color: '#ffff',
    fontSize: normalize(11),
    fontWeight: '400',
  },
  descriptionText: {
    color: '#ffff',
    fontSize: normalize(11),
    fontWeight: '400',
  },
  description: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  quantity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
  },
  quantityItem: {
    width: '50%',
    alignItems: 'center',
  },
  quantityText: {},
  tableHealth: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  tableHealthItem: {
    borderColor: '#ffff',
    borderWidth: 1,
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
  },
  tableHealthItemText: {
    marginVertical: 20,
    marginHorizontal: 2,
    color: '#ffff',
    fontSize: normalize(13),
    fontWeight: '400',
  },
  buttonAddFauvoriteWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonAddFauvorite: {
    backgroundColor: '#171515',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonAddFauvoriteText: {
    color: '#ffff',
    fontSize: normalize(13),
    fontWeight: '700',
  },
  icons: {
    flexDirection: 'row',
    justifyContent:'space-evenly',
    alignItems: 'center',
    paddingVertical: 10,
  },
  iconsItem:{
flexDirection:'row',
alignItems:'center',
  },
  iconsItemText:{
    marginLeft:5,
  },

});

export default CardDetails;
