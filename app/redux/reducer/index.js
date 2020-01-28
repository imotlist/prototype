import React from 'react'
import { combineReducers } from 'redux'

import count from './count'
import stafadd from './stafadd'
import stafremove from './stafremove'

export default combineReducers({
    stafadd,
    stafremove
})