import React, { useEffect } from 'react'
import { useLDClient } from 'launchdarkly-react-client-sdk';
import { LaunchDarklyUserInfoFactory } from './../shared/LaunchDarklyUserInfoFactory';
import { LaunchDarklyClientProxy } from './../shared/LaunchDarklyClientProxy';

const AddUserToDashboard = () => {

    const ldClient = useLDClient();

    const userInfo = {
        key: 2001,
        firstName: 'Andy',
        lastName: 'Hudson',
        email: 'andyhudson1979@gmail.com',
        anonymous: false,
    };

    useEffect(() => {
        const ldUserInfoFactory = new LaunchDarklyUserInfoFactory();
        const ldClientProxy = new LaunchDarklyClientProxy(ldClient, ldUserInfoFactory, userInfo);

        const registerAndReturnUser = async () => {
            const usr = await ldClientProxy.addUserToDashboard();
            console.log('the user return from the async op is...');
            console.log(usr);
        };

        registerAndReturnUser();
    }, [ldClient, userInfo])

    return(
        <></>
    );
}

export default AddUserToDashboard