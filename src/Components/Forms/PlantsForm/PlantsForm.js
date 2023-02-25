import {useState } from "react";

const PlantForm =(props)=>{
    const [plant,setPlant]=useState({
        name:'',
        address:'',
        GSTN:'',
        SAC:''
    });
    let name,value;
    const onChangeHandler=(event)=>{
        name=event.target.name;
        value=event.target.value;
        setPlant({...plant,[name]:value})
    };
    

    const onSubmitHandler=async(event)=>{
        event.preventDefault();
        
        const res = await fetch(
            "https://sptransport-9abec-default-rtdb.asia-southeast1.firebasedatabase.app/Plants.json",
            {
                method:"POST",
                body:JSON.stringify(plant),
                headers:{
                    "Content-Type":"application/json"
                }
            }
        );
        if(res.ok){
            setPlant({
                name:'',
        address:'',
        GSTN:'',
        SAC:''
            });
            props.submitForm();
        }
    }

   
    return(
        <div>
            <h3>Plants Details Form</h3>
            <form onSubmit={onSubmitHandler}>
            <div>
                <label>Name</label>
                <input name="name" value={plant.name} onChange={onChangeHandler}></input>
            </div>
            <div>
                <label>Address</label>
                <input name="address" value={plant.address} onChange={onChangeHandler}></input>
            </div>
            <div>
                <label>GSTN No.</label>
                <input name="GSTN" value={plant.GSTN} onChange={onChangeHandler}></input>
            </div>
            <div>
                <label>SAC Code</label>
                <input name="SAC" value={plant.SAC} onChange={onChangeHandler}></input>
            </div>
            <div>
                <button onClick={()=>props.closeForm()}>Close</button>
                <button type="submit">Submit</button>
            </div>
        </form>
        <hr/>
        </div>
        
    )
}

export default PlantForm;