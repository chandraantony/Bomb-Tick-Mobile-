import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView,  FlatList,SafeAreaView,} from 'react-native'
import { Card, ListItem, Button} from 'react-native-elements';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios'

class Welcome extends Component {
  constructor(){
    super();
    this.state = {
      categories: [],
      event : [],
    }
    
  }

  async componentDidMount(){
    axios.get('https://mydumb-tick.herokuapp.com/api/v1/categories')
    .then(res => {
      const categories = res.data;
      this.setState({ categories });
    })

    axios.get('https://mydumb-tick.herokuapp.com/api/v1/events')
    .then(res => {
      const event = res.data;
      this.setState({ event });
    })

  }

//   handlePress = () => {
//     this.props.navigation.navigate('Category');
//   }

//   handlePressDetail = () => {
//     this.props.navigation.navigate('Detail');
//   }

  render() {  
    const { navigation } = this.props;
    return (
        
      <ScrollView style={{backgroundColor:"#fcba03"}} >

                  <View style={styles.view}> 
        <Text style={styles.text}>Category</Text>
        </View>
    <FlatList style={styles.container}
        horizontal
        data={this.state.categories}
        renderItem={({ item }) => (
            <Card containerStyle={{backgroundColor :"white" ,borderColor:"white",}}  >
        <Image
            style={styles.imageNew}
            resizeMode="cover"
            source={{ uri:item.image }}
          />
        <Button
          buttonStyle={{backgroundColor:"#fcba03",}}
          raised
          title={item.name}
          onPress={() =>
            navigation.push('Category', {
              itemId: item.id,
            })
        }
        />
        </Card>
        )}
        keyExtractor={item => item.id}
      />
        

    <SafeAreaView >
    <View style={styles.view}> 
        <Text style={styles.text}>Today</Text>
        </View>
            <FlatList 
                horizontal
                data={this.state.event}
                renderItem={({ item }) => (
                    <Card  titleStyle={{color:"#fcba03"}} title={item.title} containerStyle={{backgroundColor :"white" ,borderColor:"white",}}  >  
                    <View >
                    <Image
                        style={styles.image}
                        resizeMode="cover"
                        source={{ uri: item.image }}
                    />
                <Button
                buttonStyle={{backgroundColor:"#fcba03"}}
                raised
                onPress={() =>
                    navigation.push('Detail', {
                      itemId: item.id,
                    })
                }
                title="See Event"
                />
                    <Text style={styles.name} style={styles.textStyle}>Rp. {item.price}</Text>

                    </View>
                    </Card>
                )}
                keyExtractor={item => item.id}
            />
        <View style={styles.view}> 
        <Text style={styles.text}>Tommorow</Text>
        </View>
        <FlatList 
                horizontal
                data={this.state.event}
                renderItem={({ item }) => (
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
                onPress={this.handlePressDetail}
                title="See Event"
                />
                    <Text style={styles.name} style={styles.textStyle}>Rp. {item.price}</Text>

                    </View>
                    </Card>
                )}
                keyExtractor={item => item.id}
        />
    </SafeAreaView>
         

      </ScrollView>
      
    );
  }
}

export default Welcome;

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
        width : 120
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
        paddingTop : "5%"

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