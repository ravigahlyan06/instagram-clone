import React, { useEffect, useRef } from 'react';
import "./Notification.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Notification = (props) => {
    const NotificationDownRef = useRef(null);

    // useEffect(() => {
    //     const handleClickOutSide = (event) => {
    //         if (NotificationDownRef.current && !NotificationDownRef.current.contains(event.target)) {
    //             props.setShowNotification(false)
    //         }
    //     };
    //     document.addEventListener('mousedown', handleClickOutSide);
    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutSide);
    //     }
    // }, [NotificationDownRef]);

    useEffect(() => {
        if (NotificationDownRef) {
            function handleClickOutSide(event) {
                event.preventDefault();
                if (NotificationDownRef.current && !NotificationDownRef.current.contains(event.target) && props.notificationButtonRef.current &&
                    !props.notificationButtonRef.current.contains(event.target)) {
                    if (props.showNotification) {
                        props.setShowNotification(false)
                    }
                }
            }
            document.addEventListener("mousedown", handleClickOutSide);

            return () => {
                document.removeEventListener("mousedown", handleClickOutSide);
            }
        }
    }, [])


    return (
        <div className='notification-container' ref={NotificationDownRef} >
            <div className='notification-main'>
                <div className='notification-header'>
                    <h3 style={{ marginLeft: "20px" }}>Notification</h3>
                    <div className='notification-header-content'>
                        <FontAwesomeIcon icon={faHeart} className='notification-content-icn' />
                        <p>Activity On Your Posts</p>
                        <p>When Someone like or comments on one of your Posts. you'll see it here.</p>
                    </div>
                </div>
                <div className='notification-suggest'>
                    <h5 style={{ marginLeft: "20px" }}>Suggested for you</h5>
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
            <Link to="suggest" className='notification-link' style={{ margin: "30px" }}>See all Suggestion</Link>
        </div>
    )
}
export default Notification;    
