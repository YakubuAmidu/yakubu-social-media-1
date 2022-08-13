import './Rightbar.scss';

import { Users } from '../DummyData/DummyData';
import Online from '../Online/Online';

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
         {
          Users.map((u) => (
            <Online key={u.id} user={u} />
          ))
         }
        </ul>
      </div>
    </div>
  )
}
