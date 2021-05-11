import React from 'react';
import { store } from '../state';
import {Provider} from 'react-redux';
import RepoList from './RepoList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
      <h1>Search Repos</h1>
      {/* <UserSearch /> */}
      <RepoList />
    </div>
    </Provider>
  );
};

export default App;