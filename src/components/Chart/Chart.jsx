import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid ,Tooltip} from 'recharts';
import PropTypes from 'prop-types'
import './Chart.css'

export default function Chart(props) {
    console.log(props)

    let {title,data,datakey,grid} = props
  return (
    <div className="chart">
        <h3 className='chart-title'>{title}</h3>
      <ResponsiveContainer width="100%" height='100%' aspect={4}>
      <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="3.3" />}
          <XAxis dataKey='name' stroke='#5550db'/>
          <YAxis />
          <Tooltip/>
          <Line type="monotone" dataKey={datakey} stroke="#5550db"/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}


Chart.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array,
    datakey: PropTypes.string,
    grid: PropTypes.string
}