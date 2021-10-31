import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FirstComponent from './firstComponent';


export default function App() {
  return (
    //Vievin içinde harici bir stil tanımlamak için
    <View style={{flexDirection:'column',flex:1}}>

      <View style={{flex:1,flexDirection:'row-reverse'}}>      
        <View style={{width:50,height:50,backgroundColor:'green'}}    />
        <View style={{width:50,height:50,backgroundColor:'red'}}      />
        <View style={{width:50,height:50,backgroundColor:'yellow'}}   />
        <View style={{width:50,height:50,backgroundColor:'blue'}}     />        
      </View>
        
      <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>
        <View style={{width:50,height:50,backgroundColor:'green'}}    />
        <View style={{width:50,height:50,backgroundColor:'red'}}      />
        <View style={{width:50,height:50,backgroundColor:'yellow'}}   />
        <View style={{width:50,height:50,backgroundColor:'blue'}}     />        
      </View>

      <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}>
        <View style={{width:50,height:50,backgroundColor:'green'}}    />
        <View style={{width:50,height:50,backgroundColor:'red'}}      />
        <View style={{width:50,height:50,backgroundColor:'yellow'}}   />
        <View style={{width:50,height:50,backgroundColor:'blue'}}     />        
      </View>

      <View style={{flex:1,flexWrap:'wrap',flexDirection:'row',justifyContent:'space-around'}}>
        <View style={{width:150,height:50,backgroundColor:'green'}}    />
        <View style={{width:150,height:50,backgroundColor:'red'}}      />
        <View style={{width:150,height:50,backgroundColor:'yellow'}}   />
        <View style={{width:50,height:50,backgroundColor:'blue'}}     />        
      </View>

      <View style={{flex:1,flexDirection:'row',alignItems:'flex-end'}}>
        <View style={{width:50,height:50,backgroundColor:'green'}}    />
        <View style={{width:50,height:50,backgroundColor:'red'}}      />
        <View style={{width:50,height:50,backgroundColor:'yellow'}}   />
        <View style={{width:50,height:50,backgroundColor:'blue'}}     />        
      </View>

    </View>   

  );
};

//justify content
//flex flexDirection
//flex wrap: wrap şeklin devamını aşağıdan devam ettirir 
//alignitem flexin içinde nereden başlayacağını belirler


const style = StyleSheet.create({
  giris:{paddingTop:150,
  backgroundColor:'red',
  flex:1
  },
  giris_yazı:{
    color:'white',
    fontSize:30
  }
  
});



//böyle de yazılır ama boş iş
/* 
const App = () => {
  return(
    <View style={{paddingTop:200}}>
      <Text>Merhaba</Text>
    </View>
  )
}
export default App;
*/
