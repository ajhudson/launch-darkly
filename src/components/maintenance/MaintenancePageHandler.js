import React from 'react';
import { useFlags } from 'launchdarkly-react-client-sdk';
import MaintenancePage from './MaintenancePage';

const MaintenancePageHandler = ({children}) => {
    const { fullSiteMaintenance } = useFlags();
    const toRender = fullSiteMaintenance ? <MaintenancePage /> : children;

    return (
        <>{ toRender }</>
    );
};

export default MaintenancePageHandler;