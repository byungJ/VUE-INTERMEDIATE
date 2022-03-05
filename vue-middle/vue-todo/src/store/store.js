import Vue from 'vue'
import Vuex from 'vuex'
import todoApp from './modules/todoApp.js'
//import * as getters from './getters'
//import * as mutations from './mutations'
// vuex(상태 관리 라이브러리)를 보통 store라고 부른다(말한다).
//  components 옆에 store라는 폴더 생성.

// use: vue의 플러그인(vue를 사용하는 모든 영역에 특정기능을 추가해서 사용하고 싶을 때)이라는 기능.
Vue.use(Vuex);

// const storage = {
// // fetch: function() {}
// fetch() {
//     const arr = [];
//     if(localStorage.length > 0) {
//         for(let i = 0; i < localStorage.length; i++){
//             if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
//                 // getItem으로 가져오는 값은 string값 입니다.       
//                     arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
//                 }
            
//             }
//         }
//         return arr;
//     },
// };

export const store = new Vuex.Store({
    // state: {
    //     headerText: '!!!TODO IT!!!',
    //     todoItems: storage.fetch()
    // },
    // getters,
    // mutations
    modules: {
        todoApp
    }

    // 단순히 스토어의 값만 접근할 때는 스테이트를 바로 접근하시는 것을 추천.
    // state에 접근하기 위해서는 this.이 아니고 state.으로 접근.
    // getters: {
    //     storedTodoItems(state) {
    //         return state.todoItems;
    //     }
    // },

    // state의 값을 변경할 수 있는 유일한 방법이자 메서드
    // mutations: {
    //     // 메서드는 항상 첫번째 인자로 state를 가져옵니다.
    //     addOneItem(state, input_item) {
    //         //ver3
    //         const obj = {completed: false, item: input_item};    
    //         localStorage.setItem(input_item, JSON.stringify(obj));
    //         state.todoItems.push(obj);
    //       },
    //       removeOneItem(state, payload) {
    //         localStorage.removeItem(payload.todoItem.item);
    //         state.todoItems.splice(payload.index,1);
    //       },
    //       toggleOneItem(state, payload) {
    //         state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    //         localStorage.removeItem(payload.todoItem.item);
    //         localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    //       },
    //       clearAllItems(state) {
    //         localStorage.clear();
    //         state.todoItems = [];
    //       }
    // }
});