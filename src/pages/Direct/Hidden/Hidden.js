import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import "./Hidden.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function Hidden(props){

    useEffect(() => {
        props.setCollapseNavbar(true);

        return () => {
            props.setCollapseNavbar(false)
        }
    }, [])

    return (
        <div className='hidden-container'>
        <div className='hidden-all-requests'>
            <div className='hidden-requests-header'>
                <Link to="/direct/requests">
                <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: "25px", color:"black" }} />
                </Link>
                <h5>Hidden request</h5>
            </div>
            <div className='hidden-requests-show'>
                <FontAwesomeIcon icon={faEyeSlash} style={{ fontSize: "40px", border: "1px solid black", borderRadius: "50%", padding: "20px" }} />
                <h5>Hidden requests</h5>
                <p>These are message requests that may be offensive or unwanter.</p>
            </div>
        </div>
        </div>
    )
}
