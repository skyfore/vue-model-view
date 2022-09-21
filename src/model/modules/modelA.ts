import { Random } from 'mockjs'

import { Base } from '../base'

export class ModelA extends Base {

  color: string;

  constructor() {
    super()
    this.name = '🐔ModelA'
    this.color = Random.color();
  }

  get content () {
    return `My color: ${this.color}`
  }

  async init () {
    this.loading = true

    await this.delay()
    this.color = Random.color();

    this.loading = false
    this.mounted = true
  }
}