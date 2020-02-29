import React from 'react'

const Body = ({children}) => {
    return (
        <div id='body'>
            <p>Body</p>
            { children }
        </div>
    );
};

export default Body;