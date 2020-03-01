function LaunchDarklyUserInfoFactory() {

    const createUserInfo = (sourceUserInfo) => {
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
                arbitaryGroup: group
            }
        };

        return Object.assign(sourceUserInfo, toAppend);
    };

    return {
        createUserInfo
    }
}

exports.LaunchDarklyUserInfoFactory = LaunchDarklyUserInfoFactory;