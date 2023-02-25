import { Fragment, useContext, useEffect, useState } from "react";
import AuthContext from "../../../../Utils/AuthContext";
import LocationForm from "../../../Forms/Location/LocationForm";
import Table from "../../../TableComponent/TableComponent";

const RateChartContainer = () => {
  const ctx =useContext(AuthContext);
  const [rateChartData,setRateChartData]=useState([]);
  const fetchData = async () => {
    const response = await fetch(
      "https://sptransport-9abec-default-rtdb.asia-southeast1.firebasedatabase.app/RateChart.json"
    );
    const json = await response.json();
    const values = Object.values(json);
    const keys = Object.keys(json);
    const newData = values.map((value,index) => {return{...value,id:keys[index]}})
    setRateChartData(newData);
  }
  const submitForm=()=>{
    fetchData();
    ctx.closeForm();
  }
  useEffect(()=>{
      console.log("UseEffect run");
      fetchData()
  },[])
  const tableColumn=[
    {"title":"From","field":"from"},
    {"title":"To","field":"to"},
    {"title":"Distance","field":"distance"},
    {"title":"Price","field":"price"}
  ];
  
  
  return (
    <Fragment>
       <div className="content-box">
       {ctx.showForm ? <LocationForm closeForm={ctx.closeForm} submitForm={submitForm}/> : 
      <div className="content-wraper">
        <div className="content-header">
          <h4>Rate Chart</h4>
          <button onClick={ctx.openForm}>Create New Entry</button>
        </div>
        <div>
          <label>Filer</label>
          <input></input>
          <button>Search</button>
        </div>
        <div>
            <Table data={rateChartData} columns={tableColumn}/>
        </div>
      </div>
}
    </div>

    </Fragment>    
   
  );
};
export default RateChartContainer;
