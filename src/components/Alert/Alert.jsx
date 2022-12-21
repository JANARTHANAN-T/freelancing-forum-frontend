
import React from 'react';

import {useDispatch,useSelector} from 'react-redux'
import './Alert.scss'
const Alert = () => {
    const alerts=useSelector((state)=>(state.alertReducer))
    return(
        <div className="alert-wrapper">
            {alerts?.map((alert) => (
            <div key={alert.id} className={`alert alert-${alert.alertType} bg-${alert.alertType} border border-${alert.alertType}`}>
                {alert.msg}
            </div>
            ))}
        </div>
    )
    };

export default Alert
