import React, { useState } from 'react'
import Card from './Card.jsx'

const AllCards = (props) => {
  const [search,setSearch]=useState("")

  return (
    <>
      <form className="d-flex justify-content-center" role="search">
              <input className="form-control me-2 inputFROM" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{setSearch(e.target.value)}} />
              <button className="btn btn-outline-success" type="submit" onClick={((e)=>{
                e.preventDefault()
                // props.search(item)
              })
              }
                >Search</button>
            </form>
    <div className='container'>
        {props.cars
      .filter((e)=>(
        e.brand.toLowerCase().includes(search.toLowerCase())
      ))
      
      .map((e,i)=>{
            return <Card key={i} car={e} handleDelete={props.handleDelete} handleupdate={props.handleupdate} getToUpdate={props.getToUpdate} index={i} />
        })}
        {}
    </div>
    </>
  )
}

export default AllCards