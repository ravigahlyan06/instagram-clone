import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIcons} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import "./Posts.css";


const Posts = (props) => {
    const [posts, setPosts] = useState([]);


    const handleOnChange = (e) => {

        const file = e.target.files[0];
        if (file) {
            const render = new FileReader();
            render.onloadend = () => {
                setPosts((prev) => [render.result, ...prev]);
            }
            render.readAsDataURL(file);
        }

    };

    return (
        <div className='posts-container'>
            {
                posts.length < 1 ? (
                    <div className='posts-main'>

                        <button className="cemera-icn">
                            <FontAwesomeIcon icon={faIcons} />
                        </button>
                        <h1>Share Photos</h1>
                        <h6>when you share photos, they will appear on your profile</h6>
                        <div className="profile-posts-upload">
                            <label htmlFor="post-upload" className="upload-label">
                                <input type="file" onChange={handleOnChange} id="post-upload" accept="image/*" />
                                <span className="upload-icon" style={{ fontWeight: "bold" }}> Upload your first photo</span>
                            </label>
                        </div>
                    </div>
                ) : (

                    <div className='posts-update'>
                        {
                            posts.map((item) => (
                                <div className="post-view-box">
                                    <img src={item} />
                                </div>
                            )
                            )
                        }
                        <div className="profile-posts-upload" style={{ backgroundColor: "red" }}>
                            <label htmlFor="posts-upload" className="upload-label">
                                <input type="file" onChange={handleOnChange} id="posts-upload" accept="image/*" />
                                <span className="upload-icon" style={{ color:"blue" }}> Upload your first photo</span>
                            </label>
                        </div>
                    </div>
                )

            }
        </div>
    )
}
export default Posts;