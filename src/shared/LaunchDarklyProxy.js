function LdProxy(ldClient, user) {
    this.ldClient = ldClient;
    this.user = user;

    console.log(this.ldClient);

    const addUserToDashboard = () => {
        console.log('added user');
        console.log(this.user);
        this.ldClient.identify(this.user)
            .then(() => console.log('sent to launch darkly'))
            .catch(() => console.log('there was an error'));
    }

    return {
        addUserToDashboard: addUserToDashboard
    };
}

exports.LdProxy = LdProxy;