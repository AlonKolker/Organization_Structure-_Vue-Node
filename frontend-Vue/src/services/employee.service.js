import { httpService } from "./http.service"

export const employeeService = {
  query,
  addReport,
  getById,
  assignTask,
}

async function query(filter) {
  try {
    let organization = await httpService.get("organization", filter)
    return organization
  } catch (err) {
    throw err
  }
}

async function addReport(reportInfo) {
  try {
    return await httpService.put("organization/report", reportInfo)
  } catch (err) {
    console.log("addReport canceld")
    throw err
  }
}

async function assignTask(taskInfo) {
  try {
    return await httpService.put("organization/addTask", taskInfo)
  } catch (err) {
    console.log("assignTask canceld")
    throw err
  }
}

async function getById(employeeId) {
  try{

    return await httpService.get(`organization/${employeeId}`)
  }catch(err){
    console.log("getById canceld")
    console.log(err)
  }
}
