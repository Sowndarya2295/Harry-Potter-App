import * as React from 'react';
import { Text, View, StyleSheet, Platform, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

export default class Harry extends React.Component{
  render(){
    return(
     
      <View style={styles.container}>
      
              <View style={styles.appIcon}>
                  <Image source={require('../images/ronName.PNG')} style={styles.iconImage}></Image>
              </View>
        
    
        <View style={{flex:0.2, justifyContent: 'center', alignItems:'center',}}>
                  <Image source={require('../images/ronMain.jpg')} style={styles.mainImage}>
                  </Image>
           </View>


        <View
            style={{marginTop: 200,backgroundColor: "#2f345d",borderRadius:20, padding: 10}}>
            <View styles={{flexDirection: 'row'}}>
             <Text style={{color:'#90d0f5', fontWeight: 'bold', textAlign:'center'}}>Rowling introduces Ron as "tall, thin and gangling, with freckles, big hands and feet, and a long nose."</Text>
            </View>   
          </View>  
        <View
            style={{marginTop: 10,backgroundColor: "#2f345d",borderRadius:20, padding: 10}}>
            <View styles={{flexDirection: 'row'}}>
             <Text style={{color:'#ed84f5', fontWeight: 'bold', textAlign:'center'}}>He's extremely loyal, hilarious, adorable, so damn caring and stands by his friends and family no matter what. </Text>
            </View>   
          </View>  
       <View
            style={{marginTop: 10,backgroundColor: "#2f345d",borderRadius:20, padding: 10}}>
            <View styles={{flexDirection: 'row'}}>
             <Text style={{color:'#89e8a4', fontWeight: 'bold', textAlign:'center'}}> It’s hard to escape the shadow of five talented older brothers, and Ron has a bit of a chip on his shoulder about always being second-best.</Text>
            </View>   
          </View>
      <View
            style={{marginTop: 10,backgroundColor: "#2f345d",borderRadius:20, padding: 10}}>
            <View styles={{flexDirection: 'row'}}>
             <Text style={{color:'#69ffca', fontWeight: 'bold', textAlign:'center'}}>Pelvis: 
            In particular, Ron is passionate about his favorite orange-clad Quidditch team, the Chudley Cannons. Ron even has a soft spot for his pet rat Scabbers, though he’d never admit it.</Text>
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
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#a91b0d'
    },
 
    cardContainer: {
    margin: 100,
    backgroundColor: "#2f345d",
    borderRadius:20,
    padding: 10
  },
   appIcon:{
     flex:0.02,
     justifyContent: 'center',
      alignItems:'center',
      marginLeft:30,
      marginBottom:170,
      marginTop:70
    },
  iconImage: {
    width: 320,
    height: 200,
    resizeMode: 'contain',
    marginLeft: 10
    },
    mainImage: {
      width: 300,
      height: 300,
      marginTop:60
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

