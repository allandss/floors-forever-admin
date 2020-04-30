import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'floorsforever',
      storage,
      whitelist: ['auth', 'user', 'products', 'category'],
    },
    reducers
  );

  return persistedReducer;
};