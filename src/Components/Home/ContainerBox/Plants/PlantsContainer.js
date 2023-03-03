import { Fragment, useContext, useEffect, useState, useMemo } from "react";
import AuthContext from "../../../../Utils/AuthContext";
import PlantForm from "../../../Forms/PlantsForm/PlantsForm";
import TableNew from "../../../TableComponent/TableComponent";
import { set,ref, onValue } from "firebase/database";
import { db } from "../../../../Utils/firebase"; 

const PlantContainer = (props) => {
  const ctx =useContext(AuthContext);
  const [plantData,setPlantData]=useState([]);
  const fetchData=(collection)=>{
    const newData=[];
    onValue(ref(db,collection),snapshot=>{
      const data = snapshot.val();
      if(data !== null){
        const keys = Object.keys(data);
        Object.values(data).map((item,index)=>{
          newData.push({...item,id:keys[index]})
        })
      }
    });
    return newData;
  }
 
  const submitForm=()=>{
    props.fetchData();
    ctx.closeForm();
  }
  useEffect(()=>{
    setPlantData(fetchData("Plants"));
  },[])
  

    const columns = useMemo(
      () => [
        {
          accessorKey: 'name', //access nested data with dot notation
          header: 'Name',
        },
        {
          accessorKey: 'address',
          header: 'Address',
        },
        {
          accessorKey: 'GSTN', //normal accessorKey
          header: 'GSTN No',
        },
        {
          accessorKey: 'SAC',
          header: 'SAC Code',
        }
      ],
      [],
    );
    
  
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
            {/* <Table data={props.plants} columns={tableColumn}/> */}
            <TableNew data={plantData} columns={columns} coll="Plants"/>
        </div>
      </div>
}
    </div>

    </Fragment>    
   
  );
};
export default PlantContainer;
