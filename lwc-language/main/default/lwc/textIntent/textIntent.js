import { LightningElement, track } from 'lwc';
import findTextIntent from '@salesforce/apex/LWCL_LangController.findTextIntent';

export default class TextIntent extends LightningElement {
    @track document = '';
    @track token = '';
    @track model = 'NPEV3WTODBTY4XHJBL3AKLMWJE';
    @track textEval;

    handleDocumentChange(event){
        this.document = event.target.value;
    }
    handleTokenChange(event){
        this.token = event.target.value;
    }
    handleModelChange(event){
        this.model = event.target.value;
    }
    handleTextEvaluation(){
        findTextIntent({ document: this.document, access_token: this.token, model: this.model })
            .then(result => {
                this.textEval = result;
                //this.error = undefined;
            });
    }
}