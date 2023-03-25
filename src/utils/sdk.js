import { CSID, CUSTOMER_BRAND, INITIAL_CONTEXT_PAGE, POST_URL } from './constans';

export const setCustomerSessionId = () =>{
    try {
        if(window && window.cdApi) {
            window.cdApi.setCustomerSessionId(CSID)
        } else {
            console.log('window.cdApi is not exist');
        }
    } catch (e) {
        console.error(e);
    }
}

export const changeContext = (pageName) =>{
    try {
        if(window && window.cdApi) {
            // debugger
            window.cdApi.changeContext(pageName)
        } else {
            console.log('window.cdApi is not exist', pageName);
        }
    } catch (e) {
        console.error(e);
    }
}

export const action = {
    MAKE_PAYMENT: 'MAKE_PAYMENT',
    INIT: 'init',
    GET_SCORE: 'getscore'
}

export const dummyData = (actionName) => {
    return {
        customerId: "dummy",
        action: actionName,
        customerSessionId: CSID,
        activityType: "LOGIN",
        uuid: "jgh875wdwlv0skue63",
        brand: "SD",
        solution: "ATO",
    }
}

export function postApi(actionName) {
    fetch(POST_URL, {
        method: "GET",
        mode: "cors",
        body: JSON.stringify(dummyData(actionName)),
    })
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.log(err))
}

export function firstInitial() {
    try {
        if (window && window.cdApi) {
            window.cdApi.setCustomerSessionId(CSID)
            window.cdApi.setCustomerBrand(CUSTOMER_BRAND)
            window.cdApi.changeContext(INITIAL_CONTEXT_PAGE)
        }
    } catch (e) {
        console.error(e);
    }
}

// FOR DUMMY DEMO ONLY - in real life the CSID value is managed server-side:
export function getTheCSID() {
    try {
        const CSID = window.sessionStorage.getItem("CSID");
        if (!CSID) {
            const dateNowSec = Date.now().toString();
            const CSID = "TEST" + dateNowSec;
            sessionStorage.setItem("CSID", CSID);
            console.log("a CSID sessionStorage key created: " + CSID);
            return CSID;
        }
        else {
            console.log("a CSID sessionStorage key: " + CSID);
            return CSID // do nothing, just get the CSID from the sessionStorage.
        }
    }
    catch (e) {
        console.error("Oops: " + e);
    }
}

export function smartLoad(url, csid, context) {
    const jsLoaded = window.sessionStorage.getItem("isLoaded");
    let theJs = document.createElement("script")
    theJs.type = "text/javascript";

    function jsSdkCheckState() {
        function onNotification(e) {
            const msg = e.data;
            if (msg.type === 'cdStateChangedEvent' && (msg.event['state'] === 'starting' || msg.event['state'] === 'started')) {
                try {
                    window.cdApi.setCustomerSessionId(csid);
                    window.cdApi.changeContext(context);
                }
                catch (e) { console.error(e); }
                window.removeEventListener('message', onNotification, true);
            }
        }
        window && window.addEventListener ?
            window.addEventListener('message', onNotification, true) :
            window.attachEvent('onmessage', onNotification);
    }

    if (window.self === window.top) {
        window.onbeforeunload = function () {
            sessionStorage.removeItem("isLoaded");
        }
    };
    if (jsLoaded !== 'true') {
        jsSdkCheckState();
        theJs.src = url;
        document.getElementsByTagName("head")[0].appendChild(theJs);
        sessionStorage.setItem("isLoaded", 'true');
    } else {
        if (window.self === window.top && window.cdApi) {
            try {
                window.cdApi.setCustomerSessionId(csid);
                window.cdApi.changeContext(context);
            }
            catch (e) { console.error(e); }
        }
    }

}