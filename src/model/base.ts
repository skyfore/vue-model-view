export class Base {
  /**
   * Id
   */
  id: number;

  /**
   * 展示名称
   */
  name: string;

  /**
   * 是否已经加载完成
   */
  mounted: boolean;

  /**
   * 是否处于 loading 状态
   */
  loading: boolean;

  constructor() {
    this.name = 'Base'
    this.id = Math.random()
    this.loading = false
    this.mounted = false
  }

  async delay (time: number = 500) {
    await new Promise((resolve) => setTimeout(resolve, time))
  }

  async init () {
    this.loading = true
    await this.delay()
    this.loading = false
    this.mounted = true
  }
}