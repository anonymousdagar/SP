import { Fragment, useContext, useEffect, useState, useMemo } from "react";
import AuthContext from "../../../../Utils/AuthContext";
import LocationForm from "../../../Forms/Location/LocationForm";
import TableNew from "../../../TableComponent/TableComponent";
import { set,ref, onValue } from "firebase/database";
import { db } from "../../../../Utils/firebase"; 


const RateChartContainer = () => {
  // console.log("ratechartprops :",props);
  const [rc,setRc]=useState([]);
  const ctx =useContext(AuthContext);
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
  useEffect(()=>{
    setRc(fetchData("RateChart"));
    console.log("useeffetc runiing");
  },[])

  const columns = useMemo(
    () => [
      {
        accessorKey: 'from', //access nested data with dot notation
        header: 'From',
      },
      {
        accessorKey: 'to',
        header: 'To',
      },
      {
        accessorKey: 'distance', //normal accessorKey
        header: 'Distance',
      },
      {
        accessorKey: 'price',
        header: 'Amount',
      }
    ],
    [],
  );
  
  
  return (
    <Fragment>
       <div className="content-box">
       {/* {ctx.showForm ? <LocationForm closeForm={ctx.closeForm} submitForm={submitForm}/> :  */}
      <div className="content-wraper">
        <div className="content-header">
            <TableNew columns={columns} data={rc} coll="RateChart"/>
       </div>
      </div>
    </div>

    </Fragment>    
   
  );
};
export default RateChartContainer;
