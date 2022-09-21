<template>
  <div class="m-auto p-4 w-10/12 flex flex-col border-4">
    <div class="text-3xl text-center underline">{{name}}</div>
    <div class="my-4 p-4 w-full h-96 flex">
      <ModelA class="flex-1" :style="modelAStyle" />
      <ModelB class="ml-32 flex-1" :style="modelBStyle" />
    </div>
  </div>
</template>

<script>
import { useDetailIns, useModelBIns, useModelAIns } from '@/provider/Detail'

import ModelA from '@/components/ModelA'
import ModelB from '@/components/ModelB'

export default {
  name: 'Detail',
  components: {
    ModelA,
    ModelB,
  },
  setup() {
    const detailIns = useDetailIns()
    const modelAIns = useModelAIns()
    const modelBIns = useModelBIns()

    return {
      detailIns,
      modelAIns,
      modelBIns,
    }
  },
  computed: {
    name () {
      return this.detailIns?.name
    },
    modelAStyle () {
      const color = this.modelAIns?.color
      const style = {}
      if (color) {
        style['border-color'] = color
      }
      return style
    },
    modelBStyle () {
      const color = this.modelBIns?.color
      const style = {}
      if (color) {
        style['border-color'] = color
      }
      return style
    },
  },
}
</script>