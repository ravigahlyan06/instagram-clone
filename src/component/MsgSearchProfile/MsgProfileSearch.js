import React, { useRef, useEffect, useState } from 'react'
import "./MsgSearchProfile.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

function MsgProfileSearch(props) {
    const containerRef = useRef(null);

    useEffect(() => {

        if (containerRef) {
            function handleClickInSide(event) {
                event.preventDefault();
                if (containerRef.current == event.target) {
                    if (props.showMsgProfile) {
                        props.setShowMsgProfile(false)
                    }
                }
            }
            document.addEventListener("mousedown", handleClickInSide);

            return () => {
                document.removeEventListener("mousedown", handleClickInSide);
            }
        }
    }, [containerRef])

    const handleCloseBtn = () => {
        props.setShowMsgProfile(false)
    }


    return (
        <div className='msg-profile-container' ref={containerRef}>
            <div className='msg-prfile-main'>
                <div className='msg-profile-header'>
                    <h4>New message</h4>
                    <FontAwesomeIcon icon={faX} onClick={handleCloseBtn} style={{ cursor: "pointer" }} />
                </div>
                <div className="input-group mb-3 msg-profile-input ">
                    <h3>To :</h3> <input type="text" class="form-control" placeholder="Search" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                </div>
                <div className='msg-profile-data-found'>
                    <p>No data found.</p>
                </div>
                <div className='msg-profile-btn'>
                    <button>Chat</button>
                </div>
            </div>
        </div>
    )
}

export default MsgProfileSearch;