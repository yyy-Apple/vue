<template>
  <div class="home">Home</div>
  <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
  <button @click="handleClick">Click me</button>
  <button @click="age++">Add 1 to age</button>
  <input type="text" v-model="name">
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
// @ is an alias to /src

export default {
  name: "Home",

  // Run before created, before mounted
  setup() {
    const p = ref(null);

    // p.value will be null since we haven't return p
    console.log(p, p.value)

    const name = ref("mario");
    const age = ref(30);

    const handleClick = () => {
      name.value = 'Apple'
      age.value = 24

    console.log(p, p.value)
    p.value.classList.add('test')
    p.value.textContent = 'Hello, ninjas'
    }

    // return {
    //   name: name,
    //   age: age,
    //   handleClick: handleClick
    // };
    return {name, age, handleClick, p}

  },
};
</script>
