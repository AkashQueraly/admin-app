import Chart from "../../components/chart/Chart"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import "./Home.css"
import {userData} from "../../dummyData"
import WidgetSm from "../../components/WidgetSm/WidgetSm"
import WidgetLg from "../../components/WidgetLg/WidgetLg"

function Home() {
  return (
    <div className="home">
        <FeaturedInfo />
        <Chart data={userData} title='User Analytics' grid dataKey='Active User'/>
        <div className="homeWidgets">
          <WidgetSm />
          <WidgetLg />
        </div>
     </div>
  )
}

export default Home