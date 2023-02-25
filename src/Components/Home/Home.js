import { useEffect, useState } from "react";
import LocationForm from "../Forms/Location/LocationForm";
import Table from "../TableComponent/TableComponent";

const Home = (props)=>{
    const [rateData,setRateData]=useState(null);
    const logOutHandler=()=>{
        localStorage.removeItem('isLoggedIn');
        props.logedIn(false);
    }
 
    useEffect(() => {
        console.log("UseEffect run");
        const fetchData = async () => {
          const response = await fetch(
            "https://sptransport-9abec-default-rtdb.asia-southeast1.firebasedatabase.app/RateChart.json"
          );
          const json = await response.json();
          const values = Object.values(json);
          const keys = Object.keys(json);
          const newData = values.map((value,index) => {return{...value,id:keys[index]}})
          setRateData(newData)
        };
        fetchData();
      }, []);
    
       
 
    return(
        <div>
            <div>
                <h1>Sp Tranportation</h1>
                <button onClick={logOutHandler}>Log Out</button>
                <h5>we welcome you to our website we travel where u desire.</h5>
            </div>
            <div>
                <ul>
                    <li>
                        <a href="/">Service Locations</a>
                    </li>
                    <li>
                        <a href="/">Clients</a>
                    </li>
                    <li>
                        <a href="/">Vehicles</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3>thanks for availing our services</h3>
            </div>
            <LocationForm/>
            <Table data={rateData} onEdit={()=>{}} onDelete={()=>{}}/>

        </div>
    )
}
export default Home;