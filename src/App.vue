<script setup lang="ts">
import { ref } from '@vue/reactivity'
import axios from 'axios'

const stuff = ref({})
const name = ref('')

const fetchData = async () => {
  const { data } = await axios.post('/user/manager/create', {
    name: name.value,
    age: 30,
  })
  stuff.value = data
}
</script>

<template>
  <div>
    <input type="text" v-model="name" />
    <button @click="fetchData">click me</button>
    <div>
      {{ stuff }}
    </div>
  </div>
</template>
