import { useDispatch } from 'react-redux';
import { store } from '../store';

export type AsyncDispatch = typeof store.dispatch;

export const useAsyncDispatch = () => useDispatch<AsyncDispatch>();
