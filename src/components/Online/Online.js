import './Online.scss';

export default function Online({ user }) {
  return (
    <li className="rightbarFriend">
    <div className='rightbarProfileImgContainer'>
     <img className="rightbarProfileImg" src={user.profilePicture} alt="img" />
     <span className='rightbarOnline'></span>
    </div>
    <span className='rightbarUserName'>{user.username}</span>
  </li>
  )
}
