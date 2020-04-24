import { FIRST_VARIABLE } from '../types'

const changeFirstVariable = (value) => ({
    type: FIRST_VARIABLE, payload: value
})

export {changeFirstVariable}