import { 
  View, 
  Image
} from 'react-native'
import React from 'react'
import styles from "../assets/styles/DetailImage.style"

export default function DetailImage({largeImageURL}) {
  return (
    <View>
      <Image source={{ 
        uri: largeImageURL !== "" 
        ? largeImageURL 
        : undefined, 
        }}
        style={styles.image}
      />
    </View>
  )
}