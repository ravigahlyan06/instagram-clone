
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faCirclePlus, faCalendarDays, faBookmark, faClipboardUser, faCamera } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import demoProfile from "../../images/demo-profile.png";
import "./Profile.css";


const Profile = (props) => {

    const [image, setImage] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className='profile-container'>
            <div className='profile-wrapper'>
                <div className='profile-content'>
                    <div className="profile-info">
                        <div className="uploadFolder">
                            <div className="profile-upload">
                                <img id="profile-picture" className="profile-picture" src={!image ? demoProfile : image} alt="Profile Picture" />
                                <div className='file-uploader'>
                                    <label htmlFor="file-upload" className="upload-label">
                                        <input onChange={handleFileChange} type="file" id="file-upload" accept="image/*" />
                                        {
                                            !image && (
                                                <FontAwesomeIcon icon={faCamera} className="upload-icon" />
                                            )
                                        }
                                    </label>
                                </div>
                            </div>
                            <div className='profileSetting'>
                                <div className='firstBtn'>
                                    <h5>InstaClone</h5>
                                    <button className='profileBtn'>
                                        Edit Profile
                                    </button>
                                    <button className='profileBtn'>
                                        View archive
                                    </button>
                                    <button className='btnIcn'>
                                        <FontAwesomeIcon icon={faGear} />
                                    </button>
                                </div>
                                <div className='posts'>
                                    <p>0 Posts</p>
                                    <p>0 follower</p>
                                    <p>0 following</p>
                                </div>
                            </div>

                        </div>
                        <div className="highlight">
                            <div className='highlightMain'>
                                <div className='highlightFirst'>
                                    <FontAwesomeIcon className="icn" icon={faCirclePlus} />
                                    <h3>New</h3>
                                </div>
                                <div className='highlightFirst'>
                                    <FontAwesomeIcon className="icn" icon={faCirclePlus} />
                                    <h3>New</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="profile-highlights">
                        <div className='butonGroup'>
                            <Link className='profilebtn' to="/profile">
                                <FontAwesomeIcon icon={faCalendarDays} />
                                POSTS
                            </Link>
                            <Link className='profilebtn' to="/saved">
                                <FontAwesomeIcon icon={faBookmark} />
                                SAVED
                            </Link>
                            <Link className='profilebtn' to="/tagged">
                                <FontAwesomeIcon icon={faClipboardUser} />
                                TAGGED
                            </Link>
                        </div>
                    </div>
                    <div className='profile-posts'>
                        {props.childElement}
                    </div>
                    <footer className='profile-footer'>
                        <p>Meta</p>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Jobs</p>
                        <p>Help</p>
                        <p>API</p>
                        <p>Privacy</p>
                        <p>Terms</p>
                        <p>Locations</p>
                        <p>Instagram Lite</p>
                        <p>Threads</p>
                        <p>Contact uploading and non-users</p>
                        <p>Meta Verified</p>
                        <p>English (UK)</p>
                        <p>English (UK)</p>
                        <p>© 2024 Instagram from Meta</p>
                    </footer>
                </div>
            </div>
        </div>
    )
}
export default Profile;