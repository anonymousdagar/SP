import { set,ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { uid } from "uid";
import { db } from "../../../Utils/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import Billing from "./Billing/Billing";
import "./ContainerBox.css";
import DashboardContainer from "./DashboardContainer/DashboardContainer";
import PlantContainer from "./Plants/PlantsContainer";
import RateChartContainer from "./RateChartContainer/RateChartContainer";
const ContainerBox = (props) => {
  const [rcdata,setRcData]=useState([]);
  const [plantdata,setPlantData]=useState([]);
  let content; 
  // const fetchData = async (docLib) => {
  //   const response = await fetch(
  //     `https://sptransport-9abec-default-rtdb.asia-southeast1.firebasedatabase.app/${docLib}.json`,
  //   );
  //   console.log(response);
  //   const json = await response.json();
  //   const values = Object.values(json);
  //   const keys = Object.keys(json);
  //   const newData = values.map((value,index) => {return{...value,id:keys[index]}})
  //   console.log(docLib,newData)
  //   return newData;
  // }

  //write to db
  // const [todos,setTodos]= useState('');

  const writeToDatabase = (todos) =>{
    const uuid = uid();
    set(ref(db,`/${uuid}`),{
      todos,
      uuid,
    });
  }

  //Get data from Database
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
  
  // const getRCData=(rc)=>{
  //   setRcData(rc);
  // }
  const getPlantData=()=>{
    setPlantData(fetchData("Plants"));
  }
  if(props.content==="Dashboard"){
    content=<DashboardContainer/>
  }else if(props.content==="RateChart"){
    content=<RateChartContainer  rc={rcdata}/>
  }else if(props.content==="Plant"){
    content=<PlantContainer plants={plantdata} fetchData={getPlantData}/>
  }else if(props.content==="Bill"){
    content=<Billing rc={rcdata} plants={plantdata}/>
  }
  
  return <div className="content">{content}</div>;
};
export default ContainerBox;
