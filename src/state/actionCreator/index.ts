import axios from 'axios';
import { ActionType } from '../actionType/index';
import { Action } from '../actions/index';
// import {Actio}
// import thunk from 'redux-thunk';
import { Dispatch } from 'redux';

export const searchRepos = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPO
    });

    try {
      const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
        params: {
          text: term,
        }
      })

      const names = data.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch({type: ActionType.SEARCH_REPO_SUCCESS, payload: names});
    } catch (error) {
      dispatch({type: ActionType.SEARCH_REPO_FAIL, payload: error.message})
    }
  };
} 
