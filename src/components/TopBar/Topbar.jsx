import { Link } from 'react-router-dom'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import './TopBar.css'

export default function TopBar() {
  return (
    <div className='topbar'>
      <div className="topbar-wrapper">
        <div className="topLeft">
            <Link to={'/'} style={{color:'darkblue'}}>Dashboard </Link>
        </div>

        <div className='topRight'>
          <div className="topBarIconContainer d-flex">
            <NotificationsIcon cursor={'pointer'}/>
            <span className='topBarIconBadge'>2</span>
          </div>

          <div className="topBarIconContainer d-flex">
            <LanguageIcon cursor={'pointer'}/>
            <span className='topBarIconBadge'>2</span>
          </div>

          <div className="topBarIconContainer">
            <SettingsIcon cursor={'pointer'}/>
            
          </div>
          <img src='images/profile.jfif' className='topBarImg'/>
        </div>
      </div>
    </div>
  )
}
