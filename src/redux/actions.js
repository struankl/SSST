/* eslint-disable import/prefer-default-export */
import { ADD_TRADE } from './actionTypes';

export const addTrade = trade => ({
  type: ADD_TRADE,
  trade,
});
