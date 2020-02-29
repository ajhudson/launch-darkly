const LaunchDarklyProxy = (() => {

    const addUserToDashboard = user => console.log(user);

    return {
        addUserToDashboard
    };
})();

export default LaunchDarklyProxy;