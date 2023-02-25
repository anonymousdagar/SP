import { Fragment, useContext, useEffect, useState } from "react";
import AuthContext from "../../../../Utils/AuthContext";
import PlantForm from "../../../Forms/PlantsForm/PlantsForm";
import Table from "../../../TableComponent/TableComponent";

const PlantContainer = () => {
  const ctx =useContext(AuthContext);
  const [plantData,setPlantData]=useState([]);
  const fetchData = async () => {
    const response = await fetch(
      "https://sptransport-9abec-default-rtdb.asia-southeast1.firebasedatabase.app/Plants.json"
    );
    const json = await response.json();
    const values = Object.values(json);
    const keys = Object.keys(json);
    const newData = values.map((value,index) => {return{...value,id:keys[index]}})
    setPlantData(newData);
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
    {"title":"Name","field":"name"},
    {"title":"Address","field":"address"},
    {"title":"GSTN No","field":"GSTN"},
    {"title":"SAC Code","field":"SAC"}
    ];
  
  return (
    <Fragment>
       <div className="content-box">
       {ctx.showForm ? <PlantForm closeForm={ctx.closeForm} submitForm={submitForm}/> : 
      <div className="content-wraper">
        <div className="content-header">
          <h4>Plants</h4>
          <button onClick={ctx.openForm}>Create New Entry</button>
        </div>
        <div>
          <label>Filter</label>
          <input></input>
          <button>Search</button>
        </div>
        <div>
            <Table data={plantData} columns={tableColumn}/>
        </div>
      </div>
}
    </div>

    </Fragment>    
   
  );
};
export default PlantContainer;
