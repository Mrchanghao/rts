import { ActionType } from '../actionType/index';


interface SearchRepoAction {
  type: ActionType.SEARCH_REPO;
}

interface SearchRepoSuccessAction {
  type: ActionType.SEARCH_REPO_SUCCESS;
  payload: string[];
}

interface SearchRepoFailAction {
  type: ActionType.SEARCH_REPO_FAIL;
  payload: string;
}

export type Action = 
| SearchRepoAction 
| SearchRepoSuccessAction 
| SearchRepoFailAction