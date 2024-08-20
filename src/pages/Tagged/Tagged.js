
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserTag} from '@fortawesome/free-solid-svg-icons';
import "./Tagged.css";

const Tagged = () =>{
    return(
        <div className="tagged-container">
<div className="tagged-main">
<FontAwesomeIcon  className="tagged-icn"icon= {faUserTag}/>
<h1 style={{fontWeight:"bold"}}>Photos of you </h1>
<h6>When the people Tag you. They will appear here</h6>
</div>
        </div>
    )
}
export default Tagged;