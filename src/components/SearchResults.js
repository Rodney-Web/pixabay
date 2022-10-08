import { View, FlatList } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../context/DataContext';
import ImageResults from '../components/ImageResults';

export default function SearchResults({navigation}) {
  const { state } = useContext(Context)

  const renderItem = ({item}) => (
    <ImageResults item={item} navigation={navigation}/>
  )
    
  const ItemSeparator = () => (
    <View style={{ marginBottom: 10 }}></View>
    )

  return (
    <FlatList
      data={state}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={ItemSeparator}
      showsVerticalScrollIndicator={false}
    />
  )
}