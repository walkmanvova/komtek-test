export default {
    actions: {
        async requestUsers(ctx) {
            try {
                const response = await fetch('https://my-json-server.typicode.com/walkmanvova/komtek-test/users');
                const result = await response.json();
                ctx.commit('updateUsers', result)
                ctx.commit('usersLoadedChange')
            } catch (error) {
                console.log('error:', error)
            }
        }
    },
    mutations: {
        updateUsers(state, users) {
            state.users = users
        },
        usersLoadedChange(state) {
            state.usersLoaded = true
        },
        deleteUser(state, userId) {
            state.users = state.users.filter(user => user.id !== userId)
        },
        addUser(state, newUser) {
            newUser.id = Math.max(...state.users.map(i => i.id)) + 1;
            state.users.push(newUser)
        },
        editUser(state, editableUser) {
            state.users.forEach(function(user, i, arr) {
              if(user.id === editableUser.id) {
                state.users[i] = editableUser
              }
            })
        }
    },
    state: {
        users: [],
        usersLoaded: false
    },
    getters: {
        allUsers(state) {
            return state.users
        },
        usersLoaded(state) {
            return state.usersLoaded
        },
        getCurrentUser: state => userId => {
            return state.users.find(item => item.id === userId)
        }
    }
}
