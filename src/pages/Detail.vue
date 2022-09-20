<template>
  <div class="m-auto p-4 w-10/12 flex flex-col border-4">
    <div class="text-3xl text-center underline">Detail</div>
    <div class="my-4 p-4 w-full flex justify-between">
      <ModelA />
      <ModelB />
    </div>
  </div>
</template>

<script>
import ModelA from '../components/ModelA'
import ModelB from '../components/ModelB'

export default {
  name: 'Detail',
  components: {
    ModelA,
    ModelB,
  }
}
</script>