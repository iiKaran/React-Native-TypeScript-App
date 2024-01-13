import { View,ScrollView,Image, StyleSheet, Alert} from 'react-native'
import { Text, Card, Button, Icon } from '@rneui/themed';
import React from 'react'
export default function Home() {
    
        const data=[1,2,65432,76543,76543,64534376,54876,576,54876,5876,587,65,87655645,476,57,6556,65,4654,6]
  return (
    <ScrollView>
    <View style={styles.container}>
        {
         data.map((element,index)=>{
            return  <Card key={index}>
            <Card.Title>HELLO WORLD {index}</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{ padding: 0 }}
              source={{
                uri:
                  'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
              }}
            />
            <Text style={{ marginBottom: 10 }}>
              The idea with React Native Elements is more about component
              structure than actual design.
            </Text>
            <Button
              icon={
                <Icon
                  name="code"
                  color="#ffffff"
                  iconStyle={{ marginRight: 10 }}
                />
              }
              onPress={()=>{
                Alert.alert("freeze")
              }}
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="VIEW NOW"
            />
          </Card>
         })   
        }
    </View>
  </ScrollView>
  )
}

    const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    fonts: {
      marginBottom: 8,
    },
    user: {
      flexDirection: 'row',
      marginBottom: 6,
    },
    image: {
      width: 30,
      height: 30,
      marginRight: 10,
    },
    name: {
      fontSize: 16,
      marginTop: 5,
    },
    });
    