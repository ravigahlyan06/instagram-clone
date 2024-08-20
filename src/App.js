import './App.css';
import { useState } from 'react';
import Login from './pages/Login/Login';
import Navbar from './component/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile/Profile';
import Posts from './pages/Posts/Posts';
import Saved from './pages/Saved/Saved';
import Tagged from './pages/Tagged/Tagged';
import Creater from './component/Create/Creater';
import Message from './pages/Direct/Message/Message';
import Requests from './pages/Direct/Requests/Requests';
import Hidden from './pages/Direct/Hidden/Hidden';
import MsgProfileSearch from './component/MsgSearchProfile/MsgProfileSearch';
import Suggust from './pages/Suggust/Suggust';
import Reel from './pages/Reel/Reel';


function App() {
  const [showCreate, setShowCreate] = useState(false);
  const [collapseNavbar, setCollapseNavbar] = useState(false);
  const [showMsgProfile, setShowMsgProfile] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
 


  return (
    <Router>
      <div className='app-container'>
       {showLogin &&(
         <Login showLogin={showLogin} setShowLogin={setShowLogin}/>
       )}
        {showCreate && (
          <Creater showCreate={showCreate} setShowCreate={setShowCreate}/>
        )}
        {showMsgProfile && (
          <MsgProfileSearch showMsgProfile={showMsgProfile} setShowMsgProfile={setShowMsgProfile} />
        )}
    
      
        <div className={!collapseNavbar && !showNotification ? 'left-panel' : "left-panel shrink-left-panel"}></div>
        <div className='app-navbar'>
          <Navbar showCreate={showCreate} setShowCreate={setShowCreate}
           collapseNavbar={collapseNavbar} setCollapseNavbar={setCollapseNavbar} 
           showNotification={showNotification} setShowNotification={setShowNotification}
            showMsgProfile={showMsgProfile} setShowMsgProfile={setShowMsgProfile}
            showLogin={showLogin} setShowLogin={setShowLogin}
            />
        </div>

        <div className="app-pages">
          <Routes>
            <Route path="/reel" element={<Reel/>}/>
            <Route path='/suggest' element={<Suggust showNotification={showNotification} setShowNotification={setShowNotification} />}/>
            <Route path="/direct/inbox" element={<Message collapseNavbar={collapseNavbar} setCollapseNavbar={setCollapseNavbar} showMsgProfile={showMsgProfile} setShowMsgProfile={setShowMsgProfile} />} />
            <Route path="/direct/requests" element={<Requests collapseNavbar={collapseNavbar} setCollapseNavbar={setCollapseNavbar} />} />
            <Route path="/direct/requests/hidden" element={<Hidden collapseNavbar={collapseNavbar} setCollapseNavbar={setCollapseNavbar} />} />

            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile childElement={<Posts />} />} />
            <Route path="/saved" element={<Profile childElement={<Saved />} />} />
            <Route path="/tagged" element={<Profile childElement={<Tagged />} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
