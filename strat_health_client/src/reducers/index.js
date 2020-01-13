export default function strat_hospital_reducers(state = {}, action) {
    switch (action.type) {
        case 'SET_HOSPITAL_LIST':
            return action.hospital_list;
        default:
            return state;
    }
}