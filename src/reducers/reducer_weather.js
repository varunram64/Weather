import { FETCH_WEATHER } from '../actions';

export default function(state = [], action) {

    switch(action.type) {
        case FETCH_WEATHER:
            // To prevent mutation of the state
            // return state.concat([ action.payload.data ]);
            // ES 6 syntax to return new array
            return [ action.payload.data, ...state ];
    }

    return state;
}