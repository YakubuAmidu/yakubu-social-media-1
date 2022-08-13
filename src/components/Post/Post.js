import { useState } from 'react';

import './Post.scss';

import MoreVert from '@mui/icons-material/MoreVert';
import { Users } from '../DummyData/DummyData';

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsliked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like -1 : like + 1);
    setIsliked(!isLiked)
  }

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
          <img className="likeIcon" src='/assets/like.png' alt='img' onClick={likeHandler}/>
          <img className="likeIcon" src='/assets/heart.png' alt='img' onClick={likeHandler}/>
          <span className='postLikeCounter'>{like} people liked it!</span>
        </div>
        <div className='postBottomRight'>
          <span className='postCommentText'>{post.comment} comments</span>
        </div>
       </div>
      </div>
    </div>
  )
}
