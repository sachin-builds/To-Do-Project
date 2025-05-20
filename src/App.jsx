import react,{ useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [inputItem,setInputItem] = useState("")
  const [list,setList]=useState([]);

  // useEffect(() => {
  //   const listArr=[]
  //   setList(() => listArr);
  // },[])

  function toggleDone(id,done){
    setList((prev) => prev.map((li) => (li.id === id) ? {id:li.id , title:li.title , done: !done} : li));

    // setList((prev) => {
    //   prev.map((item) =>{
    //     if(item.id === id){
    //       item.done = !done;
    //     }
    //   })
    // })
  }

  function addItem(){
    let obj={
      id: list.length > 0 ? list[list.length - 1].id + 1 : 1,
      title:inputItem,
      done:false
    }
    setList((prev) => [...prev,obj]);
    setInputItem(() => "");
  }

  function deleteItem(id) {
  setList((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <>
        <nav id="nav" className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <a className="navbar-brand" id="nav-text" href="#">To-Do Project</a>
            
          </div>
        </nav>

        <div id="box" className="card w-50 mx-auto mt-5">
          {/* <div className="card-header">TODO ITEMS</div> */}
      <div className="input-box">
          <div className="card-body">
            <div className='d-flex input-group'>
              <input type="text" onChange={(e) => setInputItem(() => e.target.value)} value={inputItem} className='form-control' placeholder='Add item to insert' />
              <button className='btn btn-success' id='bground' onClick={() => addItem()}>Add</button>
            </div>
            <hr />
            
            <div className="text">
              <p  className='fw-bold fs-3 mb-0'>TODO LIST</p>
              <hr />
              <ul className="list-group">
                {
                  list?.map((listitem,k) => {
                    if(listitem.done===false){
                      return(
                        <li key={k} id='bground' className="list-group-item d-flex justify-content-between align-items-center">
                          <p id="text" className='mb-0'>{listitem.id}. {listitem.title}</p>
                          <div className="d-flex gap-2">
                            <button onClick={()=> toggleDone(listitem.id , listitem.done)} className='btn btn-light btn-sm'>Mark done</button>
                            <button onClick={() => deleteItem(listitem.id)} className="btn btn-light btn-sm">Delete</button>
                          </div>
                        </li>
                      )
                    }
                  })
                }
              </ul>
            </div>
            <div className="text">
              <p  className='fw-bold fs-3 mb-0 mt-4'>ALREADY DONE</p>
              <hr />
              <ul className='list-group'>
                {
                  list?.map((listitem,k) => {
                    if(listitem.done === true){
                      return(
                        <li key={k} id='bground' className="list-group-item d-flex justify-content-between align-items-center">
                          <p id="text" className='mb-0'>{listitem.id}. {listitem.title}</p>
                          <div className="d-flex gap-2">
                          <button onClick={()=> toggleDone(listitem.id , listitem.done)} className='btn btn-light btn-sm'>Mark Undone</button>
                          <button onClick={() => deleteItem(listitem.id)} className="btn btn-light btn-sm">Delete</button>
                          </div>
                        </li>
                      )
                    }
                  })
                }
              </ul>
            </div>
          </div>
      </div>
      </div>
    </>
  )
}


export default App
