<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { ref, provide } from 'vue-demi'

import { Detail as DetailModel } from '@/model/detail'

import { detailProviderSymbol } from './context'

export default {
  name: 'DetailProvider',
  setup () {
    const detailIns = ref()
    provide(detailProviderSymbol, detailIns)

    return {
      detailIns
    }
  },
  mounted () {
    const detailIns = new DetailModel()
    detailIns.init()
  },
}
</script>

<style>

</style>