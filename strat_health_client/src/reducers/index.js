export default function strat_hospital_reducers(state = {}, action) {
    switch (action.type) {
        case 'SET_AUTH_USER':
            return action.hospital_list;
        default:
            return state;
    }
}