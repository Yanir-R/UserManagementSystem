import { v4 as uuid } from "uuid";
import fs from "fs";


// const toJSON = (csv) => {
//   const lines = csv.split("\n");
//   const result = [];
//   const headers = lines[0].split(",");

//   lines.map((l) => {
//     const obj = {};
//     const line = l.split(",");

//     headers.map((h, i) => {
//       obj[h] = line[i];
//     });

//     result.push(obj);
//   });

//   return JSON.stringify(result);
// };


const raw = (fs.readFileSync('C:/Users/l/Desktop/code/React/nodejs-react/server/src/SampleData.txt')).toString();
const data = raw.split('\n');
const headers = (data.shift()).split('|');

let json = [];

for(let i = 0; i < data.length; i++) {
  // Remove empty lines
  if(/^\s*$/.test(data[i])) continue;
  // Split data line on cells
  const contentCells = data[i].split('|');
  // Loop cells
  let jsonLine = {};
  for(let i = 0; i < contentCells.length; i++) jsonLine[headers[i]] = contentCells[i];
  // Push new line to json array
  json.push(jsonLine);
}
console.log(json);

let users = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuid() });
  res.send("User Added Successfully!");
};

export const getUser = (req, res) => {
  const singleUser = users.filter((user) => user.id === req.params.id);
  res.send(singleUser);
};

export const deleteUser = (req, res) => {
  users = users.filter((user) => user.id !== req.params.id);
  res.send("User Deleted Successfully!");
};

export const updateUser = (req, res) => {
  const user = users.find((user) => user.id === req.params.id);

  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  user.id = req.body.id;
  user.phone = req.body.phone;
  user.ipAddress = req.body.ipAddress;

  res.send("User Updated Successfully!");
};

// export const userList = fs.readFile(
//   "C:/Users/l/Desktop/code/React/nodejs-react/server/src/SampleData.txt",
//   "utf8",
//   function (err, data) {
//     if (err) throw err;
//     console.log(toJSON(data))
//     return toJSON(data);
//   }
// );