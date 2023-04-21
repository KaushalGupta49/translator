const axios = require('axios').default;
const { v4: uuidv4 } = require('uuid');

let key = "e53a493836824871a9cfe5e3bc6111c3";
let endpoint = "https://api.cognitive.microsofttranslator.com";

// location, also known as region.
// required if you're using a multi-service or regional (not global) resource. It can be found in the Azure portal on the Keys and Endpoint page.
let location = "centralindia";
let val ="Name";

axios({
    baseURL: endpoint,
    url: '/translate',
    method: 'post',
    headers: {
        'Ocp-Apim-Subscription-Key': key,
        // location required if you're using a multi-service or regional (not global) resource.
        'Ocp-Apim-Subscription-Region': location,
        'Content-type': 'application/json',
        'X-ClientTraceId': uuidv4().toString()
    },
    params: {
        'api-version': '3.0',
        'from': 'en',
        'to': ['fr', 'zu']
    },
    data: [{
        'text': val
    }],
    responseType: 'json'
}).then(function (response) {
    console.log(JSON.stringify(response.data, null, 4));
})