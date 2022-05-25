import { LightningElement, api, track } from 'lwc';
import { presentationHelper } from '../../../utils/presentationHelper';

export default class Comment extends LightningElement {
    
    @api loading;
    @api error;
    @track presentationState = {};
    name;
    body;
    email;
    image;

    @api 
    set comment(value) {
        const comment = value;
        if(comment) {
            this.name = comment.name;
            this.body = comment.body;
            this.email = comment.email;
            this.image = comment.image;
        }
    }
    get comment() {
        return {
            name: this.name,
            body: this.body,
            email: this.email,
            image: this.image
        }
    }
    
    renderedCallback() {
        this.presentationState = {
            loading: this.loading,
            error: this.error,
        }
        presentationHelper.call(this);
    }
}