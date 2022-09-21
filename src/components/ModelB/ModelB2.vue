<template>
  <div class="p-4 flex flex-col border-4">
    <div class="text-1xl text-center underline">Model B2</div>
    <div v-if="content" class="flex-1 flex items-center justify-center">{{content}}</div>
  </div>
</template>

<script>
import { useModelBIns } from '@/provider/Detail'

export default {
  name: 'ModelB1',
  setup() {
    const modelBIns = useModelBIns()

    return {
      modelBIns
    }
  },
  computed: {
    content () {
      return this.modelBIns?.modelB2Content
    },
  },
}
</script>