import { LightningElement, api } from "lwc";

export default class CustomButton extends LightningElement {

    
    @api label;

    @api variant;
}