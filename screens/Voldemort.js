import * as React from 'react';
import { Text, View, StyleSheet, Platform, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

export default class Voldemort extends React.Component{
  render(){
    return(
     
      <View style={styles.container}>
               <View style={styles.appIcon}>
                  <Image source={require('../images/voldName.PNG')} style={styles.iconImage}></Image>
              </View>
        
          <View style={{flex:0.2, justifyContent: 'center', alignItems:'center',}}>
                  <Image source={require('../images/voldMain.jpg')} style={styles.mainImage}>
                  </Image>
           </View>


        <View
            style={{marginTop: 200,backgroundColor: "#2f345d",borderRadius:20, padding: 10}}>
            <View styles={{flexDirection: 'row'}}>
             <Text style={{color:'#90d0f5', fontWeight: 'bold', textAlign:'center'}}>Lord Voldemort is a sobriquet for Tom Marvolo Riddle, a fictional character and the main antagonist in J. K. Rowling's series of Harry Potter novels</Text>
            </View>   
          </View>  
        <View
            style={{marginTop: 10,backgroundColor: "#2f345d",borderRadius:20, padding: 10}}>
            <View styles={{flexDirection: 'row'}}>
             <Text style={{color:'#ed84f5', fontWeight: 'bold', textAlign:'center'}}>Voldemort is the archenemy of Harry Potter, who according to a prophecy has "the power to vanquish the Dark Lord". He attempts to murder the boy, but instead kills his parents, Lily and James Potter, and leaves Harry with a scar on his head in the shape of a lightning bolt.</Text>
            </View>   
          </View>  
       <View
            style={{marginTop: 10,backgroundColor: "#2f345d",borderRadius:20, padding: 10}}>
            <View styles={{flexDirection: 'row'}}>
             <Text style={{color:'#89e8a4', fontWeight: 'bold', textAlign:'center'}}>Nearly every witch or wizard dares not utter his name and refers to him instead with such monikers as "You-Know-Who", "He Who Must Not Be Named", or "the Dark Lord".</Text>
            </View>   
          </View>
      <View
            style={{marginTop: 10,backgroundColor: "#2f345d",borderRadius:20, padding: 10}}>
            <View styles={{flexDirection: 'row'}}>
             <Text style={{color:'#69ffca', fontWeight: 'bold', textAlign:'center'}}>He is the leader of the Death Eaters, a group of evil wizards and witches dedicated to ridding the Wizarding World of Muggles and establishing Voldemort as its supreme ruler.</Text>
            
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
  container:{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: '#e6b99c'},
  appTitle: {flex: 0.07, flexDirection: 'row'},
    cardContainer: {
    margin: 100,
    backgroundColor: "#2f345d",
    borderRadius:20,
    padding: 10
  },
  iconImage: {
    width: 320,
    height: 200,
    resizeMode: 'contain',
    marginLeft: 10,
   marginTop:-98,
   paddingLeft: 100, 
   },
  mainImage:{
    marginTop:200,
    width:300,
    height:280
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

