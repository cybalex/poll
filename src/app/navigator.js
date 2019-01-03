/**
 *
 * Navigator
 *
 */

import { createStackNavigator, createAppContainer } from 'react-navigation'

import { Home } from '@/views/Home'
import { CreatePoll } from '@/views/CreatePoll'

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
