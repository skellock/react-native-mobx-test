import React, { Component } from 'react'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'
import AppState from './AppState'
import { observer } from 'mobx-react/native'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24
  }
})

class App extends Component {

  constructor (props) {
    super(props)
    this.handlePress = this.handlePress.bind(this)
  }

  handlePress () {
    AppState.counter++
  }

  render () {
    const title = `MobX ${AppState.counter}`
    return (
      <View style={Styles.container}>
        <TouchableOpacity onPress={this.handlePress}>
          <Text>Click</Text>
        </TouchableOpacity>
        <Text style={Styles.title}>{title}</Text>
      </View>
    )
  }

}

export default observer(App)
