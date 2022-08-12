import './Post.scss';

import MoreVert from '@mui/icons-material/MoreVert';

export default function Post() {
  return (
    <div className='post'>
      <div className='postWrapper'>
       <div className='postTop'>
        <div className='postTopLeft'>
          <img className="postProfileImg" src='/assets/persons/profile-12.png' alt='img' />
          <span className="postUserName">Yakubu amidu</span>
          <span className='postDate'>5 mins ago</span>
        </div>
        <div className='postTopRight'>
          <MoreVert />
        </div>
       </div>
       <div className="postCenter">
        <span className='postText'>Hey!, its my first post!...👍</span>
        <img className="postImg" src='/assets/persons/profile-4.png' alt='img'/>
       </div>
       <div className='postBottom'>
        <div className='postBottomLeft'>
          <img className="likeIcon" src='/assets/like.png' alt='img' />
          <img className="likeIcon" src='/assets/heart.png' alt='img' />
          <span className='postLikeCounter'>32 people liked it!</span>
        </div>
        <div className='postBottomRight'>
          <span className='postCommentText'>9 comments</span>
        </div>
       </div>
      </div>
    </div>
  )
}
