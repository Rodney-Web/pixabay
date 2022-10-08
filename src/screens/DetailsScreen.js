import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import DetailDescription from '../components/DetailDescription';
import DetailImage from '../components/DetailImage';

export default function DetailsScreen({ route }) {
  const { largeImageURL, user, tags} = route.params;
  const navigation = useNavigation()

  return (
    <View>
      <DetailImage largeImageURL={largeImageURL}/>
      <DetailDescription navigation={navigation} user={user} tags={tags}/>
    </View>
  )
}