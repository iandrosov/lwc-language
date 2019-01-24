public with sharing class LWCL_LangController {

    @AuraEnabled(cacheable=true)
    public static List<LWCL_Language.Prediction> findTextIntent(String document, String access_token, String model) {
        List<LWCL_Language.Prediction> pList = LWCL_Language.intent(document, access_token, model);

        return pList;
    }

    @AuraEnabled(cacheable=true)
    public static List<LWCL_Language.Prediction> findTextSentiment(String document, String access_token, String model) {
        if(model == null){
            model = 'CommunitySentiment';
        }
        List<LWCL_Language.Prediction> pList = LWCL_Language.sentiment(document, access_token, model);

        return pList;
    }

}
