import * as React from 'react';
import { Text, View, StyleSheet, Platform, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native';


export default class HomeScreen extends React.Component{

render(){
  return(
    <View style={styles.container}>
     <View style={styles.appTitle}>
              <View style={styles.appIcon}>
                  <Image source={require('../images/hpLogo.png')} style={styles.iconImage}></Image>
              </View>
              <View style={styles.appTitleTextContainer}>
                  <Text style={styles.appTitleText}>Harry Potter</Text>
              </View>
          </View>
      <View> 
        
         <Image source={require('../images/hpDisplay.png')} style={{marginTop: 30,marginLeft:30,width:300,height:400}}/>
        
      </View>
      <View style={{flexDirection: 'row', flex:0.07, }}>
       <TouchableOpacity style={{paddingRight: 10}}
            onPress={()=>{this.props.navigation.navigate('Hermione')}}>
           <Image source={require('../images/hermioneOT.PNG')} style={{width:50, height: 50, marginTop: 20}}/>
      </TouchableOpacity>
      <View>
       <TouchableOpacity style={{paddingRight: 10}} onPress={()=>{this.props.navigation.navigate('Ron')}}>
           <Image source={require('../images/ronOT.PNG')} style={{width:50, height: 50, marginTop: 20,}}/>
      </TouchableOpacity>
    
    </View>
     <TouchableOpacity style={{paddingRight: 10}} onPress={()=>{this.props.navigation.navigate('Dumbledore')}}>
           <Image source={require('../images/dumbledoreOT.PNG')} style={{width:50, height: 50, marginTop: 20,}}/>
      </TouchableOpacity>
       <TouchableOpacity style={{paddingRight: 10}} onPress={()=>{this.props.navigation.navigate('Harry')}}>
           <Image source={require('../images/harryTO.PNG')} style={{width:50, height: 50, marginTop: 20,}}/>
      </TouchableOpacity>
       <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Voldemort')}}>
           <Image source={require('../images/voldemortOT.PNG')} style={{width:50, height: 50, marginTop: 20,}}/>
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
    backgroundColor: "#15193c"
    },
  appTitle:{
    flex: 0.07,
    flexDirection: 'row'
   },
  appIcon:{
      flex:0.2,
      justifyContent: 'center',
      alignItems:'center'
       },
  iconImage: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    marginLeft:25
     },
  appTitleTextContainer:{
    flex: 0.8,
    justifyContent: 'center'
    },
  appTitleText:{
     color: 'black',
     fontSize: 28,
     fontFamily:'Forte',
     fontWeight:'bold',
     color:"#FFFF00",
     fontSize:35,
     marginLeft:24
     }

  

})