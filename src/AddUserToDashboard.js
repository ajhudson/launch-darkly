import React from 'react'
import { useLDClient } from 'launchdarkly-react-client-sdk';
import { LdProxy } from './shared/LaunchDarklyProxy';

const AddUserToDashboard = () => {

    const now = new Date();
    const userInfo = {
        key: 2001,
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

    const ldClient = useLDClient();
    const ldProxy = new LdProxy(ldClient, userInfo);
    ldProxy.addUserToDashboard();

    
    /*
    ldClient.identify(userId)
            .then(x => console.log(x));

    */
    return(
        <div id='add-user-to-dashboard'>
            <p>{ userInfo.firstName } { userInfo.lastName }</p>
            <p>{ userInfo.custom.lastLoginUtc }</p>
            <p>{ new Date().getTime() }</p>
        </div>
    );
}

export default AddUserToDashboard