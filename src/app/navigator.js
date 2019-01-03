/**
 *
 * Navigator
 *
 */

import { createStackNavigator, createAppContainer } from 'react-navigation'

import Home from '@/screens/Home'
import CreatePoll from '@/screens/CreatePoll'

const AppNavigator = createStackNavigator(
  {
    CreatePollRT: {
      screen: CreatePoll,
    },

    HomeRT: {
      screen: Home,
    },
  },
  {
    initialRoute: Home,
    headerMode: 'none',
  }
)

export default createAppContainer(AppNavigator)
