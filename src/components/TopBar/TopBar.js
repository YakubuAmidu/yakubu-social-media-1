import Search from '@mui/icons-material/Search';
import Person from '@mui/icons-material/Person';
import Chat from '@mui/icons-material/Chat';
import Notifications from '@mui/icons-material/Notifications';

import './TopBar.scss';

export default function TopBar() {
  return (
    <div className='topbarContainer'>
       <div className='topbarLeft'>
         <span className='logo'>Yakubu social</span>
       </div>

       <div className='topbarCenter'>
         <div className='searchbar'>
          <Search className="searchIcon"/>
          <input placeholder='Search for friends, posts, videos' className='searchInput' />
         </div>
       </div>

       <div className='topbarRight'>
         <div className='topbarLinks'>
          <span className='topbarLink'>Home page</span>
          <span className='topbarLink'>Timeline</span>
         </div>
         <div className='topbarIcons'>
          <div className='topbarIconItem'>
            <Person />
            <span className='topbarIconBadge'>1</span>
          </div>

          <div className='topbarIconItem'>
            <Chat />
            <span className='topbarIconBadge'>2</span>
          </div>

          <div className='topbarIconItem'>
            <Notifications />
            <span className='topbarIconBadge'>1</span>
          </div>
         </div>

         <img src="/assets/persons/profile-1.png" alt="img" className='topbarImg' />
       </div>
    </div>
  )
}
