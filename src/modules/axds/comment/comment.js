import { LightningElement, api, track } from 'lwc'

export default class Comment extends LightningElement {
  @api loading
  @api error
  name
  body
  email
  image

  @api
  set comment(value) {
    const comment = value
    if (comment) {
      const id = Math.ceil(Math.random() * 100)
      const image = `https://source.unsplash.com/random/120x120/?${id}`

      this.name = comment.name
      this.body = comment.body
      this.email = comment.email
      this.image = image
    }
  }
  get comment() {
    return {
      name: this.name,
      body: this.body,
      email: this.email,
      image: this.image,
    }
  }
}
