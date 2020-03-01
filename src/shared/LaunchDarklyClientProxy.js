function LaunchDarklyClientProxy(ldClient, ldUserInfoFactory, userInfoSource) {
    this.ldClient = ldClient;    
    this.userInfo = ldUserInfoFactory.createUserInfo(userInfoSource);

    const addUserToDashboard = () => new Promise(resolve => {
        this.ldClient.identify(this.userInfo)
                        .then(() => this.ldClient.getUser())
                        .then(usr => resolve(usr));
    });



    return {
        addUserToDashboard
    }
}

exports.LaunchDarklyClientProxy = LaunchDarklyClientProxy;