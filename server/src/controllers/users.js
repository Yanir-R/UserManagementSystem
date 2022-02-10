import {v4 as uuid} from 'uuid'

let users = []


export const getUsers = (req, res) =>{
    res.send(users)
}

export const createUser = (req, res) =>{
    const user = req.body;

    users.push({...user, id:uuid()})
    res.send('User Added Successfully!')
}

export const getUser = (req, res) =>{
    const singleUser = users.filter((user)=> user.id === req.params.id)
    res.send(singleUser)
}

export const deleteUser = (req, res) =>{
    users = users.filter((user)=> user.id !== req.params.id)
    res.send('User Deleted Successfully!')
}

export const updateUser = (req, res) =>{
    const user = users.find((user)=> user.id === req.params.id)
    
    user.name = req.body.name
    user.id = req.body.id
    user.phone = req.body.phone
    user.ipAddress = req.body.ipAddress

    res.send('User Updated Successfully!')
}