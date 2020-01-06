import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView,  FlatList,SafeAreaView,} from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import axios from 'axios'

class Category extends Component {
  constructor(){
    super();
    this.state = {
      categories: []
    }
    
  }

  async componentDidMount(){
    const { navigation } = this.props;
    const jambu = navigation.getParam('itemId')
    axios.get(`https://mydumb-tick.herokuapp.com/api/v1//event/category/${jambu}`)
    .then(res => {
      const categories = res.data;
      this.setState({ categories });
    })

    // axios.get(`https://mydumb-tick.herokuapp.com/api/v1//event/category`)
    // .then(res => {
    //   const categories = res.data;
    //   this.setState({ categories });
    // })
  }

  handlePress = () => {
    this.props.navigation.navigate('Category');
  }
  
  handlePressDetail = () => {
    this.props.navigation.navigate('Detail');
  }




  render() {  
    const { navigation } = this.props;
    const users = [
        {
           name: 'brynn',
           avatar: 'https://cdn0-production-images-kly.akamaized.net/PS8kCmvjsWMpjHFzimUB7h6Sy8o=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2851374/original/039616700_1562905561-1.jpg'
        },
        {
            name: 'b33n',
            avatar: 'https://cdn0-production-images-kly.akamaized.net/PS8kCmvjsWMpjHFzimUB7h6Sy8o=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2851374/original/039616700_1562905561-1.jpg'
         },
         {
            name: '1nfasd',
            avatar: 'https://cdn0-production-images-kly.akamaized.net/PS8kCmvjsWMpjHFzimUB7h6Sy8o=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2851374/original/039616700_1562905561-1.jpg'
         },
         {
            name: '1ndddd',
            avatar: 'https://cdn0-production-images-kly.akamaized.net/PS8kCmvjsWMpjHFzimUB7h6Sy8o=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2851374/original/039616700_1562905561-1.jpg'
         },
       ]
    console.log(this.props)
    
    return (
      <ScrollView style={{backgroundColor:"#fcba03"}} >

      <Card containerStyle={{backgroundColor :"white" ,borderColor:"#fcba03",}}  >
        <Image
            style={styles.imageNew}
            resizeMode="cover"
            source={{ uri: 'https://cdn0-production-images-kly.akamaized.net/PS8kCmvjsWMpjHFzimUB7h6Sy8o=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2851374/original/039616700_1562905561-1.jpg' }}
          />
        </Card>    
 
      <FlatList 
        horizontal
        data={this.state.categories}
        renderItem={({ item }) => (

        <View style={{paddingTop:"10%"}}>
            <Card  titleStyle={{color:"#fcba03"}} title={item.title} containerStyle={{backgroundColor :"white" ,borderColor:"white",}}  >  
            <View >
              <Image
                style={styles.image}
                resizeMode="cover"
                source={{ uri: item.image }}
              />
          <Button
          buttonStyle={{backgroundColor:"#fcba03",}}
          raised
          title="See Event"       
          onPress={() =>
            navigation.push('Detail', {
              itemId: item.id,
            })
        }    
        />
              <Text style={styles.name} onPress={this.handlePress} style={styles.textStyle}>Rp. 10000</Text>
              <Text style={styles.name} style={{color:"#fcba03",marginBottom:10}}>{item.name}</Text>

            </View>
            </Card>
        </View>
        )}
        keyExtractor={item => item.id}
      />
        
         

      </ScrollView>
      
    );
  }
}

export default Category;

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    button: {
      backgroundColor :"#f5d11b"
    },

    imageNew:{
        height : 100,
        width : 300
    },
    image:{
        height : 100,
        width : 150
    },
    textStyle:{
        color :"#fcba03",
        fontWeight : "bold",
        paddingTop: 10,
        fontSize :15,
    },
    view:{
        width : "92%",
        alignSelf : "center",
        paddingTop : "10%"
    },
    text:{
        fontSize : 25,
        paddingBottom : 20,
        color : "white",
        fontWeight : "bold"
    },
    text2:{
        paddingTop : 10,
        fontSize : 25,
        marginLeft : "4%",
        color : "white",
        fontWeight : "bold"
    }
    
})