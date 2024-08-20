import React, { useEffect } from 'react';
import "./Suggust.css";
// import "../../component/Notification/Notification.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

function Suggust(props) {
useEffect(()=>{
props.setShowNotification(false);
},[])

    return (
        <div className='suggust-container'>
            <div className='suggust-main'>
                <div className='notification-suggest'>
                    <h5>Suggested for you</h5>
                    <div className='suggest-data-show'>
                        <div className='sugust-profile'><FontAwesomeIcon icon={faCircleUser} style={{ fontSize: "40px" }} />
                            <h6>User name</h6></div>
                        <button>
                            Follow
                        </button>
                    </div>
                    <div className='suggest-data-show'>
                        <div className='sugust-profile'><FontAwesomeIcon icon={faCircleUser} style={{ fontSize: "40px" }} />
                            <h6>User name</h6></div>
                        <button>
                            Follow
                        </button>
                    </div>
                    <div className='suggest-data-show'>
                        <div className='sugust-profile'><FontAwesomeIcon icon={faCircleUser} style={{ fontSize: "40px" }} />
                            <h6>User name</h6></div>
                        <button>
                            Follow
                        </button>
                    </div>
                    <div className='suggest-data-show'>
                        <div className='sugust-profile'><FontAwesomeIcon icon={faCircleUser} style={{ fontSize: "40px" }} />
                            <h6>User name</h6></div>
                        <button>
                            Follow
                        </button>
                    </div>
                    <div className='suggest-data-show'>
                        <div className='sugust-profile'><FontAwesomeIcon icon={faCircleUser} style={{ fontSize: "40px" }} />
                            <h6>User name</h6></div>
                        <button>
                            Follow
                        </button>
                    </div>
                    <div className='suggest-data-show'>
                        <div className='sugust-profile'><FontAwesomeIcon icon={faCircleUser} style={{ fontSize: "40px" }} />
                            <h6>User name</h6></div>
                        <button>
                            Follow
                        </button>
                    </div>
                    <div className='suggest-data-show'>
                        <div className='sugust-profile'><FontAwesomeIcon icon={faCircleUser} style={{ fontSize: "40px" }} />
                            <h6>User name</h6></div>
                        <button>
                            Follow
                        </button>
                    </div>
                    <div className='suggest-data-show'>
                        <div className='sugust-profile'><FontAwesomeIcon icon={faCircleUser} style={{ fontSize: "40px" }} />
                            <h6>User name</h6></div>
                        <button>
                            Follow
                        </button>
                    </div>
                    <div className='suggest-data-show'>
                        <div className='sugust-profile'><FontAwesomeIcon icon={faCircleUser} style={{ fontSize: "40px" }} />
                            <h6>User name</h6></div>
                        <button>
                            Follow
                        </button>
                    </div>
                    <div className='suggest-data-show'>
                        <div className='sugust-profile'><FontAwesomeIcon icon={faCircleUser} style={{ fontSize: "40px" }} />
                            <h6>User name</h6></div>
                        <button>
                            Follow
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Suggust;