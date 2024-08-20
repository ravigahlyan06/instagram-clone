import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import "./Saved.css";


const Saved = () =>{
    const [image, setImage] = useState(null);


    const handleOnData = (e)=>{

        const file = e.target.file[0];
        if(file){
            const render = FileReader();
            render.onloadend = ()=>{
                setImage(render.result);
                }
                render.readAsDataURL(file);
            }
        
    };
    return(
        <div className="saved-container">
<div className="saved-main">
    <div className="saved-phera">
<h6>Only you can see you've saved</h6>
<div className='saved-btn'>
<label htmlFor="file-upload" className="upload-label">
                        <input type="file"  id="file-upload" accept="image/*" />
                        <span className="upload-icon"  onChange = {handleOnData} style={{fontWeight:"bold", color:"blue"}}>  + New Collection</span>
                    </label>
   
    </div>
    </div>
    <div className="saved-describe">
    <FontAwesomeIcon className='saved-icn' icon= {faBookmark} />
    <h1 style={{fontWeight:"bold"}}>Save</h1>
    <h6>Save photos and videos that you want to see again. No <br/>one is notified, and only you can see what you've saved.</h6>
    </div>
</div>
        </div>
    )
}
export default Saved;