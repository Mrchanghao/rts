import { useDispatch } from 'react-redux';
// import { useDispatch}
import {bindActionCreators} from 'redux';
import {actionCreator} from '../state';;

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreator, dispatch);
  // { searchRepo; dispatch(searchRepo)}

};

