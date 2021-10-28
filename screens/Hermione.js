import * as React from 'react';
import { Text, View, StyleSheet, Platform, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native';

class Hermione extends React.Component{
   render(){

    return(
      <View style={styles.container}>
          <View style={styles.appTitle}>
              <View style={styles.appIcon}>
                  <Image source={require('../images/hermioneName1.PNG')} style={styles.iconImage}></Image>
              </View>
              
          </View>
           
           <View style={styles.iconContainer}>
                  <Image source={require('../images/hermioneMain.jpg')} style={styles.mainImage}>
                  </Image>
           </View>
        <View
            style={{marginTop: 10,backgroundColor: "#2f345d",borderRadius:20, padding: 10}}>
            <View styles={{flexDirection: 'row'}}>
             <Text style={{color:'#90d0f5', fontWeight: 'bold', textAlign:'center'}}>Hermione Jean Granger is a Muggle-born Gryffindor, who becomes best friends with Harry Potter and Ron Weasley.</Text>
            </View>   
          </View>  
        <View
            style={{marginTop: 10,backgroundColor: "#2f345d",borderRadius:20, padding: 10}}>
            <View styles={{flexDirection: 'row'}}>
             <Text style={{color:'#ed84f5', fontWeight: 'bold', textAlign:'center'}}>J.K. Rowling states that she was born on 19 September 1979 and she was nearly twelve when she first attended Hogwarts.</Text>
            </View>   
          </View>  
       <View
            style={{marginTop: 10,backgroundColor: "#2f345d",borderRadius:20, padding: 10}}>
            <View styles={{flexDirection: 'row'}}>
             <Text style={{color:'#89e8a4', fontWeight: 'bold', textAlign:'center'}}> The brilliant Hermione Granger is described as having frizzy, untamable dark hair, brown eyes, and protruding teeth, but more often is defined by her intellect and devotion to her friends.</Text>
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
   backgroundColor: '#f06553'
   },
  appTitle: {
    flex: 1,
    flexDirection: 'row',
    marginBottom:50,
    marginRight:15
    },
  appIcon:{
     flex:0.2,
     justifyContent: 'center',
      alignItems:'center',
      marginLeft:80
    },
  iconImage:{
    width: 310,
    height: 200,
    resizeMode: 'contain',
    marginLeft: 800,
    marginTop:0
     },
  iconContainer:{
    flex:0.2,
    justifyContent: 'center',
    alignItems:'center',
    marginBottom:150
  },
  mainImage:{
    width:310,
    height:310
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
    margin: 100,
    backgroundColor: "#2f345d",
    borderRadius:20,
    padding: 10
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

export default Hermione;