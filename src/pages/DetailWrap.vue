<template>
  <DetailProvider class="p1">
    <Detail />
  </DetailProvider>
</template>

<script>
import DetailProvider from '@/provider/Detail'

import Detail from './Detail.vue'

export default {
  name: 'DetailWrap',
  components: {
    DetailProvider, Detail,
  }
}
</script>