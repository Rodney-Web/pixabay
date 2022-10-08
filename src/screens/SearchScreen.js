import React, {useState} from 'react'
import { View } from 'react-native'
import HeaderTitle from '../components/HeaderTitle'
import SearchBar from '../components/SearchBar'
import ResultsScreen from './ResultsScreen'
import Background from '../components/Background'
import styles from "../assets/styles/SearchScreen.style"

export default function SearchScreen() {

  const [search, setSearch] = useState("")

  return (
    <View style={styles.container}>
      <Background>
        <View style={styles.row}>
          <HeaderTitle/>
          <SearchBar
            search={search}
            setSearch={setSearch}
          />
          <ResultsScreen
            search={search}
          />
        </View>
      </Background>
    </View>
  )
}
