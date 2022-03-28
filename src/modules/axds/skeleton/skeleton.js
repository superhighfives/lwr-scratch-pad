import { LightningElement, api } from 'lwc'
import classes from 'classnames'

export default class Skeleton extends LightningElement {
  @api type

  get classes() {
    return classes({
      skeleton: true,
      'skeleton--pulse': this.type === 'pulse',
      'skeleton--sheen': this.type === 'sheen',
    })
  }
}
