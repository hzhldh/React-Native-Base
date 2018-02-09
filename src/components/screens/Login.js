import React, {Component} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {connect} from 'react-redux';
import * as  appActions from '../../actions/index';

export class Login extends Component {

  render() {
    return (
      <View>

        <Button large onPress={() => this.onLoginPress()} title="登录"/>

      </View>

    );
  }

  //登录点击事件
  onLoginPress() {
    this.props.dispatch(appActions.login());
  }
}

const styles = StyleSheet.create({});


export default connect()(Login);