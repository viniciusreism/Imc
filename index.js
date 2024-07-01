/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppIMCR from './AppIMCr'
import AppLeilao from './App';
import App from './protecao-risco/src/App'
import AppGas from './Appgas'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppIMCR);