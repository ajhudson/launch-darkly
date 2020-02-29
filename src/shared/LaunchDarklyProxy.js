function LdProxy(user) {

    this.user = user;

    const addUser = () => {
        console.log('added user');
        console.log(this.user);
    }

    return {
        addUser: addUser
    };
}

exports.LdProxy = LdProxy;