// 프리젠트 컴포넌트
<template>
  <div>
    <!-- tag에 ul을 설정해서 ul태그는 삭제 -->
    <transition-group name="list" tag="ul">
    <!-- <ul> -->
      <!-- propsdata -> this.$store.state.storedTodoItems -->
      <!-- this.$store.state.todoItems -> this.$store.getters.storedTodoItems -->
      <!-- this.$store.getters.storedTodoItems -> computed사용: this.todoItems -> this.storedTodoItems -->
      <li v-for = '(todoItem, index) in this.storedTodoItems' v-bind:key="todoItem.item" class='shadow'>
        <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete({ todoItem, index })"></i>
        <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
        <span class="removeBtn" v-on:click="removeTodo({ todoItem, index })">
          <i class="fas fa-trash"></i>
        </span>
      </li>
    <!-- </ul> -->
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  // App.vue에서 넘어오는 props데이터는 받습니다.
  // props: ['propsdata'],
  computed: {
    // todoItems() {
    //   return this.$store.getters.storedTodoItems;
    // }
    ...mapGetters(['storedTodoItems'])
  },
  methods: {
    ...mapMutations({
      // 헬퍼함수들은 인자를 선언하지 않아도 인자를 사용하고 있으면 암묵적으로 그대로 넘겨주고 있다.
      removeTodo: 'removeOneItem',
      toggleComplete: 'toggleOneItem'
    }),
    // removeTodo: function(todoItem, index) {
    //   //console.log(todoItemKey,index);
    //   //console.log(event);
      
    //   //this.$emit('removeItem', todoItem, index);
    //   //event 대신 store에 있는 mutations을 commit으로 실행.
    //   this.$store.commit('removeOneItem', { todoItem, index });

    //   //ver1
    //   // localStorage.removeItem(todoItemKey);
    //   // this.todoItems.splice(index,1);
    // },
    // toggleComplete: function(todoItem, index) {

    //   //this.$emit('toggleItem', todoItem, index);

    //   // App.vue(toggleItem)로 갈 필요 없이 store.js의 toggleOneItem로.
    //   this.$store.commit('toggleOneItem', { todoItem, index })

    //   // ver1
    //   //todoItem.completed = !todoItem.completed;

    //   // // 로컬 스토리지의 데이터를 갱신(update가 없기 때문에 지우고, 다시 재등록)
    //   // localStorage.removeItem(todoItem.item);
    //   // localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    // }
  },
    // data: function() {
    //   return {
    //     todoItems: []
    //   }
    // },
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
  // } ver1
}
</script>

<style scoped>
/* scoped는 해당(TodoList)에 만 적용할 수 있도록 설정. */
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}

/* 리스트 아이템 트랜지션 효과 */
/* v-enter 시작할때 상태, v-enter-to 끝날때 상태 */
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>