<template>
    <div class="inputBox shadow">
        <!-- form v-on:submit.prevent (event.preventDefault());-->
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <!-- <button v-on:click="addTodo">add</button> -->
        <span class="addContainer" v-on:click="addTodo">
            <i class="fas fa-plus addBtn"></i>
        </span>

        <!-- <Teleport to="body"> -->
            <!-- use the modal component, pass in the prop -->
            <modal :show="showModal" @close="showModal = false">
            <template #header>
                <!-- <h3 slot="header" slot은 특정 컴포넌트의 일부 UI를 재사용 할 수 있게 해줍니다.-->
                <h3>
                    경고!!!
                    <!-- v-on: >>> @ -->
                    <i class="closeModalBtn fas fa-times" @click="showModal = false" ></i>
                </h3>
                
            </template>

            <template #body>
                <h3>내용을 입력해주세요~</h3>
            </template>

            <!-- <template #modal-footer>
                <h3>copy right</h3>
            </template> -->
            </modal>





        <!-- </Teleport> -->
    </div>

</template>

<script>
import Modal from './common/Modal.vue'

export default {
    components: {
        Modal
  },
    data: function() {
        return {
            newTodoItem: '',
            showModal: false
        }
    },
    methods: {
        addTodo() {
            if(this.newTodoItem !== '') {
                // 이벤트이름, 보내고싶은값1,값2....
                //this.$emit('addTodoItem', this.newTodoItem);
                
                //ver3
                this.$store.commit('addOneItem', this.newTodoItem);

                //ver1
                // check 여부 확인, item을 object로 저장.
                //let obj = {completed: false, item: this.newTodoItem};    
                // object를 변경하지 않고 바로 넣어주면 object Object로 들어갑니다.
                //localStorage.setItem(this.newTodoItem, obj);
                //localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
                this.clearInput();
            } else {
                this.showModal = !this.showModal;
            }
        },
        clearInput: function() {
            this.newTodoItem = '';
        }
    },
}
</script>

<style scoped>
input:focus {
    outline: none;
}
.inputBox {
    background-color:  white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input {
    border-style: none;
    font-size: 0.9rem;
}
.addContainer {
    float: right;
    background: linear-gradient(to right, #6478F8, #8763F8);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn {
    color: black;
    vertical-align: middle;
}
.closeModalBtn {
    color: #42b983;
    margin-left: 3px;
}
</style>