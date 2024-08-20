import React from 'react'
import "./Message.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faChevronDown, faPenToSquare, faCircleUser, faL} from '@fortawesome/free-solid-svg-icons';
import {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Message(props) {

    useEffect(() => {
        props.setCollapseNavbar(true);

        return () => {
            props.setCollapseNavbar(false)
        }
    }, [])

   function  handleShowMsg(){
    // console.log('setShowMsgProfile:', setShowMsgProfile);
  props.setShowMsgProfile(true);
   }

    return (
        <div className='message-container'>
            <div className='message-wraper' >
                <div className='main-message'>
                    <div className='logoes'>
                        <button>Instaclone <FontAwesomeIcon icon={faChevronDown} /></button>
                        <button type='button' onClick={handleShowMsg}><FontAwesomeIcon icon={faPenToSquare} /></button>
                    </div>
                    <div className='type-notes'>
                        <FontAwesomeIcon icon={faCircleUser} className='type-notes-icn' />
                        <p>Your notes</p>
                    </div>
                    <div className='orignal-message'>
                        <div className='message-request'>
                            <h5 >Message</h5>
                            <Link to="/direct/requests" style={{textDecoration:"none", color:"grey"}}>Requests</Link>
                        </div>
                        <div className='message-chat'>
                            <FontAwesomeIcon icon={faCircleUser} className='message-chat-icn' />
                            <h5>User name</h5>
                        </div>
                    </div>
                </div>

                <div className='message-show'>
                    <div className='blank-message'>
                        <FontAwesomeIcon icon={faComments} className='blank-massage-icn' />
                        <h4>Your Messages</h4>
                        <p>Send a message to start a chat</p>
                        <button type='button'  onClick={handleShowMsg}>Send Message</button>
                    </div>
                </div>
                <div className='thoughts-write'>

                </div>
            </div>
        </div>
    )
}

export default Message;