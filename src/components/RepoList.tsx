import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { actionCreator } from '../state';
import { useActions } from '../hooks/useAction';
// import {useActions}
import {useTypedSelector as useSelector} from '../hooks/useTypedSelector';

const RepoList: React.FC = () => {
  const [repo, setRepo ] = useState('');
  
  // hooks 이용
  const dispatch = useDispatch();
  const {searchRepos} = useActions();
  const {data, loading, error} = useSelector((state) => state.repos);

  // 
  
  // console.log(state);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepo(e.target.value);
  }

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
    searchRepos(repo);
  }

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input value={repo} onChange={onChangeHandler} />
        <button>Search </button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3> Loading ....</h3>}
      {!error && !loading && data.map(name => <div key={name}>{name}</div>)}
    </div>
  )
};

export default RepoList;