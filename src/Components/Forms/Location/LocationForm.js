import {useState } from "react";

const LocationForm =(props)=>{
    const [rates,setRates]=useState({
        from:'',
        to:'',
        distance:'',
        price:''
    });
    let name,value;
    const onChangeHandler=(event)=>{
        name=event.target.name;
        value=event.target.value;
        setRates({...rates,[name]:value})
    };
    

    const onSubmitHandler=async(event)=>{
        event.preventDefault();
        
        const res = await fetch(
            "https://sptransport-9abec-default-rtdb.asia-southeast1.firebasedatabase.app/RateChart.json",
            {
                method:"POST",
                body:JSON.stringify(rates),
                headers:{
                    "Content-Type":"application/json"
                }
            }
        );
        if(res.ok){
            setRates({
                from:'',
                to:'',
                distance:'',
                price:''
            });
            props.submitForm();
        }
    }

   
    return(
        <div>
            <h3>Location price Form</h3>
            <form onSubmit={onSubmitHandler}>
            <div>
                <label>From</label>
                <input name="from" type="text" value={rates.from} onChange={onChangeHandler} autoComplete="off"></input>
            </div>
            <div>
                <label>To</label>
                <input name="to" type="text" value={rates.to} onChange={onChangeHandler}></input>
            </div>
            <div>
                <label>Distance</label>
                <input name="distance" type="number" value={rates.distance} onChange={onChangeHandler}></input>
            </div>
            <div>
                <label>Price</label>
                <input name="price" type="number" value={rates.price} onChange={onChangeHandler}></input>
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

export default LocationForm;