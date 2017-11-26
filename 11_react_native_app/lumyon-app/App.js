import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SERVER_ENDPOINT = "http://192.168.0.12:3000/";

export default class App extends React.Component {
  state = {
    result: null,
  };

  componentDidMount() {
    this._fetchExampleAsync();
  }

  _fetchExampleAsync = async () => {
    try {
      let response = await fetch(SERVER_ENDPOINT);
      let result = await response.json();
      this.setState({result});
    } catch(e) {
      this.setState({result: e});
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.result ? (
            <Text>{"Am in ok? " + JSON.stringify(this.state.result)}</Text>
          ) : (
            <Text>Trying to get response from {SERVER_ENDPOINT}</Text>
          )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
