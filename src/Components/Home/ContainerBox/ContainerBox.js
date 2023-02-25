import "./ContainerBox.css";
import DashboardContainer from "./DashboardContainer/DashboardContainer";
import PlantContainer from "./Plants/PlantsContainer";
import RateChartContainer from "./RateChartContainer/RateChartContainer";
const ContainerBox = (props) => {
  let content; 
  if(props.content==="Dashboard"){
    content=<DashboardContainer/>
  }else if(props.content==="RateChart"){
    content=<RateChartContainer/>
  }else if(props.content==="Plant"){
    content=<PlantContainer/>
  }
  
  return <div className="content">{content}</div>;
};
export default ContainerBox;
