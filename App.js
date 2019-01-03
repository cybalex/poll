import React from 'react';
import { Home } from './app/views/Home';
import { CreatePoll } from './app/views/CreatePoll';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator(
    {
    CreatePollRT: {
        screen: CreatePoll,
    },
      HomeRT: {
        screen: Home,
      }
    },
    {
      initialRoute: Home,
      headerMode: 'none',
    }
);

export default createAppContainer(AppNavigator);