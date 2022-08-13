import './Rightbar.scss';

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        <div className='birthdayContainer'>
          <img className='birthdayImg' src='/assets/gift.png' alt='img' />
          <span className='birthdayText'>
            <b>Polar foster </b> and <b>3 other friends </b>have birthday today!
          </span>
        </div>
        <img className='rightbarAd' src='/assets/ad.png' alt='img' />
        <h4 className='rightbarTitle'>Online friends!</h4>
        <ul className='rightbarFriendList'>
          <li className="rightbarFriend">
            <div className='rightbarProfileImgContainer'>
             <img className="rightbarProfileImg" src="/assets/persons/profile-7.png" alt="img" />
             <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUserName'>John Carter!</span>
          </li>

          <li className="rightbarFriend">
            <div className='rightbarProfileImgContainer'>
             <img className="rightbarProfileImg" src="/assets/persons/profile-7.png" alt="img" />
             <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUserName'>John Carter!</span>
          </li>

          <li className="rightbarFriend">
            <div className='rightbarProfileImgContainer'>
             <img className="rightbarProfileImg" src="/assets/persons/profile-7.png" alt="img" />
             <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUserName'>John Carter!</span>
          </li>

          <li className="rightbarFriend">
            <div className='rightbarProfileImgContainer'>
             <img className="rightbarProfileImg" src="/assets/persons/profile-7.png" alt="img" />
             <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUserName'>John Carter!</span>
          </li>

          <li className="rightbarFriend">
            <div className='rightbarProfileImgContainer'>
             <img className="rightbarProfileImg" src="/assets/persons/profile-7.png" alt="img" />
             <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUserName'>John Carter!</span>
          </li>

          <li className="rightbarFriend">
            <div className='rightbarProfileImgContainer'>
             <img className="rightbarProfileImg" src="/assets/persons/profile-7.png" alt="img" />
             <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUserName'>John Carter!</span>
          </li>

          <li className="rightbarFriend">
            <div className='rightbarProfileImgContainer'>
             <img className="rightbarProfileImg" src="/assets/persons/profile-7.png" alt="img" />
             <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUserName'>John Carter!</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
