import * as React from 'react';
import { Text, View, StyleSheet, Platform, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native';


export default class Ron extends React.Component{
  render(){
    return(
         <View style={styles.container}>
                     
             <View style={styles.appIcon}>
                  <Image source={require('../images/harryName.jfif')} style={styles.iconImage}></Image>
              </View>
        

          <View style={styles.appIcon}>
             <Image source={require('../images/harryMain.jpg')} style={styles.mainImage}>
             </Image>
           </View>
          <View style={{marginTop: 100,backgroundColor: "#2f345d",borderRadius:20, padding: 10}}>
            
            <Text style={{color:'#df72e0', fontWeight: 'bold', textAlign:'center'}}>He only child and son of James and Lily Potter , Harry's birth was overshadowed by a prophecy, naming either himself or Neville Longbottom as the one with the power to vanquish Lord Voldemort.</Text> 
          </View>
          <View
            style={{marginTop: 10,backgroundColor: "#2f345d",borderRadius:20, padding: 10}}>
            <View styles={{flexDirection: 'row'}}>

            <Text style={{color:'white', fontWeight: 'bold', textAlign:'center'}}>Voldemort murdered Harry's parents as they tried to protect him, but this unsuccessful attempt to kill Harry led to Voldemort's first downfall. This downfall marked the end of the First Wizarding War, and to Harry henceforth being known as "The Boy Who Lived", as he was the only known survivor of the Killing Curse. </Text>
                       
            </View>   
          </View>
          <View
            style={{marginTop: 10,backgroundColor: "#2f345d",borderRadius:20, padding: 10}}>
            <View styles={{flexDirection: 'row'}}>
            <Text style={{color:'green', fontWeight: 'bold', textAlign:'center'}}>Harry played a significant role in many other battles of the Second Wizarding War. He, Ron, and Hermione hunted down and destroyed Voldemort's Horcruxes. During the Battle of Hogwarts, Harry personally saw the deaths of Severus Snape and Fred Weasley while learning that Remus Lupin, Nymphadora Tonks, Colin Creevey, and many others had fallen in battle as well.</Text>

            </View>   
          </View>
          <View
            style={{marginTop: 10,backgroundColor: "#2f345d",borderRadius:20, padding: 10}}>
            <View styles={{flexDirection: 'row'}}>
            <Text style={{color:'red', fontWeight: 'bold', textAlign:'center'}}>Harry was also noted for being the only known Master of Death, having united the three Deathly Hallows at the mere age of seventeen.</Text>
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
    backgroundColor:'#642d87'
    },
  appTitle: {
    flex: 0.07,
     flexDirection: 'row'
     },
  appIcon:{
     flex:0.2,
     justifyContent: 'center',
     alignItems:'center',
     marginBottom:70
     },
  iconImage: {
    width: 200,
    height: 300,
    resizeMode: 'contain'
    },
  appTitleTextContainer: {
    flex: 0.8,
    justifyContent: 'center'
    },
  appTitleText:{
     color: 'black',
     fontSize: 28
     },
  cardContainer: {
    margin: 50,
    backgroundColor: "#2f345d",
    borderRadius:20,
    padding: 10
  },
  mainImage:{
    width:300,
    height:340,
    marginTop:40
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
