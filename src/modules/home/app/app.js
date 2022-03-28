import { LightningElement } from 'lwc'

export default class App extends LightningElement {
  loaded = false

  async fetchData() {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/comments?postId=1'
    )
    const data = await response.json()
    setTimeout(() => (this.loaded = true), 3000)
    return data
  }

  connectedCallback() {
    this.data = this.fetchData()
    return this.data
  }

  get isLoaded() {
    return this.loaded
  }
}
