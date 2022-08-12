import PermMedia from '@mui/icons-material/PermMedia';

import './Share.scss';

export default function Share() {
  return (
    <div className='share'>
      <div className="shareWrapper">
      <div className='shareTop'>
        <img className='shareProfileImg' src='/assets/persons/profile-2.png' alt='img'/>
        <input placeholder='What in your mind Yakubu ?' className='shareInput' />
      </div>
      <hr className="shareHr" />
      <div className='shareBottom'>
        <div className="shareOptions">
          <div className="shareOption">
            <PermMedia className="shareIcon" />
            <span className='shareOptionText'>Photo or Video</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
