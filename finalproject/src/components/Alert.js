import React from 'react'

const Alert = (props) => {
    return (
        props.alert &&(
        <div className='container' >
            <div className={`alert alert-${props.alert.type}`} role="alert">
                <center><strong>{props.alert.msg}</strong></center>
            </div>
        </div>
        )
    )
}

export default Alert