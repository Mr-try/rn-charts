import { rem } from 'app/utils'
import { connect } from 'react-redux'
import Home from 'pages/home'
import React, { PureComponent } from 'react'
import { Easing, BackHandler, Animated } from 'react-native'
import {
  TabBarBottom, 
  TabNavigator,
  StackNavigator, 
  NavigationActions,
} from 'react-navigation'
import { 
  initializeListeners, 
  createReduxBoundAddListener, 
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers'
import screens from './screen'

const Style = {
  bottomTabStyle: {
    height: rem(49),
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    paddingTop: rem(5),
    paddingBottom: rem(5),
  },
  tabStyle: { justifyContent: 'space-between' },
  labelStyle: {
    fontSize: rem(12),
    lineHeight: rem(12),
    marginTop: rem(0),
    marginBottom: rem(0),
  },
}
const screen = (screens) => {
  const routers = {}
  Object.keys(screens).forEach((page) => {
    routers[page] = { screen: screens[page]} 
  })
  return routers
}

const HomeNavigator = TabNavigator(
  {
    Home: { path: 'index', screen: Home },
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    lazy: true,
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'grey',
      style: Style.bottomTabStyle,
      tabStyle: Style.tabStyle,
      labelStyle: Style.labelStyle,
      iconStyle: { flexGrow: 1 },
    },
  }
)
const MainNavigator = StackNavigator(
  {
    HomeNavigator: { screen: HomeNavigator, navigationOptions: () => ({ header: null }) },
    ...screen(screens) 
  },
  {
    headerMode: 'float',
  }
)
const AppNavigator = StackNavigator(
  { 
    Main: { screen: MainNavigator },
  },
  {
    headerMode: 'none',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.bezier(0.2833, 0.99, 0.31833, 0.99),
        timing: Animated.timing,
      },
    }),
    navigationOptions: { gesturesEnabled: false},
    cardStyle: {
      backgroundColor: 'white',
      shadowOpacity: 0,
    },
  }
)
function getCurrentScreen(navigationState) {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  if (route.routes) {
    return getCurrentScreen(route)
  }
  return route.routeName
}
export const routerMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.router
)
const addListener = createReduxBoundAddListener('root')
@connect(({ app, router }) => ({ app, router }))
export default class Router extends PureComponent {
  componentDidMount() {
    initializeListeners('root', this.props.router)
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }
  onBackPress = () => {
    const currentScreen = getCurrentScreen(this.props.router)
    if (currentScreen === 'Home') {
      if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
        return false
      }
      this.lastBackPressed = Date.now()
      return true
    }
    this.props.dispatch(NavigationActions.back())
    return true
  };
  render() {
    const { dispatch, router } = this.props
    const navigation = { dispatch, addListener, state: router }
    return <AppNavigator navigation={navigation} />
  }
}

export function routerReducer(state, action = {}) {
  return AppNavigator.router.getStateForAction(action, state)
}