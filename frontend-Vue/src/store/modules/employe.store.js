import { employeeService } from "../../services/employee.service"

export const employeeStore = {
  state: {
    employees: [],
    currEmployee: [],
    filter: "",
  },
  getters: {
    employees({ employees }) {
      return employees
    },
    currEmployee({ currEmployee }) {
      return currEmployee
    },
  },
  mutations: {
    setEmployees(state, { employees }) {
      state.employees = employees
    },
    setCurrEmployee(state, { id }) {
      state.currEmployee = state.employees.filter((emp) => emp._id == id)
    },
    updateEmployee(state, { savedEmployee }) {
      const idx = state.employees.findIndex((employee) => employee._id === savedEmployee._id)
      if (idx != -1) state.employees[idx] = savedEmployee
    },

    setFilter(state, { text }) {
      state.filter = text
    },
  },
  actions: {
    async loadEmployees({ commit, state }) {
      try {
        const employees = await employeeService.query(state.filter)
        commit({ type: "setEmployees", employees })
      } catch (err) {
        console.log("loadEmployees failure", err)
        throw err
      }
    },
    async setCurrEmployee({ commit }, { id }) {
      commit({ type: "setCurrEmployee", id })
    },
    async addReport({ commit }, { reportInfo }) {
      try {
        let savedEmployee = await employeeService.addReport(reportInfo)
        commit({ type: "updateEmployee", savedEmployee })
      } catch (err) {
        console.log("addReport failure", err)
        throw err
      }
    },
    async assignTask({ commit }, { taskInfo }) {
      try {
        let savedEmployee = await employeeService.assignTask(taskInfo)
        commit({ type: "updateEmployee", savedEmployee })
      } catch (err) {
        console.log("assignTask failure", err)
        throw err
      }
    },

    setFilter({ commit }, { text }) {
      commit({ type: "setFilter", text })
    },
  },
}
