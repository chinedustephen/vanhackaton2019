import React from 'react';

function errorMessage(props) {
    return (
        <div className="jumbotron" >
            <p>{props.message}</p>
        </div>
    )
}

export default errorMessage;