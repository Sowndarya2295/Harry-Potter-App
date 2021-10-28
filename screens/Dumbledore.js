import * as React from 'react';
import { Text, View, StyleSheet, Platform, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

export default class Dumbledore extends React.Component{
  render(){
    return(
     
      <View style={styles.container}>
                <View style={styles.appIcon}>
                  <Image source={require('../images/ddName.PNG')} style={styles.iconImage}></Image>
              </View>
        
          <View style={{flex:0.2, justifyContent: 'center', alignItems:'center',}}>
                  <Image source={require('../images/ddMain.jpg')} style={styles.mainImage}>
                  </Image>
           </View>


        <View
            style={{marginTop: 200,backgroundColor: "#2f345d",borderRadius:20, padding: 10}}>
            <View styles={{flexDirection: 'row'}}>
             <Text style={{color:'#90d0f5', fontWeight: 'bold', textAlign:'center'}}>He was the wielder and the master of the Elder Wand from 1945 until 1997, and considered by many as the greatest Hogwarts Headmaster.</Text>
             <Text style={{color:'white', fontWeight: 'bold', textAlign:'center'}}>What is Dumbledore's personality?
Dumbledore has characteristic as wise, gentle, kind, misterious in way, knowlegable, caring and understanding. </Text>
            </View>   
          </View>  
        <View
            style={{marginTop: 10,backgroundColor: "#2f345d",borderRadius:20, padding: 10}}>
            <View styles={{flexDirection: 'row'}}>
             <Text style={{color:'#ed84f5', fontWeight: 'bold', textAlign:'center'}}>Dumbledore is the protector and mentor for Harry Potter, he give influnces for Harry, his friends and the reader to follow his character. They be more brave, smart and caring.</Text>

              <Text style={{color:'white', fontWeight: 'bold', textAlign:'center'}}>As headmaster of Hogwarts, Dumbledore is openly dedicated to using his powers to serve the greater good.</Text>
            </View>   
          </View>  
       <View
            style={{marginTop: 10,backgroundColor: "#2f345d",borderRadius:20, padding: 10}}>
            <View styles={{flexDirection: 'row'}}>
             <Text style={{color:'#89e8a4', fontWeight: 'bold', textAlign:'center'}}>He was the son of Percival and Kendra Dumbledore, and the elder brother of Aberforth and Ariana.</Text>
            </View>   
          </View>
      <View
            style={{marginTop: 10,backgroundColor: "#2f345d",borderRadius:20, padding: 10}}>
            <View styles={{flexDirection: 'row'}}>
             <Text style={{color:'#69ffca', fontWeight: 'bold', textAlign:'center'}}>It was through Dumbledore that resistance to the rise of Lord Voldemort was formed. He founded and led the Order of the Phoenix during the First Wizarding War.:</Text>
             
            </View>   
          </View>  
          
          <View>
       <TouchableOpacity
         style={styles.buttons}
        onPress={()=>{this.props.navigation.navigate('HomeScreen')}}>
           <Text>BACK</Text>
      </TouchableOpacity>
    
    </View>

        </View>
    )
  }

}

const styles = StyleSheet.create({
  container:{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: '#75c9eb'},
  appTitle: {flex: 0.07, flexDirection: 'row'},
    cardContainer: {
    margin: 100,
    backgroundColor: "#2f345d",
    borderRadius:20,
    padding: 10
  },
  iconImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginLeft: 10,
    marginTop:-98,
    paddingLeft: 100
     },
   mainImage: {
      width: 300,
      height: 300,
      marginTop:70
      },
       buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"green",
    margin: 10,
    width: 200,
    height: 50,
  }

})

