import { 
  View,
  SafeAreaView, 
} from 'react-native'
import React, { useContext, useMemo } from 'react'
import { Context } from '../context/DataContext';
import { useNavigation } from '@react-navigation/native';
import SearchResults from '../components/SearchResults';
import ErrorMessage from '../components/ErrorMessage';

export default function ResultsScreen({ search }) {

  const { fetchData, state } = useContext(Context)
  const navigation = useNavigation()
  
  //mounted the api call to prevent infinite loop.
  useMemo(() => {
    fetchData(search)
  }, [search])

  //error message will show if no data found else search results shows.
  const renderElement = () => {
    return (
      <View>
      {
        state.length <= 0 && search !== ""
        ? <ErrorMessage/>
        : <SearchResults navigation={navigation}/>
      }
    </View>
    )
  }

  return (
    <SafeAreaView>
     { renderElement() }
    </SafeAreaView>
  )
}
