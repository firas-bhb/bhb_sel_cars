import React, { useState } from 'react'

const Create = (props) => {
    console.log("this is props", props);
    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [runned, setRunned] = useState('')

    return (
        <div style={{position:"absolute", top:"50%",left:"50%",transform:"translate(-50%,-50%)" }} className='create_from'>
            <form className="form" style={{width:"50vw"}}>
                <p className="title">Create </p>


                <label>
                    <input className="input" type="text" placeholder="" required="" onChange={(e) => {
                        setBrand(e.target.value)
                    }} />
                    <span>Brand</span>
                </label>
                <label>
                    <input className="input" type="text" placeholder="" required="" onChange={(e) => {
                        setModel(e.target.value)
                    }} />
                    <span>Model</span>
                </label>
                <label>
                    <input className="input" type="text" placeholder="" required="" onChange={(e) => {
                        setPrice(e.target.value)
                    }} />
                    <span>Price</span>
                </label>

                <label>
                    <input className="input" type="text" placeholder="" required="" onChange={(e) => {
                        setRunned(e.target.value)
                    }} />
                    <span>Runned</span>
                </label>
                <label>
                    <input className="input" type="text" placeholder="" required="" onChange={(e) => {
                        setImage(e.target.value)
                    }} />
                    <span>Image</span>
                </label>
                <button className="submit" onClick={(e) => {
                    e.preventDefault()
                    props.handleCreate({ brand: brand, modele: model, price: Number(price), kilometers: Number(runned), image: image })
                }}>Create</button>
            </form>
        </div>
    )
}

export default Create