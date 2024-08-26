import Features from "../../components/Features/Features"
import './Home.css'
import {xAxisData} from "../../datas"
import Chart from "../../components/Chart/Chart"
import WidgetSm from "../../components/WidgetSm/WidgetSm"
import WidgetLg from "../../components/WidgetLg/WidgetLg"

export default function Home() {
  return (
 <div className="home">
  <Features/>
  <Chart title={'Month Sale'} data={xAxisData} datakey={'sale'} grid />
  <div className="home-widgets">
    <WidgetSm/>
    <WidgetLg/>
  </div>
 </div>
  )
}
