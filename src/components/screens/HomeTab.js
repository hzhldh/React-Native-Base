import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';


class HomeTab extends Component {

  render() {
    return (
      <View>
        <Text>HomeTab</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => {
  return {
    root: state.root
  };
};

export default connect(mapStateToProps)(HomeTab);

