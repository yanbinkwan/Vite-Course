<template>
    <h1>这是首页</h1>
    <Todolist></Todolist>
    <!-- <Rate v-model="score">{{ score }}</Rate> -->
    <!-- <div @click="asyncAdd">{{ count }}</div> -->
</template>

<script setup>
import Todolist from '../components/Todolist.vue'
import {
    useStore
} from 'vuex'
let store = useStore();
function add() { store.commit('add') }
function asyncAdd() { store.dispatch('asyncAdd') }
</script>
