// App.vue: 컨테이너 컴포넌트(비지니스 로직을 처리하는 부분 + 프리젠트컴포넌트 등록) -> 루트컴포넌트로 하위컴포넌트 등록만 함.(변경후)
<template>
  <div id="app">
    <TodoHeader></TodoHeader>

    <!-- v-on:하위 컴포넌트에서 발생시킨 이벤트 이름 = "현재 컴포넌트의 메서드 명" -->
    <!-- App.vue -> store.js로 넘어가면서 v-on:addTodoItem="addOneItem"는 필요 없어짐. ver3 -->
    <TodoInput></TodoInput>

    <!-- v-bind:내려보낼 프롭스 속성 이름 = "현재 위치의 컴포넌트 데이터 속성" -->
    <!-- App.vuer -> TodoList로 props데이터를 내려보냄. -->
    <!-- todoItems값이 propsdata에 들어간다. -->
    <!-- Ver3: App.vue -> store.js로 넘어가면서 v-on:removeItem="removeOneItem",
              v-bind:propsdata="todoItems"
              v-on:toggleItem="toggleOneItem" 는 필요 없어짐.-->
    <TodoList></TodoList>
    
    <!-- Ver3: App.vue -> store.js로 넘어가면서 v-on:clearAll="clearAllItems"는 필요 없어짐. --> 
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
// 모듈 특정기능을 수행하기 위한 묶음(단위)
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

// var my_cmp = {
//   template : <div>my component</div>
// };

// new Vue({
//   el: '',
//   components: {
//     '컴포넌트 이름' : '컴포넌트 내용'
//     'my-cmp'(필수는 아니지만 가운데 - 들어가게 두글자로 만들어 주는 것이 좋습니다.) : my_cmp
//   }
// });

// default는 한개의 파일에서 하나만 export 가능.
// import(이름을 원하는대로 설정할수 있다.)
//import MyComponent from "./MyDefaultExport";

// export(선언을 하고 난 후 export default가능, 초기화와 동시에 불가능.)
//const MyComponent = () => {}
//export default MyComponent;

// imports
// ex. importing a single named export
//import { MyComponent } from "./MyComponent";
// ex. importing multiple named exports
//import { MyComponent, MyComponent2 } from "./MyComponent";

// exports from ./MyComponent.js file
//export const MyComponent = () => {}
//export const MyComponent2 = () => {}

export default {
  //ver2 -> ver3 (data, methods 필요없어짐)
  //data: function() {
    //return {
      //todoItems: []
    //}
  //},

  //methods: {
    // // 아래에서 보낸 인자(현재 한개 보냈음.)
    // addOneItem(input_item) {
    //   //ver2
    //   // check 여부 확인, item을 object로 저장.
    //   let obj = {completed: false, item: input_item};    
    //   // object를 변경하지 않고 바로 넣어주면 object Object로 들어갑니다.
    //   //localStorage.setItem(this.newTodoItem, obj);
    //   localStorage.setItem(input_item, JSON.stringify(obj));
    //   this.todoItems.push(obj);
    // },store.js로 이동.

    // 이벤트를 보내는 곳(TodoList.vue)에서 인자를 두개보냄(암묵적으로 인자들이 넘어 온다).
    //removeOneItem(todoItem, index) {
      ////ver2
      //localStorage.removeItem(todoItem.item);
      //this.todoItems.splice(index,1);
    //},store.js로 이동.

    // toggleOneItem: function(todoItem, index) {
    //   //ver2
    //   // 안티패턴
    //   // todoItem.completed = !todoItem.completed;
    //   // 위에 코드와 같은 동작
    //   // 특정 컴포넌트에서 다른 컴포넌트에서 넘겨 받은 데이터를 변경하지 않는 방식(특정 컴포넌트의 데이터는 해당 컴포넌트에서만 변경한다는 규칙)
    //   this.todoItems[index].completed = !this.todoItems[index].completed;

    //   // 로컬 스토리지의 데이터를 갱신(update가 없기 때문에 지우고, 다시 재등록)
    //   localStorage.removeItem(todoItem.item);
    //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    // },store.js로 이동.

    // clearAllItems: function() {
    //   localStorage.clear();
    //   this.todoItems = [];
    // } store.js로 이동.
  //},

  // created: function() {
  //   if(localStorage.length > 0) {
  //     for(let i = 0; i < localStorage.length; i++){
  //       if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
  //         // getItem으로 가져오는 값은 string값 입니다.       
  //         this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  //       }
  //       //console.log(localStorage.key(i));
  //     }
  //   }
  // }, store.js부분이로 이동.
  components: {
    // 컴포넌트 태그명 : 컴포넌트 내용.
    TodoHeader,
    TodoInput,
    'TodoList' : TodoList,
    'TodoFooter' : TodoFooter
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F6;
}
input {
  border-style: groove;
  widows: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}

</style>
