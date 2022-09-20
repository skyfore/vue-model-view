export class Base {
  id: number;
  mounted: boolean;
  loading: boolean;

  constructor() {
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