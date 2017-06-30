export function isStarted(state = false, action) {
    switch (action.type) {
        case "START_TIMER":
            return true;
        case "STOP_TIMER":
            return false;
        default:
            return state;
    }
}

export function totalTime(state = 0, action) {
    switch (action.type) {
        case "UPDATE_TIME":
            return action.time;
        case "RESET_TIME":
            return 0;
        default:
            return state;
    }
}

export function laps(state = [], action) {
    switch (action.type) {
        case "ADD_LAP":
            return [
                ...state,
                {
                    lapNumber: state.length + 1,
                    time: action.time
                }
            ];
        case "RESET_LAPS":
            return [];
        default:
            return state;
    }
}
