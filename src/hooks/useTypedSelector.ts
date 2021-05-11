import { useSelector, TypedUseSelectorHook, createSelectorHook } from 'react-redux';
import { RootState } from '../state/reducers/index';

export const useTypedSelector = createSelectorHook<RootState>();
// depreci
// export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;