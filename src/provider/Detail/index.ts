import { inject, computed, ref } from 'vue-demi'

import { Detail } from '@/model/detail'
import { ModelA, ModelB } from '@/model/modules'

import { detailProviderSymbol } from './context'

export { default } from './DetailProvider.vue'

type DetailInsRef = { value: Detail }
type ModelAInsRef = { value: ModelA }
type ModelBInsRef = { value: ModelB }

/**
 * 获取 detail 实例
 * @returns detail
 */
export const useDetailIns = (): DetailInsRef => {
  const detailInsRef = inject(detailProviderSymbol) as DetailInsRef
  return detailInsRef
}

/**
 * 获取 ModelA 实例
 * @returns modelA
 */
export const useModelAIns = (): ModelAInsRef => {
  return computed(() => {
    const detailIns = useDetailIns()
    return ref(detailIns?.value?.modelA)
  })
}

/**
 * 获取 modelB 实例
 * @returns modelB
 */
export const useModelBIns = (): ModelBInsRef => {
  return computed(() => {
    const detailIns = useDetailIns()
    return ref(detailIns?.value?.modelB)
  })
}