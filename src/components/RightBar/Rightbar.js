import './Rightbar.scss';

// import { Users } from '../DummyData/DummyData';
// import Online from '../Online/Online';

export default function Rightbar({ profile }) {
  
  // const HomeRightbar = () => {
  //   return (
  //     <>
  //      <div className='birthdayContainer'>
  //         <img className='birthdayImg' src='/assets/gift.png' alt='img' />
  //         <span className='birthdayText'>
  //           <b>Polar foster </b> and <b>3 other friends </b>have birthday today!
  //         </span>
  //       </div>
  //       <img className='rightbarAd' src='/assets/ad.png' alt='img' />
  //       <h4 className='rightbarTitle'>Online friends!</h4>
  //       <ul className='rightbarFriendList'>
  //        {
  //         Users.map((u) => (
  //           <Online key={u.id} user={u} />
  //         ))
  //        }
  //       </ul>
  //     </>
  //   )
  // };

  const ProfileRightbar = () => {
    return (
      <>
      <h4 className="rightbarTitle">User information</h4>
      <div className='rightbarInfo'>
        <div className='rightbarInfoItem'>
          <span className="righbarInfoKey">City:</span>
          <span className="rightbarInfoValue">New York</span>
        </div>

        <div className='rightbarInfoItem'>
          <span className="righbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Ghana</span>
        </div>

        <div className='rightbarInfoItem'>
          <span className="righbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Married</span>
        </div>
      </div>

      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src='assets/persons/profile-1.png' className='rightbarFollowingImg' alt='img'/>
          <span className='rightbarFollowingName'>Yakubu Amidu</span>
        </div>

        <div className="rightbarFollowing">
          <img src='assets/persons/profile-2.png' className='rightbarFollowingImg' alt='img'/>
          <span className='rightbarFollowingName'>Yakubu Amidu</span>
        </div>

        <div className="rightbarFollowing">
          <img src='assets/persons/profile-3.png' className='rightbarFollowingImg' alt='img'/>
          <span className='rightbarFollowingName'>Yakubu Amidu</span>
        </div>

        <div className="rightbarFollowing">
          <img src='assets/persons/profile-4.png' className='rightbarFollowingImg' alt='img'/>
          <span className='rightbarFollowingName'>Yakubu Amidu</span>
        </div>

        <div className="rightbarFollowing">
          <img src='assets/persons/profile-5.png' className='rightbarFollowingImg' alt='img'/>
          <span className='rightbarFollowingName'>Yakubu Amidu</span>
        </div>

        <div className="rightbarFollowing">
          <img src='assets/persons/profile-6.png' className='rightbarFollowingImg' alt='img'/>
          <span className='rightbarFollowingName'>Yakubu Amidu</span>
        </div>
      </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
       <ProfileRightbar />
      </div>
    </div>
  )
}
