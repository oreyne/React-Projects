/** @format */

import {AppRegistry} from 'react-native';
import { StackNavigator } from "react-navigation";
import App from './App';
import {name as appName} from './app.json';

import Installation from "./components/Installation";
import Profile from "./components/Profile";

//import { InstallationScreen, ProfileScreen } from './screenNames';

AppRegistry.registerComponent(appName, () => App);
