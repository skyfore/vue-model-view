import { Base } from './base'

import { ModelA, ModelB } from './modules'

export class Detail extends Base {
  modelA: ModelA;
  modelB: ModelB;

  constructor() {
    super()
    this.name = '🌞Home'

    this.modelA = new ModelA()
    this.modelB = new ModelB()
  }
}