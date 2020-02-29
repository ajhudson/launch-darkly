import React from 'react'
import { useLDClient } from 'launchdarkly-react-client-sdk';
import { LdProxy } from './shared/LaunchDarklyProxy';

const AddUserToDashboard = () => {

    const ldClient = useLDClient();
    const now = new Date();
    const ldProxy = new LdProxy({ id: 'abcd'});
    ldProxy.addUser();

    //console.log(LaunchDarklyProxy);

    const userId = {
        key: 1001,
        firstName: 'Andy',
        lastName: 'Hudson',
        email: 'andyhudson1979@gmail.com',
        anonymous: false,
        custom: {
            postcode: 'PR7 5AQ',
            lastLoginDateUtc: now.getUTCDate(),
            lastLoginMonthUtc: now.getUTCMonth(),
            lastLoginYearUtc: now.getUTCFullYear(),
            lastLoginHourUtc: now.getUTCHours(),
            lastLoginMinutesUtc: now.getUTCMinutes(),
            lastLoginSecondsUtc: now.getUTCSeconds(),
            groups: [
                "tote uk",
                "tote uk 2",
                { a: 1, b: 2 }
            ],
            arbitaryGroups: [
                "group 1"
            ]
        }
    };

    ldClient.identify(userId)
            .then(x => console.log(x));

    return(
        <div id='add-user-to-dashboard'>
            <p>{ userId.firstName } { userId.lastName }</p>
            <p>{ userId.custom.lastLoginUtc }</p>
            <p>{ new Date().getTime() }</p>
        </div>
    );
}

export default AddUserToDashboard