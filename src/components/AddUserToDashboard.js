import React from 'react'
import { LDClientProxy } from '../shared/LaunchDarklyProxy';
import config from '../config';

const AddUserToDashboard = () => {

    /*()
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
    };*/

    const userInfo = {
        key: 2001,
        firstName: 'Andy',
        lastName: 'Hudson',
        email: 'andyhudson1979@gmail.com',
        anonymous: false,
    };

    const ldc = new LDClientProxy(config.launchDarklyClientId, userInfo);  
    ldc.registerUserOnDashboard().then(usr => console.log(usr));
    ldc.getAllFlags().then(flags => console.log(flags));
    
    return(
        <div id='add-user-to-dashboard'>
            <p>{ userInfo.firstName } { userInfo.lastName }</p>
        </div>
    );
}

export default AddUserToDashboard