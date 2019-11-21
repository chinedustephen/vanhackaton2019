import React from 'react'

function errorAlert(props) {
    let alertClass = props.status === 'success' ? 'alert alert-success' : 'alert alert-danger'
    if (props.status) {
        return (
            <div className={alertClass}>
                <button type="button" className="close" onClick={props.close}>&times;</button>
                <strong>{props.status}!</strong> {props.message}
            </div>
        )
    } else {
        return '';
    }

}

export default errorAlert;