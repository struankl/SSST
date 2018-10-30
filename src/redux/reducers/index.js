import { combineReducers } from 'redux';

import trades from './trades';
import stocks from './stocks';

export default combineReducers({ trades, stocks });
