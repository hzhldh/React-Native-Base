import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {connect} from "react-redux";

class SessionTab extends Component {

  render() {

    return (
      <View>
        <Text>SessionTab</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});


export default connect()(SessionTab);
