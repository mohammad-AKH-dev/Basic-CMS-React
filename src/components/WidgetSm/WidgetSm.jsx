import VisibilityIcon from '@mui/icons-material/Visibility';
import {newMembers} from './../../datas'
import './WidgetSm.css'

export default function WidgetSm() {
  return (
    <div className='widgetSm'>
      <span className="widgetSm-title">
        New Join Members
      </span>
      <ul className="widgetSm-list">
        {newMembers.length ? newMembers.map(member => (
           <li key={member.id} className="widgetSm-list__item">
           <img src={member.img} className='widgetSm-img' />
           <div className="widgetSm-user">
               <span className="widgetSm-username">{member.username}</span>
               <span className="widgetSm-userPosition">{member.title}</span>
           </div>
           <button className='widgetSm-button'>
               <VisibilityIcon className='widgetSm-icon'/>
           </button>
       </li>
        )) : ''}
      </ul>
    </div>
  )
}
