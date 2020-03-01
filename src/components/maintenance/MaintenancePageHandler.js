import React from 'react';
import { useFlags } from 'launchdarkly-react-client-sdk';
import MaintenancePage from './MaintenancePage';

const MaintenancePageHandler = ({children}) => {
    const { maintenancePage } = useFlags();
    const toRender = maintenancePage ? <MaintenancePage /> : children;

    return (
        <>{ toRender }</>
    );
};

export default MaintenancePageHandler;