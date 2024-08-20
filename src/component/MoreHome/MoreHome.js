import { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faChartLine, faBookmark, faSun, faCircleExclamation, faAt } from '@fortawesome/free-solid-svg-icons';
import "./MoreHome.css";
import "../Navbar/Navbar.css";
import "../../App.css";

const MoreHome = (props) => {
    const moreComponentRef = useRef(null);

    useEffect(() => {
        if (moreComponentRef) {
            function handleClickOutSide(event) {
               event.preventDefault();
                if(moreComponentRef.current && !moreComponentRef.current.contains(event.target) && props.moreButtonRef.current && 
                !props.moreButtonRef.current.contains(event.target)) {
                    if(props.showMore) {
                        props.setShowMore(false)
                    }
                }
            }
            document.addEventListener("mousedown", handleClickOutSide);

            return () => {
                document.removeEventListener("mousedown", handleClickOutSide);
            }
        }
    }, [])

    function handleShowLogin(){
        // console.log("hey i am ravi");
        props.setShowLogin(!props.showLogin)
    }

    return (
        <div className="more-nav-container" ref={moreComponentRef}>
            <div className="more-nav-links">
                <button className="btn">
                    <FontAwesomeIcon icon={faGear} />
                    Setting</button>
                <button className="btn">
                    <FontAwesomeIcon icon={faChartLine} />
                    Your activity</button>
                <button className="btn">
                    <FontAwesomeIcon icon={faBookmark} />
                    Saved</button>
                <button className="btn">
                    <FontAwesomeIcon icon={faSun} />
                    Your appearance</button>
                <button className="btn">
                    <FontAwesomeIcon icon={faCircleExclamation} />
                    Report a Problem</button>
                <button className="btn">
                    <FontAwesomeIcon icon={faAt} />
                    Theards</button>
                <button className="btn" type='button' onClick={handleShowLogin}>Switch Account</button>
                <button className="btn" type='button'>Log out</button>
            </div>
        </div>
    )
}
export default MoreHome;