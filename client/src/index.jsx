import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import AllCards from './components/AllCards.jsx'
import Navbar from './components/Navbar.jsx'
import Create from './components/Create.jsx'
import Update from './components/Update.jsx'

const App = () => {
 const [data,setData]=useState([])
 const [updated, setUpdated] = useState(true)
 const [view,setView] = useState('allCards')
 const [toUpdate,setToUpdate] =useState(0)
 const [indexToUpdate,setIndexToUpdate] = useState(0)

 const fetch=()=>{
  axios.get('/bhb/cars/getAll')
  .then((res)=>{
    console.log(res.data);
    setData(res.data)
  })
  .catch((err)=>{
    throw err
  })
 }

 useEffect(()=>{
  fetch()
 },[updated])

 const handleCreate =  (obj) => {
    axios.post('/bhb/cars/add',obj)
    .then(()=>{
      fetch()
    })
    .catch((err)=>{
      throw err
    })
    changeView('allCards')
};

const handleDelete = async (id) => {
  console.log(id);
  try {
    const response = await axios.delete(`/bhb/cars/${id}`);
    console.log("deleted");
    setUpdated(!updated)
  } catch (err) { 
    throw err 
  }
}

const getToUpdate = (id,index)=>{
  setToUpdate(id)
  setIndexToUpdate(index)
  changeView("update")
}

const handleUpdate =  (id, obj) => {
  axios.patch(`/bhb/cars/${id}`,obj)
  .then(()=>{
    fetch()
  })
  .catch((err)=>{
    throw err
  })
  changeView("allCards")
}

const search = (item) =>{
  console.log("item",item)
  let serched= data.filter((e)=>{
    console.log("hhhh",e)
  
   return  e.brand.toLowerCase() === item.toLowerCase()
})
console.log(serched);
  setData(serched)
}
 

 


const changeView = (newView) =>{
  setView(newView)
}

const renderView = () =>{
  if(view === 'allCards'){
    return (
    <div>
      <Navbar changeView={changeView} search= {search}/>
      <AllCards handleDelete={handleDelete} handleUpdate={handleUpdate} cars={data}  getToUpdate={getToUpdate} />
    </div>
    )
  }
  else if (view === 'create'){
    return <Create handleCreate={handleCreate} />
  }
  else if (view === 'update'){
    return <Update car={data[indexToUpdate]} handleUpdate={handleUpdate} />
  }
}


  return (
    <div>
      {renderView()}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
