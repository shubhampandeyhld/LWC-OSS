import { LightningElement } from 'lwc';

export default class HelloWorldApp extends LightningElement {
    connectedCallback(){
        console.log('site loaded')
    }
}
