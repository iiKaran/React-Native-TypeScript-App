import {
  View,
  Text,
  Button,
  Alert,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
  Modal,

  Pressable,TouchableWithoutFeedback
} from 'react-native';
import React, {useState} from 'react';
import {Card} from '@rneui/themed';
import {ScreenWidth} from '@rneui/base';

export default function SmothScroll() {
  type CardData = {
    id: string;
    location: string;
    time: string;
    admin: string;
    members: string;
    image: string;
    title: string;
  };
  const renderItem: ListRenderItem<CardData> = ({item}) => (
    <View>
    <TouchableOpacity
    onPress={() => {
        SetCurrMeet(true);
        setCurrentData({
            id:item.id , 
            title:item.title,
        });
    }}>
      <Card>
        <Card.Title>{item.id}</Card.Title>
        <Card.Divider />
        <Card.Image
          style={{padding: 0}}
          source={{
            uri: item.image,
          }}
        />
        <Text style={{marginBottom: 10}}>{item.title}</Text>
       
     
      </Card>
    </TouchableOpacity>
    </View>
  );
  const [currentData, setCurrentData] = useState<{
    id: string;
    title: string;
  } | null>(null);
  const [meetings, SetMeetings] = useState<CardData[]>([
    {
      id: '1',
      image:
        'https://images.pexels.com/photos/6089654/pexels-photo-6089654.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Kharar, Punjab',
      time: '33:33',
      admin: 'Me',
      members: '44',
      title: 'Title 1',
    },
    {
      id: '2',
      image:
        'https://images.pexels.com/photos/6089654/pexels-photo-6089654.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Kharar, Punjab',
      time: '33:33',
      admin: 'Me',
      members: '44',
      title: 'Title 2',
    },
    {
      id: '3',
      image:
        'https://images.pexels.com/photos/6089654/pexels-photo-6089654.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Kharar, Punjab',
      time: '33:33',
      admin: 'Me',
      members: '44',
      title: 'Title 3',
    },
    {
      id: '4cfvds',
      image:
        'https://images.pexels.com/photos/6089654/pexels-photo-6089654.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Kharar, Punjab',
      time: '33:33',
      admin: 'Me',
      members: '44',
      title: 'Title 4',
    },
  ]);
 

  const hideModal = () => {
    SetCurrMeet(false);
  };
  const [currMeet, SetCurrMeet] = useState<boolean>(false);
  return (
    <View>
      <FlatList
        data={meetings}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
        <Modal
        transparent={true}
        animationType="slide"
        visible={currMeet}
        onRequestClose={hideModal}
      >
        <TouchableWithoutFeedback onPress={hideModal}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* Your modal content goes here */}
            <View style={{ backgroundColor: 'orange', position:'absolute', bottom:0, paddingBottom: 80, width:ScreenWidth, flex:0.5 }}>
              <Text style={{
                color:'white',
                fontSize:30,
              }}>{currentData?.id}</Text>
              <Text style={{
                color:'white',
                fontSize:30,
              }} >{currentData?.title}</Text>
              <Button onPress={hideModal} title='hide me'/>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}
/*

 */
