import React from 'react'
import { View, TextInput } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import styles from "../assets/styles/SearchBar.style"

export default function SearchBar({ search, setSearch }) {

  return (
    <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Feather style={styles.icon} name='search' size={24} color="#7a7a7a"/>
        </View>
        <TextInput 
            style={styles.input}
            value={search}
            onChangeText={text => setSearch(text)}
            autoCapitalize="none"
            autoComplete='off'
            autoCorrect={false}
            placeholder='Search images'
        />
    </View>
  )
}