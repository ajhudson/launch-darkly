const LDClient = require('launchdarkly-js-client-sdk');

function LaunchDarklyUserInfoFactory(sourceUserInfo) {
    this.sourceUserInfo = sourceUserInfo;

    const createUserInfo = () => {
        const now = new Date();
        const group = (now.getUTCMilliseconds() % 10) + 1;

        const toAppend = {
            custom: {
                postcode: 'PR7 5AQ',
                lastLoginDateUtc: now.getUTCDate(),
                lastLoginMonthUtc: now.getUTCMonth(),
                lastLoginYearUtc: now.getUTCFullYear(),
                lastLoginHourUtc: now.getUTCHours(),
                lastLoginMinutesUtc: now.getUTCMinutes(),
                lastLoginSecondsUtc: now.getUTCSeconds(),
                arbitaryGroups: [
                    `group ${group}`
                ]
            }
        };

        return Object.assign(this.sourceUserInfo, toAppend);
    };

    return {
        createUserInfo
    }
}

function LDClientProxy(ldClientSideId, user) {
    this.ldClientSideId = ldClientSideId;
    this.ldClient = null;

    const userInfoFactory = new LaunchDarklyUserInfoFactory(user);
    this.userInfo = userInfoFactory.createUserInfo();

    const initClient = () => new Promise(resolve => {
       if (this.ldClient != null) {
           resolve(this.ldClient);
       } else {
        this.ldClient = LDClient.initialize(this.ldClientSideId, this.userInfo);
        this.ldClient.on('ready', () => { 
            resolve(this.ldClient);
        });    
       }
    }); 

    const registerUserOnDashboard = () => new Promise(resolve => initClient().then(ldc => resolve(ldc.getUser())));

    const getAllFlags = () => new Promise(resolve => initClient().then(ldc => resolve(ldc.allFlags())));

    return {
        registerUserOnDashboard,
        getAllFlags
    }
};

exports.LDClientProxy = LDClientProxy;