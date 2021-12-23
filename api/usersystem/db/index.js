const sql = require('mssql');
const config = require('../config');

const connection = async () => {

  let pool = null;

  try {
    pool = await sql.connect(config);
    console.log("Database connected!");
  } catch(error) {
    pool = null;
    console.log(error);
  }

  return pool;
}

const createRequest = (request, data={}) => {
  const keys = Object.keys(data);
  
  keys.map((keyName) => {
      const keyValue = data[keyName];
    request.input(keyName, keyValue);
  });
  return request;
};

const exec = async (procedureName, params = {}) => {
  const requestProc = await connection()
  let request = await requestProc.request();
  request= await createRequest(request, params);

  const results = await request.execute(procedureName);
  return results;
};


const querying = async (query) => {
    const requestQuery = await connection();
    const results = await requestQuery.request().query(query);
    return results;
  }
  
  module.exports = {
    exec: exec,
    query: querying,
  }