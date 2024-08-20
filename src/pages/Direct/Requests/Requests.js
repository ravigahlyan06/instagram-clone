import './Requests.css';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faChevronRight, faEyeSlash, faArrowsDownToPeople } from '@fortawesome/free-solid-svg-icons';

export default function Requests(props) {

    useEffect(() => {
        props.setCollapseNavbar(true);

        return () => {
            props.setCollapseNavbar(false)
        }
    }, [])

    return (
        <div className='request-container'>
            <div className='message-request'>
                <div className='message-request-main'>
                    <div className='request-main-header'>
                        <Link to="/direct/inbox">
                            <FontAwesomeIcon icon={faArrowLeft} style={{fontSize: "25px", color:"black", padding:"10px"}} />
                        </Link>
                        <h5>Message requests</h5>
                    </div>
                    <Link to="/direct/requests/hidden" className='request-link'>
                        <div className='request-main-main-msg'>
                            <FontAwesomeIcon icon={faEyeSlash} style={{ fontSize: "20px" }} />
                            <h6>Hidden Requests</h6>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                    </Link>
                </div>
                <div className='message-request-show'>
                    <FontAwesomeIcon icon={faArrowsDownToPeople} className='request-show-icn' />
                    <h5>Message Requests</h5>
                    <p>
                        These message are form people you've restricted or don't follow. They won't <br></br> know you viewed their request until you allow them to message you.
                    </p>


                </div>
            </div>
        </div>
    )
}
