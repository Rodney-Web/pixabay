import { 
  View, 
  Text 
} from 'react-native'
import React from 'react'
import styles from "../assets/styles/HeaderTitle.style"

export default function HeaderTitle() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Stunning free images & royalty free stock</Text>
      <Text style={styles.snippet}>Over 2.7 million+ high quality stock images, videos and music shared by our talented community.</Text>
    </View>
  )
}