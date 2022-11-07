const dbService = require("../services/db-service")
const ObjectId = require("mongodb").ObjectId
const Employee = require("../modules/employee").Employee
const Manager = require("../modules/manager").Maneger

async function query(filter) {
  try {
    filter === {} ? {} : filter
    const collection = await dbService.getCollection("employee")

    return await collection.find(filter).toArray()
  } catch (err) {
    logger.error("cannot find employees", err)
    throw err
  }
}

async function getById(employeId) {
  try {
    const collection = await dbService.getCollection("employee")
    return collection.findOne({ _id: ObjectId(employeId) })
  } catch (err) {
    console.log(err)
    throw err
  }
}

async function update(employee) {
  try {
    const collection = await dbService.getCollection("employee")
    await collection.updateOne({ _id: employee._id }, { $set: { ...employee } })
    return employee
  } catch (err) {
    logger.error(`cannot update employee ${employee._id}`, err)
    throw err
  }
}
async function buildInstance(employee) {
  employee.position = employee.position.toLowerCase()
try{

  if (employee.position.toLowerCase() === "employee") {
    // return new Employee(employee)
    return await _add(new Employee(employee))
  } else if (employee.position === "manager") {
    return await  _add( new Manager(employee))
  }
}catch(err){
  console.log('cannot add employee', err);
    throw err;
}
}



async function _add(employee) {
  try {
    const collection = await dbService.getCollection('employee');
    await collection.insertOne(employee);
    return employee;
  } catch (err) {
    console.log('cannot add employee', err);
    throw err;
  }
}

module.exports = {
  query,
  getById,
  update,
  buildInstance,
}
