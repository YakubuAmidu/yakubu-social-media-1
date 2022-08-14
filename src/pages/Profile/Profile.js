import TopBar from '../../components/TopBar/TopBar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Feed from '../../components/Feed/Feed';
import Rightbar from '../../components/RightBar/Rightbar';

import './Profile.scss';

export default function profile() {
  return (
    <>
    <TopBar />
    <div className='profile'>
    <Sidebar />
    <div className="profileRight">
      <div className='profileRightTop'>
        <div class="profileCover">
        <img className="profileCoverImg" src="assets/post/vacation-1.png" alt="img" />
        <img className="profileUserImg" src="assets/persons/profile-13.png" alt="img" />
        </div>
        <div className="profileInfo">
          <h4 className='profileInfoName'>Yakubu amidu</h4>
          <span className="profileInfoDesc">Hello my friends!</span>
          </div>
        </div>
      <div className="profileRightBottom">
        <Feed />
        <Rightbar profile/>
       </div>
    </div>
    </div>
   </>
  )
}
