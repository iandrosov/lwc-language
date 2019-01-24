import { LightningElement, track } from 'lwc';
import findTextSentiment from '@salesforce/apex/LWCL_LangController.findTextSentiment';

export default class LanguageTest extends LightningElement {
    @track document = '';
    @track token = '';
    @track model = 'CommunitySentiment';
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
        findTextSentiment({ document: this.document, access_token: this.token, model: this.model })
            .then(result => {
                this.textEval = result;
                //this.error = undefined;
            });
    }
    

    
}