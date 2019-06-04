import { createStore } from 'redux';

import reducer from './reducers/reduce';

const store = createStore(reducer);

export default store;
