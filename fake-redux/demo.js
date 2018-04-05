const log = console.log
const createStore = require('./createStore')


const actionTypes = {
    addTodo: 'add_todo'
}
// action creator
function addTodo(text) {
    return {
        type: actionTypes.addTodo,
        text,
    }
}

const initialState = []
const reducerTodoApp = function(prev = initialState, action) {
    log(action)
    switch(action.type) {
        case actionTypes.addTodo:
            log('add')
            prev.push(action.text)
            return prev
        default:
            return prev
    }

}

const store = createStore(reducerTodoApp)
store.subscribe(function() {
    const state = store.getState()
    log('state', state)
})
log('store', store.getState())
store.dispatch(addTodo('new todo'))

