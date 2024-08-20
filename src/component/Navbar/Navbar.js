
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlass, faCompass, faFilm, faMessage, faHeart, faSquarePlus, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from 'react';
import MoreHome from '../MoreHome/MoreHome';
import { Link, useLocation } from 'react-router-dom';
import Search from '../Search/Search';
import Notification from '../Notification/Notification';
import "./Navbar.css";
import "../../App.css";


const Navbar = (props) => {
    const [showMore, setShowMore] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const moreButtonRef = useRef(null)
    const createMoreRef = useRef(null)
    const notificationButtonRef = useRef(null)

    const currentLocation = useLocation()


    useEffect(() => {
        if (showSearch) {
            setShowSearch(false)
        }
        if (showMore) {
            setShowMore(false)
        }
        if (props.showNotification) {
            props.setShowNotification(false)
        }
        if (props.showCreate) {
            props.setShowCreate(false)
        }
        if (props.collapseNavbar) {
            props.setCollapseNavbar(false)
        }
        if (props.showMsgProfile) {
            props.setShowMsgProfile(false)
        }
    }, [currentLocation])



    function handleOnClick() {
        // console.log(showMore)
        setShowMore(!showMore);
    }

    function handleCreateClick() {
        props.setShowCreate(!props.showCreate);
    }
    function handleOnClickSearch() {
        setShowSearch(!showSearch)
        props.setShowNotification(false)
    }

    function handleOnClickNotification() {
        props.setShowNotification(!props.showNotification);
        setShowSearch(false);
    }

    return (
        <div className={props.showNotification || showSearch || props.collapseNavbar ? "navbar-container hide-border" : "navbar-container"}>
            <div className="navbar-wrapper">
                <div className='navbar-box'>
                    <Link className='btn instagtram-social-icon' to="/">
                        {props.showNotification || showSearch || props.collapseNavbar ? <FontAwesomeIcon icon={faHouse} /> : "Instagram"}
                    </Link>
                    <div className={props.showNotification || showSearch || props.collapseNavbar ? "navbar-links show-icon-titles" : "navbar-links"} >
                        <Link className='btn' to="/">
                            <FontAwesomeIcon icon={faHouse} style={{ padding: "5px" }} />
                            <span>Home</span></Link>
                        <button className='btn' type="button" onClick={handleOnClickSearch}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ padding: "5px" }} />
                            <span>Search</span></button>
                        <Link className='btn' to="/explore">
                            <FontAwesomeIcon icon={faCompass} style={{ padding: "5px" }} />
                            <span>Explore</span></Link>
                        <Link className='btn' to="/reel">
                            <FontAwesomeIcon icon={faFilm} style={{ padding: "5px" }} />
                            <span>Reel</span></Link>
                        <Link className='btn' to="/direct/inbox" >
                            <FontAwesomeIcon icon={faMessage} style={{ padding: "5px" }} />
                            <span>Message</span></Link>
                        <button className='btn' type='button' ref={notificationButtonRef} onClick={handleOnClickNotification}>
                            <FontAwesomeIcon icon={faHeart} style={{ padding: "5px" }} />
                            <span>Notification</span></button>
                        <button className='btn' ref={createMoreRef} type='button' onClick={handleCreateClick}>
                            <FontAwesomeIcon icon={faSquarePlus} style={{ padding: "5px" }} />
                            <span>Create</span>
                        </button>
                        <Link className='btn' to="/profile">
                            <FontAwesomeIcon icon={faUser} style={{ padding: "5px" }} />
                            <span>Profile</span></Link>
                        <div className='more-btn' >
                            <button className='btn' ref={moreButtonRef} type="button" onClick={handleOnClick} >
                                <FontAwesomeIcon icon={faBars} style={{ padding: "5px" }} />
                                <span>More</span></button>
                            {showMore && (
                                <MoreHome showMore={showMore} setShowMore={setShowMore} moreButtonRef={moreButtonRef} 
                                {...props}
                                />
                            )}
                        </div>
                    </div>
                </div>
                <div className={!showSearch ? "search-wrapper" : "search-wrapper show-search-wrapper"}>
                    <Search showSearch={showSearch} setShowSearch={setShowSearch} {...props} />
                </div>
                <div className={!props.showNotification ? "notification-search-wrapper" : "notification-search-wrapper notification-show-search-wrapper"}>
                    <Notification notificationButtonRef={notificationButtonRef} showNotification={props.showNotification} setShowNotification={props.setShowNotification} />
                </div>
            </div>
        </div>
    )
}
export default Navbar;