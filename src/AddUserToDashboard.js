import React from 'react'
import { useLDClient } from 'launchdarkly-react-client-sdk';

const AddUserToDashboard = () => {

    const ldClient = useLDClient();
    const now = new Date();

    const userId = {
        key: 101,
        firstName: 'Andy',
        lastName: 'Hudson',
        email: 'andyhudson1979@gmail.com',
        anonymous: false,
        custom: {
            postcode: 'PR7 5AQ',
            lastTimeRegistered: {
                date: now.getUTCDate(),
                month: now.getUTCMonth(),
                year: now.getUTCFullYear(),
                hour: now.getUTCHours(),
                minute: now.getUTCMinutes(),
                seconds: now.getUTCSeconds(),
                milliseconds: now.getUTCMilliseconds()
            }
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