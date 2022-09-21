import { Random } from 'mockjs'

import { Base } from '../base'

export class ModelB extends Base {

  color: string;
  modelB1: { color: string };
  modelB2: { color: string };

  constructor() {
    super()
    this.name = '🏠ModelB'
    this.color = Random.color();
    this.modelB1 = {
      color: Random.color(),
    }
    this.modelB2 = {
      color: Random.color(),
    }
  }

  get modelB1Color () {
    return this.modelB1.color
  }
  get modelB2Color () {
    return this.modelB2.color
  }
  get content () {
    return `My color: ${this.color}`
  }
  get modelB1Content () {
    return `My color: ${this.modelB1Color}`
  }
  get modelB2Content () {
    return `My color: ${this.modelB2Color}`
  }

  setModelB1Color () {
    this.modelB1.color = Random.color()
  }

  setModelB2Color () {
    this.modelB2.color = Random.color()
  }

  async init () {
    this.loading = true

    await this.delay()
    this.color = Random.color();
    this.modelB1 = {
      color: Random.color(),
    }
    this.modelB2 = {
      color: Random.color(),
    }

    this.loading = false
    this.mounted = true
  }
}