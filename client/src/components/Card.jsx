import React from 'react'

const Card = (props) => {
    return (
        <div>
            <div className="card">
                <div className="card-image">
                    <img src={props.car.image} alt="" />
                </div>
                <div className="category"> {props.car.brand} </div>
                <div className="price"> price : <span className="model">{props.car.price}</span> dt</div>
                <div className="author"> model : <span className="model">{props.car.modele}</span> </div>
                <div className="author"> Runned : <span className="name">{props.car.kilometers}</span> km</div>
                <div className='bouton'>
                    <button style={{borderRadius:"5%" ,border:"none",backgroundColor:"red",color:"white"}} onClick={((e) => { props.handleDelete(props.car.id) })}>Delete</button>
                    <button style={{borderRadius:"5%" ,border:"none",backgroundColor:"black",color:"white"}} onClick={(e)=>{ props.getToUpdate(props.car.id,props.index)}} >Updaate</button>
                </div>
            </div>
        </div>

    )
}

export default Card