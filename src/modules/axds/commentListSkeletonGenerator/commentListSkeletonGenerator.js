import { LightningElement, api, track } from 'lwc'

export default class CommentListSkeletonGenerator extends LightningElement {
  @api loading
  @api comments
  @api skeletons = '5'

  get data() {
    if (this.comments.length) {
      return this.comments
    } else {
      return Array(Number(this.skeletons))
        .fill()
        .map((element, index) => {
          return { id: `l-${index}` }
        })
    }
  }
}
