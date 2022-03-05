const storage = {
    fetch() {
        const arr = [];
        if(localStorage.length > 0) {
            for(let i = 0; i < localStorage.length; i++){
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                        arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                    }
                
                }
            }
            return arr;
        },
    };

const state = {
    headerText: '!!!TODO IT!!!',
    todoItems: storage.fetch()
};

const getters = {
    storedTodoItems(state) {
        return state.todoItems;
    },
    headerText(state) {
       return state.headerText;
    }
};

const mutations = {
    addOneItem(state, input_item){
        const obj = {completed: false, item: input_item};    
        localStorage.setItem(input_item, JSON.stringify(obj));
        state.todoItems.push(obj);
    },
    
    removeOneItem(state, payload){
        localStorage.removeItem(payload.todoItem.item);
        state.todoItems.splice(payload.index,1);
    },
    
    toggleOneItem: function(state, payload){
        state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
        localStorage.removeItem(payload.todoItem.item);
        localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
    
    clearAllItems(state){
        localStorage.clear();
        state.todoItems = [];
    }    
};

export default {
    state,
    getters,
    mutations
}