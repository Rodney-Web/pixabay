import React from 'react'
import { ImageBackground } from 'react-native'
import styles from "../assets/styles/Background.style"

export default function Background({children}) {
  const image = require("../assets/images/bg-sunset.jpeg")

  return (
    <ImageBackground source={image} style={styles.backgroundImage}>
        {children}
    </ImageBackground>
  )
}