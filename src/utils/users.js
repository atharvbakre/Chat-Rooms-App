const users = []

// Add user
const addUser = ({ id, username, room }) => {

    // Clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    if(!username || !room) {
        return {
            error: 'Username and Room required!'
        }
    }

    // Check for whether username is taken
    const existingUsername = users.find((user) => {
        return user.room === room && user.username === username
    })

    if(existingUsername) {
        return {
            error: 'Username taken!'
        }
    }

    // Store valid User data
    const user = { id, username, room}
    users.push(user)
    return { user }
}

const getUser = (id) => {
    return users.find((user) => user.id === id)
}

const getUsersInRoom = (room) => {
    return users.filter((user) => user.room == room)
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)
    if(index !== -1) {
        return users.splice(index, 1)[0]
    }
}

module.exports = {
    addUser,
    getUser,
    getUsersInRoom,
    removeUser
}