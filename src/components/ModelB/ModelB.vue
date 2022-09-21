<template>
  <div class="w-3/6 p-4 flex flex-col border-4">
  <div class="text-2xl text-center underline">{{name}}</div>
  <div v-if="loading" class="h-full flex items-center justify-center">Loading...</div>
  <div v-else class="w-full flex-1 my-4 flex justify-between">
    <ModelB1 class="flex-1" :style="modelB1Style"/>
    <ModelB2 class="ml-8 flex-1" :style="modelB2Style" />
  </div>
  </div>
</template>

<script>
import { useModelBIns } from '@/provider/Detail'

import ModelB1 from './ModelB1.vue'
import ModelB2 from './ModelB2.vue'

export default {
  name: 'ModelB',
  components: {
    ModelB1,
    ModelB2
  },
  setup() {
    const modelBIns = useModelBIns()

    return {
      modelBIns
    }
  },
  computed: {
    loading () {
      const { mounted, loading } = this.modelBIns || {}
      if (!mounted) return true
      return loading
    },
    name () {
      return this.modelBIns?.name || ''
    },
    modelB1Style () {
      const color = this.modelBIns?.modelB1Color
      const style = {}
      if (color) {
        style['border-color'] = color
      }
      return style
    },
    modelB2Style () {
      const color = this.modelBIns?.modelB2Color
      const style = {}
      if (color) {
        style['border-color'] = color
      }
      return style
    },
  },
}
</script>