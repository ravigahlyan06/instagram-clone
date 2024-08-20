import React from 'react'
import "./Reel.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCommentDots, faBookmark, faPaperPlane, faMusic, faVolumeHigh, faCircleUser, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';

function Reel() {
    return (
        <div className='reel-container'>
            <div className="reel-main">
                <div className='reel-box'>
                    <div className='reel-show'>
                        <iframe width="315" height="560"
                            src="https://www.youtube.com/embed/K2kNjXzWL7I"
                            title="Honey Singh vs Badshah : The Ultimate Showdown 😱🤯 | Honey Singh Interview #honeysingh #shorts"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                        </iframe>
                        <div className='music-icn'>
                        <FontAwesomeIcon icon= {faVolumeHigh}/>
                        <FontAwesomeIcon icon= {faVolumeXmark}/>
                        </div>
                        <div className='user-name'>
                        <FontAwesomeIcon icon= {faCircleUser} />
                        <p>user name</p>
                        <button>Follow</button>
                        </div>
                        <div className='user-tag'>
                            <p># your tag</p>
                        </div>
                        <div className='show-music'>
                        <FontAwesomeIcon icon= {faMusic}/>
                        </div>

                    </div>
                    <div className='reel-activity'>
                        <div className='reel-activity-heart activity-icn'>

                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <div className='reel-activity-comment activity-icn'>

                            <FontAwesomeIcon icon={faCommentDots} />
                        </div>
                        <div className='reel-activity-forward activity-icn'>

                            <FontAwesomeIcon icon={faPaperPlane} />
                        </div>
                        <div className='reel-activity-saved activity-icn'>

                            <FontAwesomeIcon icon={faBookmark} />
                        </div>
                        <div className='reel-activity-music activity-icn'>

                            <FontAwesomeIcon icon={faMusic} />
                        </div>
                    </div>
                </div>
                <div className='reel-box'>
                    <div className='reel-show'>
                        <iframe width="315" height="560"
                            src="https://www.youtube.com/embed/K2kNjXzWL7I"
                            title="Honey Singh vs Badshah : The Ultimate Showdown 😱🤯 | Honey Singh Interview #honeysingh #shorts"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                        </iframe>

                    </div>
                    <div className='reel-activity'>
                        <div className='reel-activity-heart activity-icn'>

                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <div className='reel-activity-comment activity-icn'>

                            <FontAwesomeIcon icon={faCommentDots} />
                        </div>
                        <div className='reel-activity-forward activity-icn'>

                            <FontAwesomeIcon icon={faPaperPlane} />
                        </div>
                        <div className='reel-activity-saved activity-icn'>

                            <FontAwesomeIcon icon={faBookmark} />
                        </div>
                        <div className='reel-activity-music activity-icn'>

                            <FontAwesomeIcon icon={faMusic} />
                        </div>
                    </div>
                </div>
                <div className='reel-box'>
                    <div className='reel-show'>
                        <iframe width="315" height="560"
                            src="https://www.youtube.com/embed/K2kNjXzWL7I"
                            title="Honey Singh vs Badshah : The Ultimate Showdown 😱🤯 | Honey Singh Interview #honeysingh #shorts"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                        </iframe>

                    </div>
                    <div className='reel-activity'>
                        <div className='reel-activity-heart activity-icn'>

                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <div className='reel-activity-comment activity-icn'>

                            <FontAwesomeIcon icon={faCommentDots} />
                        </div>
                        <div className='reel-activity-forward activity-icn'>

                            <FontAwesomeIcon icon={faPaperPlane} />
                        </div>
                        <div className='reel-activity-saved activity-icn'>

                            <FontAwesomeIcon icon={faBookmark} />
                        </div>
                        <div className='reel-activity-music activity-icn'>

                            <FontAwesomeIcon icon={faMusic} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reel