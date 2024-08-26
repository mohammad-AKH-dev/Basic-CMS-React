import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './Features.css'

export default function Features() {
  return (
    <div className="Features">
      <div className="Feature-item">
        <span className="Feature-title">
            Revanue
        </span>
        <div className="Feature-container">
            <span className="Feature-money">$2,415</span>
            <span className="Feature-rate">
                -11.4 <ArrowDownwardIcon className='Feature-icon negative'/>
            </span>
        </div>
        <span className='Feature-sub'>Compared to last month</span>
      </div>

      <div className="Feature-item">
        <span className="Feature-title">
            Sales
        </span>
        <div className="Feature-container">
            <span className="Feature-money">$4,415</span>
            <span className="Feature-rate">
                -1.4 <ArrowDownwardIcon className='Feature-icon negative'/>
            </span>
        </div>
        <span className='Feature-sub'>Compared to last month</span>
      </div>

      <div className="Feature-item">
        <span className="Feature-title">
            Cost
        </span>
        <div className="Feature-container">
            <span className="Feature-money">$2,225</span>
            <span className="Feature-rate">
                +2.4 <ArrowUpwardIcon className='Feature-icon'/>
            </span>
        </div>
        <span className='Feature-sub'>Compared to last month</span>
      </div>
    </div>
  )
}
