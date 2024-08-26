import './SideBar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle'
import TimelineIcon from '@mui/icons-material/Timeline'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import PermIndentityIcon from '@mui/icons-material/PermIdentity'
import StorefrontIcon from '@mui/icons-material/Storefront'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import BarChartIcon from '@mui/icons-material/BarChart'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ErrorIcon from '@mui/icons-material/Error';
import { Link } from 'react-router-dom'

export default function SideBar() {
  return (
    <div className="sidebar">
        <div className="sidebar-wrapper">
          <div className="sidebar-menu">
            <h3 className='sidebar-title'>Dashboard</h3>
            <ul className='sidebar-list'>
              <Link to={'/'} className="sidebar-listitem active">
                <LineStyleIcon className='sidebar-icon'/>
                Home
              </Link>
              <Link className="sidebar-listitem">
                <TimelineIcon className='sidebar-icon'/>
                Analytics
              </Link>
              <Link className="sidebar-listitem">
                <TrendingUpIcon className='sidebar-icon'/>
                Sales
              </Link>
            </ul>
          </div>

          <div className="Quick-menu">
            <h3 className='sidebar-title'>Quick Menu</h3>
            <ul className='sidebar-list'>
              <Link to={'/users'} className="sidebar-listitem active">
                <PermIndentityIcon className='sidebar-icon'/>
                Users
              </Link>
              <Link to={'/newUsers'} className="sidebar-listitem">
                <PersonAddIcon className='sidebar-icon'/>
                New User
              </Link>
              <Link to={'/products'} className="sidebar-listitem">
                <StorefrontIcon className='sidebar-icon'/>
                Products
              </Link>
              <Link className="sidebar-listitem">
                <AttachMoneyIcon className='sidebar-icon'/>
                Transactions
              </Link>
              <Link className="sidebar-listitem">
                <BarChartIcon className='sidebar-icon'/>
                Reports
              </Link>
            </ul>
          </div>

          <div className="Notifications">
            <h3 className='sidebar-title'>Notifications</h3>
            <ul className='sidebar-list'>
              <Link className="sidebar-listitem active">
                <MailOutlineIcon className='sidebar-icon'/>
                Mail
              </Link>
              <Link className="sidebar-listitem">
                <DynamicFeedIcon className='sidebar-icon'/>
                Feedback
              </Link>
              <Link className="sidebar-listitem">
                <ChatBubbleOutlineIcon className='sidebar-icon'/>
                Messages
              </Link>
            </ul>
          </div>

          <div className="Staff">
            <h3 className='sidebar-title'>Staff</h3>
            <ul className='sidebar-list'>
              <Link  className="sidebar-listitem active">
                <WorkOutlineOutlinedIcon className='sidebar-icon'/>
                Manage
              </Link>
              <Link className="sidebar-listitem">
                <TimelineIcon className='sidebar-icon'/>
                Analytics
              </Link>
              <Link className="sidebar-listitem">
                <ErrorIcon className='sidebar-icon'/>
                Reports
              </Link>
            </ul>
          </div>
        </div>
    </div>
  )
}
