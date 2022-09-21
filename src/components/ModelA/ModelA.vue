<template>
  <div class="p-4 w-2/6 flex flex-col border-4">
    <div class="text-2xl text-center underline">{{name}}</div>
    <div class="mt-4 text-base text-white">
      <button class="p-2 border-2 rounded-md bg-violet-500 hover:bg-violet-600 active:bg-violet-700" @click="refreshAll">refreshAll</button>
      <button class="p-2 ml-2 border-2 rounded-md bg-violet-500 hover:bg-violet-600 active:bg-violet-700" @click="refreshMyself">Refresh MySelf</button>
      <button class="p-2 ml-2 border-2 rounded-md bg-violet-500 hover:bg-violet-600 active:bg-violet-700" @click="refreshB">Refresh ModelB</button>
      <button class="p-2 ml-2 border-2 rounded-md bg-violet-500 hover:bg-violet-600 active:bg-violet-700" @click="refreshB1">Refresh ModelB1</button>
      <button class="p-2 ml-2 border-2 rounded-md bg-violet-500 hover:bg-violet-600 active:bg-violet-700" @click="refreshB2">Refresh ModelB2</button>
    </div>
    <div v-if="loading" class="flex-1 flex items-center justify-center">Loading...</div>
    <div v-else-if="content" class="flex-1 flex items-center justify-center">{{content}}</div>
  </div>
</template>

<script>
import { useDetailIns, useModelAIns, useModelBIns } from '@/provider/Detail'

export default {
  name: 'ModelA',
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
    loading () {
      const { mounted, loading } = this.modelAIns || {}
      if (!mounted) return true
      return loading
    },
    name () {
      return this.modelAIns?.name || ''
    },
    content () {
      return this.modelAIns?.content
    },
  },
  methods: {
    refreshAll () {
      this.detailIns.init()
    },
    refreshMyself () {
      this.modelAIns.init()
    },
    refreshB() {
      this.modelBIns.init()
    },
    refreshB1() {
      this.modelBIns.setModelB1Color()
    },
    refreshB2() {
      this.modelBIns.setModelB2Color()
    },
  },
}
</script>