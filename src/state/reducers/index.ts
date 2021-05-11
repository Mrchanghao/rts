import { combineReducers} from 'redux';
import repoReducer from './repo';

const reducers = combineReducers({
  repos: repoReducer,
});

export default reducers;

// helpers 
export type RootState = ReturnType<typeof reducers>;
