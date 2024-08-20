import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPhotoFilm, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import "./Create.css"

const Create = (props) => {
    const [createPosts, setCreatePosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [editType, setEditType] = useState("filters");
    const [brightness, setBrightness] = useState(0);

    useEffect(() => {
        if (currentPage == 1) {
            setCreatePosts([]);
        }
    }, [currentPage])

    function handleCloseModal() {
        props.setShowCreate(false);
    }

    function handleOnChange(p) {
        const file = p.target.files[0];
        if (file) {
            const render = new FileReader();
            render.onloadend = () => {
                setCreatePosts((prev) => [render.result, ...prev]);
                setCurrentPage(2);
            }
            render.readAsDataURL(file);
        }
    }

    function handleOnClick(type) {
        setEditType(type)
    }

    // Function to convert slider value (-100 to 100) to brightness percentage (50% to 150%)
    const calculateBrightness = (value) => {
        const brighntessVal = ((Number(value) + 100) * (150 - 50) / 200) + 50 + "%";
        return brighntessVal;
    };


    const handleBrightnessChange = (event) => {
        setBrightness(event.target.value);
    };
    return (
        <div className="create-container">
            <div className="main-create">
                <div className='create-navbar'>
                    <div className="create-icn">
                        <button type='button' onClick={handleCloseModal}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    </div>
                </div>
                <div className='create-body'>
                    <div className={currentPage == 1 ? 'create-body-front front-show' : 'create-body-front'}>
                        <div className='create-body-front-header'>
                            <h5 style={{ paddingTop: "10px" }}>Create a new post</h5>
                        </div>
                        <div className='front-str'>
                            <FontAwesomeIcon icon={faPhotoFilm} style={{ fontSize: "50px" }} />
                            <h4>Drag photo and video here</h4>
                            <div className="create-click-btn" >
                                <label htmlFor="posts-upload" className="create-lable">
                                    <input type="file" onChange={handleOnChange} id="posts-upload" accept="image/*" />
                                    <span className="crete-span">Select from computer</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className={currentPage == 2 ? 'create-body-second second-show' : 'create-body-second'}>
                        <div className='create-body-second-header'>
                            <button type='button' onClick={() => { setCurrentPage(currentPage - 1) }} style={{ border: "none", backgroundColor: "white", fontSize: "25px" }}><FontAwesomeIcon icon={faArrowLeft} /></button>
                            <h5 style={{ paddingTop: "10px" }}>Crop</h5>
                            <button type='button' style={{ border: "none", backgroundColor: "white", color: "blue" }}
                                onClick={() => { setCurrentPage(currentPage + 1) }}>Next</button>
                        </div>
                        <div className='second-str'>
                            {
                                createPosts.map((postImage, index) => (
                                    <div key={index} className="create-second-img">
                                        <img src={postImage} />
                                    </div>
                                )
                                )
                            }
                        </div>
                    </div>
                    <div className={currentPage == 3 ? 'create-body-third third-show ' : 'create-body-third'}>
                        <div className='create-third-header'>
                            <button type='button' onClick={() => { setCurrentPage(currentPage - 1) }} style={{ border: "none", backgroundColor: "white", fontSize: "25px" }}><FontAwesomeIcon icon={faArrowLeft} /></button>
                            <h5 style={{ paddingTop: "10px" }}>Edit</h5>
                            <button type='button' style={{ border: "none", backgroundColor: "white", color: "blue" }}
                                onClick={() => { setCurrentPage(currentPage + 1) }}>Next</button>
                        </div>
                        <div className='create-third-str'>
                            <div className='third-str-image'>
                                <img src={createPosts[0]} style={{ filter: `brightness(${calculateBrightness(brightness)})` }} />
                            </div>
                            <div className='third-str-edit'>
                                <div className='str-edit-header'>
                                    <button onClick={() => { handleOnClick("filters") }}>Filters</button>
                                    <button onClick={() => { handleOnClick("adjustment") }}>Adjustments</button>
                                </div>
                                <div className='str-edit-advanced'>
                                    {
                                        editType == "filters" ? (
                                            <div className='str-edit-filters'>
                                                hey i am filters
                                            </div>
                                        ) : editType == "adjustment" ? (
                                            <div className='str-edit-adjusments'>
                                                <div className="controls">
                                                    <label htmlFor="brightness">Brightness:</label>
                                                    <input
                                                        type="range"
                                                        id="brightness"
                                                        min="-100"
                                                        max="100"
                                                        value={brightness}
                                                        onChange={handleBrightnessChange}
                                                    />
                                                    <p>
                                                        {brightness}
                                                    </p>
                                                </div>
                                            </div>
                                        ) : ""
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={currentPage == 4 ? 'create-body-fourth fourth-show' : 'create-body-fourth'}>
                        <div className='create-fourth-header'>
                            <button type='button' onClick={() => { setCurrentPage(currentPage - 1) }} style={{ border: "none", backgroundColor: "white", fontSize: "25px" }}><FontAwesomeIcon icon={faArrowLeft} /></button>
                            <h5 style={{ paddingTop: "10px" }}>Create New Post</h5>
                            <button type='button' style={{ border: "none", backgroundColor: "white", color: "blue" }}>Share</button>
                        </div>
                        <div className='create-fourth-str'>
                            <div className='fourth-str-image'>
                                <img src={createPosts[0]} />
                            </div>
                            <div className='fourth-str-edit'>
                                <div className='fourth-str-edit-header'>
                                    cereate a post describe
                                </div>
                                <div className=' fourth-str-edit-advanced'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Create;