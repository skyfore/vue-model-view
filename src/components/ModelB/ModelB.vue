<template>
  <div class="w-3/6 p-4 flex flex-col border-4">
    <div class="text-2xl text-center underline">Model B</div>
    <div class="w-full my-4 flex justify-between">
      <ModelB1 />
      <ModelB2 />
    </div>
  </div>
</template>

<script>

import ModelB1 from './ModelB1.vue'
import ModelB2 from './ModelB2.vue'

export default {
  name: 'ModelB',
  components: {
    ModelB1,
    ModelB2
  }
}
</script>