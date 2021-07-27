<template>
  <div class="home">Home</div>
  <h2>Refs</h2>
  <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
  <button @click="updateNinjaOne">Update ninja one</button>
  <h2>Reactive</h2>
  <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
  <button @click="updateNinjaTwo">Update ninja two</button>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
// @ is an alias to /src

export default {
  name: "Home",

  // Run before created, before mounted
  setup() {
    const p = ref(null);

    const ninjaOne = ref({ name: "mario", age: 30 });
    const ninjaTwo = reactive({ name: "luigi", age: 35 });

    // reactive cannot use primitive

    const updateNinjaOne = () => {
      ninjaOne.value.age = 40;
    };

    const updateNinjaTwo = () => {
      ninjaTwo.age = 45;
    };

    return { ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo };
  },
};
</script>
