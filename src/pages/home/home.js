import TopBar from '../../components/TopBar/TopBar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Feed from '../../components/Feed/Feed';
import Rightbar from '../../components/RightBar/Rightbar';

import './home.css';

export default function home() {
  return (
    <>
     <TopBar />
     <div className='homeContainer'>
     <Sidebar />
     <Feed />
     <Rightbar />
     </div>
    </>
  )
}
