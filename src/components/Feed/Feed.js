import './Feed.scss';

import Share from '../Share/Share';
import Post from '../Post/Post';
import { Posts } from '../DummyData/DummyData';

export default function Feed() {
  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <Share />
        {
          Posts.map((p) => (
             <Post post={p} key={p.id}/>
          ))
        }
      </div>
    </div>
  )
}
