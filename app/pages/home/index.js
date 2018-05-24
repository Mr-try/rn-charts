import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { NavigationActions } from 'app/utils'
import { connect } from 'react-redux'
import { Button } from 'components'

@connect()
class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
        source={require('images/house.png')}
      />
    ),
  }

  gotoDetail(routeName) {
    this.props.dispatch(NavigationActions.navigate({ routeName }))
  }

  render() {
    return (
      <View style={styles.container}>
        <Button text="环形图" onPress={() => this.gotoDetail('Pie')} />
        <Button text="扇形图" onPress={() => this.gotoDetail('Pie2')} />
        <Button text="折线图" onPress={() => this.gotoDetail('Line')} />
        <Button text="柱状图" onPress={() => this.gotoDetail('Bar')} />
        <Button text="雷达图" onPress={() => this.gotoDetail('Radar')} />
        <Button text="漏斗图" onPress={() => this.gotoDetail('Funnel')} />
        <Button text="集装箱图" onPress={() => this.gotoDetail('Treemap')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
})

export default Home
