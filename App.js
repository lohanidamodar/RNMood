/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const quotes = {
  happy: "Folks are usually about as happy as they make their minds up to be.",
  joy: "When you do things from your soul, you feel a river moving in you, a joy.",
  sad: "The word 'happy' would lose its meaning if it were not balanced by sadness. It's ok to be sad sometimes. It's part of life.",
  angry: "For every minute you remain angry, you give up sixty seconds of peace of mind.",
}

type Props = {};
export default class App extends Component<Props> {
  state = {quote: null};
  onClickMood = (mood) => {
    this.setState({quote: quotes[mood]});
  }
  render() {
    return (
      <View style={styles.container}>
        {(this.state.quote)&&<View style={styles.quotesContainer}>
          <Text style={styles.quote}>{this.state.quote}</Text>
        </View>}
        <Text style={styles.welcome}>What is your mood today?</Text>
        <View style={styles.moodContainer}>
          <TouchableOpacity onPress={()=>this.onClickMood('happy')}>
            <Icon name="smile-o" size={70} color="#f60" style={styles.icon}  />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.onClickMood('angry')}>
            <Icon name="frown-o" size={70} color="#f00" style={styles.icon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.instruction}>select how you feel today.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  quotesContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009966',
    padding: 10
  },
  icon: {
    margin: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  quote: {
    fontSize: 22,
    fontWeight: '700',
    textAlign:'center',
    margin: 10,
    color: "#f8f8f8"
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  moodContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    padding: 10
  }
});
