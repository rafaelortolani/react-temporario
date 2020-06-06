import {configureScope, init } from '@sentry/browser' 

(() => {

    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'){
        return;
    }
    
    init({dsn: "https://b4b4bbfc3bf84bddaaa637eb542b8485@o403744.ingest.sentry.io/5266722"});
    configureScope(scope => {
    })

})();