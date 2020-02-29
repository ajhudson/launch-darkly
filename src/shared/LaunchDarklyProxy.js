const LDClient = require('launchdarkly-js-client-sdk');

function LDClientProxy(ldClientSideId, user) {
    this.ldClientSideId = ldClientSideId;
    this.user = user;
    this.ldClient = null;

    const initClient = () => new Promise(resolve => {
       if (this.ldClient != null) {
           resolve(this.ldClient);
       } else {
        this.ldClient = LDClient.initialize(this.ldClientSideId, this.user);
        this.ldClient.on('ready', () => { 
            resolve(this.ldClient);
        });    
       }
    }); 


    const getUser = () => new Promise(resolve => initClient().then(ldc => resolve(ldc.getUser())));

    const getAllFlags = () => new Promise(resolve => initClient().then(ldc => resolve(ldc.allFlags())));

    return {
        getUser: getUser,
        getAllFlags: getAllFlags
    }
};

exports.LDClientProxy = LDClientProxy;