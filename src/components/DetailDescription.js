import { 
  View, 
  Text, 
  TouchableOpacity, 
} from 'react-native'
import { Context } from '../context/DataContext'
import React, { useState, useEffect, useContext } from 'react'
import styles from "../assets/styles/DetailDescription.style"

export default function DetailDescription({tags, user, navigation}) {
  const { fetchData } = useContext(Context);
  const [activeTab, setActiveTab] = useState("")

  //converted strings to array
  const arrayTags = tags.split(", ")

  //mounted api call to prevent infinite loop.
  //if tag is clicked it will re-render api according to the tag.
  useEffect(() => {
    if(activeTab) {
      fetchData(activeTab)
      navigation.navigate("Results")
    }
  }, [activeTab])
  
  
  return (
    <View style={styles.container}>
      <Text style={styles.user}>{user}</Text>
      <View style={styles.row}>
        {arrayTags && arrayTags.map((item, index) => 
          <TouchableOpacity
            onPress={() => setActiveTab(item)} 
            key={index} 
            activeOpacity={0.8} 
            style={styles.btnTag}>
            <Text style={styles.tags}>{item}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}