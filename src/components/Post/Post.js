import './Post.scss';

import MoreVert from '@mui/icons-material/MoreVert';
import { Users } from '../DummyData/DummyData';

export default function Post({ post }) {
  const user = Users.filter((u) => u.id === 1);

  console.log(user[0].userName);

  return (
    <div className='post'>
      <div className='postWrapper'>
       <div className='postTop'>
        <div className='postTopLeft'>
          <img className="postProfileImg" src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt='img' />
          <span className="postUserName">
            {
              Users.filter((u) => u.id === post.userId)[0].username
            }
          </span>
          <span className='postDate'>{post.date}</span>
        </div>
        <div className='postTopRight'>
          <MoreVert />
        </div>
       </div>
       <div className="postCenter">
        <span className='postText'>{post?.desc}</span>
        <img className="postImg" src={post.photo} alt='img'/>
       </div>
       <div className='postBottom'>
        <div className='postBottomLeft'>
          <img className="likeIcon" src='/assets/like.png' alt='img' />
          <img className="likeIcon" src='/assets/heart.png' alt='img' />
          <span className='postLikeCounter'>{post.like} people liked it!</span>
        </div>
        <div className='postBottomRight'>
          <span className='postCommentText'>{post.comment} comments</span>
        </div>
       </div>
      </div>
    </div>
  )
}
