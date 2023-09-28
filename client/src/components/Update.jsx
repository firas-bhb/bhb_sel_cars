import React, { useState } from 'react'

const Update = (props) => {
    const [brand,setBrand] = useState(props.car.brand)
    const [model,setModel] = useState(props.car.modele)
    const [price,setPrice] = useState(props.car.price)
    const [image,setImage] = useState(props.car.image)
    const [runned,setRunned] = useState(props.car.kilometers)
    
  return (
    <div style={{position:"absolute", top:"50%",left:"50%",transform:"translate(-50%,-50%)" }}>
        <form className="form" style={{width:"50vw"}} >
    <p className="title">Update Car</p>
        
            
    <label>
        <input className="input" type="text" defaultValue={brand} placeholder="" required="" onChange={(e)=>{
            setBrand(e.target.value)
        }} />
        <span>Brand</span>
    </label> 
    <label>
        <input className="input" type="text" placeholder="" defaultValue={model} required="" onChange={(e)=>{
            setModel(e.target.value)
        }} />
        <span>Model</span>
    </label> 
    <label>
        <input className="input" type="text" placeholder="" required="" defaultValue={price} onChange={(e)=>{
            setPrice(e.target.value)
        }} />
        <span>Price</span>
    </label> 
        
    <label>
        <input className="input" type="text" placeholder="" required="" defaultValue={runned} onChange={(e)=>{
            setRunned(e.target.value)
        }} />
        <span>Runned</span>
    </label>
    <label>
        <input className="input" type="text" placeholder="" defaultValue={image} required="" onChange={(e)=>{
            setImage(e.target.value)
        }} />
        <span>image</span>
    </label>
    <button className="submit" onClick={(e)=>{
        e.preventDefault()
        props.handleUpdate(props.car.id,{brand:brand,modele:model,price:Number(price),kilometers:Number(runned),image:image})
    }} >Update</button>
    
</form></div>
  )
}

export default Update