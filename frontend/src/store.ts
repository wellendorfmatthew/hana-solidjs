import { createStore } from 'solid-js/store';

const initialState = {
    navigation: {
        signup: 0,
    }
}

const store = createStore(initialState);
export default store;