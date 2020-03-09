import React from 'react';

const MaintenancePage = ({caption}) => {
    return (
        <div>
            <h3>Sorry - We're undergoing Maintenance at the moment.</h3>
    <h4>Maintenance type: {caption}</h4>
            <hr />
        </div>
    )
};

export default MaintenancePage;