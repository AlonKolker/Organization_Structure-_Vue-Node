import { createStore } from 'vuex'
import { employeeStore } from './modules/employe.store'

export const store = createStore({
  strict: true,
  modules: {
    employeeStore
  },
})

