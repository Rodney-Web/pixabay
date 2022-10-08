import { 
  View, 
  TouchableOpacity, 
  Image 
} from 'react-native'
import React from 'react'
import styles from "../assets/styles/ImageResults.style"

export default function ImageResults({ item, navigation }) {
  //once a specific image is clicked it will show the details.
  return (
    <View>
        <TouchableOpacity onPress={() => 
          navigation.navigate('Details',
            {
              largeImageURL: item.largeImageURL,
              user: item.user,
              tags: item.tags
            })}
          activeOpacity={0.9}>
        <Image source={{ 
          uri: item.webformatURL !== "" 
          ? item.webformatURL 
          : undefined, 
          }}
          style={styles.image}
           />
        </TouchableOpacity>
      </View>
  )
}