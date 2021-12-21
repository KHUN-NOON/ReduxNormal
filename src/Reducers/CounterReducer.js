export const initialValue = {
    plus: 0
};

export const CounterReducer = (state, action) => {
    switch (action.type) {
        case 'increasement':
            return { plus: state.plus + action.value }
        case 'decreasement':
            return { plus: state.plus - action.value }
        case 'reset':
            return initialValue
        default: 
            return state
    }
}