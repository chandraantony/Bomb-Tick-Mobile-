import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, FlatList} from 'react-native';
import { WebView } from 'react-native-webview';
import { Card, ListItem, Button} from 'react-native-elements';
import axios from 'axios'

class Detail extends Component {
    constructor(){
        super();
        this.state = {
          categories: []
        }
        
      }
    
      async componentDidMount(){
        const { navigation } = this.props;
        const jambu = navigation.getParam('itemId')
        axios.get(`https://mydumb-tick.herokuapp.com/api/v1//event/${jambu}`)
        .then(res => {
          const categories = res.data;
          this.setState({ categories });
        })
      }

  handlePress = () => {
    this.props.navigation.navigate('Category');
  }

  render() {  
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
    const { navigation } = this.props;
    const jambu = navigation.getParam('itemId')
    return (
        
      <ScrollView style={{backgroundColor:"#fcba03"}} >
        <FlatList style={styles.container}
        horizontal
        data={this.state.categories}
        renderItem={({ item }) => ( 
            
            <View >  
              <Card >
              <View style={{flex: 1, flexDirection: 'row',alignItems: 'stretch'}}>
              <Image
                style={{width:100,height:100,alignItems:"flex-start"}}
                resizeMode="cover"
                source={{ uri: item.userId.image}}
              />
              <View >
              <Text style={{marginLeft:10, fontSize:20,color :"#fcba03", fontWeight : "bold"}}>
                {item.userId.name}
              </Text>
              <Text style={{marginLeft:10,color: "#fcba03",fontSize:12}}>
               {item.userId.username} 
              </Text>
              <Text style={{marginLeft:10,color : "#fcba03",fontSize:12}}>
               {item.userId.email} 
              </Text>    
              </View>
            </View>

              </Card>  
            <Card  titleStyle={{color:"#fcba03", fontSize : 20}} title={item.title} containerStyle={{backgroundColor :"white" ,borderColor:"white",}}  >  
            <View >
              <Image
                style={styles.image}
                resizeMode="cover"
                source={{ uri: item.image}}
              />
               <Text style={styles.name} onPress={this.handlePress} style={{color:"#fcba03",width:300, fontSize:17, fontWeight:"bold", paddingTop :10}}>Price :</Text>
              <Text style={styles.name} onPress={this.handlePress} style={{color:"#fcba03",width:300}}>Rp. {item.price}</Text>
              <Text style={styles.name} onPress={this.handlePress} style={{color:"#fcba03",width:300, fontSize:17, fontWeight:"bold", paddingTop :10}}>Address :</Text>
              <Text style={styles.name} style={{color:"#fcba03",marginBottom:10,width:300}}>{item.address}</Text>

            </View> 
            </Card>
            <Card>
            <View >
              <Text style={styles.name} onPress={this.handlePress} style={styles.textss}>Deskription</Text>
              <Text style={styles.name} style={{color:"#fcba03",marginBottom:10,width:300, textAlign :"justify"}}>{item.description}</Text>
              
              
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

export default Detail;

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
        height : 200,
        width : 300
    },
    textStyle:{
        color :"#fcba03",
        fontWeight : "bold",
        paddingTop: 10,
        fontSize :15,
    },
    textss:{
      color :"#fcba03",
      fontWeight : "bold",
      paddingBottom: 10,
      fontSize :20,
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