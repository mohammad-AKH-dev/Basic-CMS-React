import PropTypes from 'prop-types'
import './WidgetLg.css'
import { transActions } from '../../datas'
export default function WidgetLg() {

   const Button = ({type}) => {
    return <button className={`WidgetLg-button${type}`}>{type}</button>
   }
   

  return (
    <div className='WidgetLg'>
      <h3 className='WidgetLg-title'>Latest TransActions</h3>
      <table className="WidgetLg-table">
        <tr className='WidgetLg-tr'>
            <th className='WidgetLg-th'>Customer</th>
            <th className='WidgetLg-th'>Date</th>
            <th className='WidgetLg-th'>Amount</th>
            <th className='WidgetLg-th'>Status</th>
        </tr>
        {transActions.map(action => (
            <tr key={action.id} className='WidgetLg-tr'>
            <td className='WidgetLg-user'>
                <img src={action.img} className='WidgetLg-img' />
                <span className="WidgetLg-name">{action.customer}</span>
            </td>
            <td className='WidgetLg-date'>
                {action.date}
            </td>
            <td className='WidgetLg-amount'>
                {action.amount}
            </td>
            <td className='WidgetLg-status'>
                <Button type={action.status}/>
            </td>
        </tr>
        ))}
      </table>
    </div>
  )
}


WidgetLg.propTypes = {
    type: PropTypes.string
}