import { Base } from '../base'

export class ModelA extends Base {
  list: { label: string }[];

  constructor() {
    super()
    this.list = []
  }

  async getList () {
    this.loading = true
    await this.delay(2000)
    this.list = Array.from({ length: 10 })
      .map(() => ({
        label: `idx-${Math.random()}`
      }))
  }
}