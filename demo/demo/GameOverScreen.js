import React from 'react';
import { StyleSheet, Text, View, Navigator, Dimensions, Button, TouchableOpacity, Image
} from 'react-native';
import Constants from 'expo-constants';
import CodePush from 'react-native-code-push';
import { winner, Fighter1, resetGame } from './gamecode/Run';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const backgroundColorGlobal= 'white';
const pale = '#fcfbe3';

export default class GameOverScreen extends React.Component{

    resetGG(){
      resetGame();//sets all game values back to start and generates new hands
      this.setState({dummy: 1});//refreshes the screen
     }

  render(){

     const {navigate} = this.props.navigation;

     let img;
     
     if(winner === Fighter1.name){
       img = <Image style={styles.logo} source={require('./assets/trophy.png')} />
     }else{
       img =  <Image style={styles.logo} source={require('./assets/skull.png')} />
     }

    return(
      <View style={styles.page}>
        <View style={styles.buttonHolder}>
            <TouchableOpacity activeOpacity={0} onPress={this.resetGG.bind(this)} onPressOut={() => navigate('Home')}>
                {img}
            </TouchableOpacity>
          </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: backgroundColorGlobal,
    justifyContent: 'center',
    alignItems: 'center',
  },
    buttonHolder:{
    width: 350 / 423.5 * width,
    height: 350 / 423.5 * width,
    fontSize: 36,
    backgroundColor: backgroundColorGlobal,
    justifyContent: 'center',
    borderRadius: 400,
    shadowOffset: { width: 10, height: 20 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 1,
    alignItems: 'center',
  },
    logo: {
    height: 350 / 423.5 * width,
    width: 350 / 423.5 * width,
    borderRadius: 350,
  },

});