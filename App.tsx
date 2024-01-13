import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Home from './pages/ main_page/Home'
import SmothScroll from './pages/ main_page/SmothScroll'
export default function App() {
  return (
    <SafeAreaView>
      {/* <Home/> */}
      <SmothScroll></SmothScroll>
    </SafeAreaView>
  )
}