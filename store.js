/*
 * @Author: ShunjiChen
 * @Email: 1023870153@qq.com
 * @Date: 2020-01-01 16:06:56
 * @Description: file content
 */
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import fetch from 'isomorphic-unfetch'

const exampleInitialState = {
  // 左侧列表
  goldList: [],
  // 右侧trending区域
  trendingData: []
}

export const actionTypes = {
  GOLD_CONTENT: 'GOLD_CONTENT',
  TRENDING_CONTENT: 'TRENDING_CONTENT',
  TRENDING_TIME: 'TRENDING_TIME'
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    // 左侧列表
    case actionTypes.GOLD_CONTENT:
      return Object.assign({}, state, {
        goldList: action.goldList
      })
    // 右侧trending区域——热门或新生
    case actionTypes.TRENDING_CONTENT:
      return Object.assign({}, state, {
        trendingData: action.trendingData,
      })
    default:
      return state
  }
}

// ACTIONS
// 左侧goldlist
export const serverRender_goldlist = payload => dispatch => {
  return (async function () {
    const res = await fetch('http://localhost:3000/api/gold/1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ payload })
    });

    const { data } = await res.json();

    return dispatch({ type: actionTypes.GOLD_CONTENT, goldList: data })
  })();
}

// 右侧trending
export const serverRender_trendlist = payload => dispatch => {
  return (async function () {
    const res = await fetch('http://localhost:3000/api/trend/1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ payload })
    });
    
    const { data } = await res.json();

    return dispatch({ type: actionTypes.TRENDING_CONTENT, trendingData: data })
  })();
}

export function initializeStore(initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
