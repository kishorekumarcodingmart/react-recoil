import {atom} from 'recoil'

export const stateValue = atom({
    key : "stateValue", // unique ID (with respect to other atoms/selectors)
    default : 0, // default value (aka initial value)
})