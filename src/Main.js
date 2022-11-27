import React,{useEffect,useState}from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
export const Main = () => {
  const [value,setValue]=useState({})
  const[name,setName]=useState('');
   const [search,setSearch]=useState('')
   const [item,setItem]=useState([]);
     useEffect(()=>{
      
      axios.get(`http://localhost:5000/get/${search}`)
      
      .then(res=>{
        setValue(res.data);
        setName('')
        
     })},[search]);
     

     const fetch=()=>{
      
      setSearch(name)
     
     
      }
      

  const getData=()=>{
    axios.get('http://localhost:5000/get').then(res=>setItem(res.data))
  }
  const img="https://avatarfiles.alphacoders.com/122/122906.jpg"
 
  const deleteHandler = id =>{
    axios.delete(`http://localhost:5000/del/${id}`).then(()=>{getData()})
     };
     const setToLocalStorage =(id,name,email,address,number1,number2,relation) =>{
      localStorage.setItem("id",id);
      localStorage.setItem("name",name);
      localStorage.setItem("email",email);
      localStorage.setItem("address",address);
      localStorage.setItem("number1",number1);
      localStorage.setItem("number2",number2);
      localStorage.setItem("relation",relation);
     };
     useEffect(()=>{
      getData();
    },[]);
   
 return (
    <div>
      
      <div className="navbar navbar-light bg-dark container-fluid navbar-expand-lg text-white">
      <div >
                <img src='https://cdn-icons-png.flaticon.com/512/1023/1023542.png' alt='loading' width='100px' height='60px' className='rounded'/>
              </div>&nbsp;
       <h4 className='font-weight-bold ml-4 '> <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5P2zxZdrUU7GAAxS1YQodeqDEsWmb8EeMcQ&usqp=CAU' alt='loading' width='30px' height='30px'/> </h4><span className=' mb-5 start-220 translate-middle badge rounded-pill bg-danger'>{item.length}</span>
       <div style={{paddingLeft:1150}} >
        <Link to="/">
        <button className='btn btn-primary font-weight-bold '><img src='https://cdn-icons-png.flaticon.com/512/0/340.png' alt='loading' width='25px' height='20px'/>  Previous</button>
        </Link>
       </div>
      </div>
     <div className='jumbotron bg-secondary'>
          <center>
           <input className='form-control font-weight-bold' style={{width:300}} type='text'placeholder=' Get contact_details by searching'
              value={name} onChange={e=>setName(e.target.value)}/><br/>
              <button type="button" class="btn btn-dark mr-5 font-weight-bold" data-toggle="modal" data-target="#exampleModal" onClick={fetch}>
                search
              </button>
       </center>
           <div className='row' style={{padding:'50px',paddingLeft:'150px'}}>
        {
        item.map(contact=>
            <Tilt>
           <div key={contact._id} className='col-sl-3 m-1 card border  border-info m-5' data-tilt data-tilt-scale='1.1' style={{fontFamily:'cursive'}}>
            <img className='img-thumbnail border border-dark mr-2 mt-1 ml-2' src={img} alt='loading' width='285px' />
            <center className='card-text bg-dark text-light m-2 font-weight-bold rounded'>
            <small className='m-2'>Contact_ID: {contact.id}</small><br/>
            <small className='m-2'>Name: {contact.name}</small><br/>
            <small className='m-2'>Email: {contact.email}</small><br/>
            <small className='m-2'>Address: {contact.address}</small><br/>
            <small className='m-2'>Number_1: {contact.number1}</small><br/>
            <small className='m-2'>Number_2: {contact.number2}</small><br/>
            <small className='m-2'>Relation: {contact.relation}</small><br/>
            <Link to ='/edit'><button className='btn btn-primary m-2 font-weight-bold' onClick={()=>setToLocalStorage(contact.id,contact.name,contact.email,contact.address,contact.number1,contact.number2,contact.relation)}>
              <small className='font-weight-bold'>EDIT</small>
              </button></Link>
            <button className='btn btn-danger m-2 font-weight-bold' onClick={()=>deleteHandler(contact.id)}><small className='font-weight-bold'>DELETE</small></button>
          </center>
          </div> 
          </Tilt>
           )}
       </div>
       </div>
       <center>
  <div class="modal fade"  id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div className='modal-header'>
           <h6 className='font-weight-bold' style={{paddingLeft:'150px',fontFamily:'monospace'}}>Your_Required_Data</h6>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            ×
          </button>
          </div>
        <div id='error'>
        <div class="modal-body"  >
               <center>
                <div className='font-weight-bold  text-light bg-dark'  style={{width:250,borderRadius:'5%',padding:10}}>
       
          <h6 className='bg-danger text-light'style={{borderRadius:'5%',padding:5}}>contact_Id:{value.id}</h6>
          <h6>Name:{value.name}</h6>
          <h6>Email:{value.email}</h6>
          <h6>Address:{value.address}</h6>
          <h6>Number_1:{value.number1}</h6>
          <h6>Number_2:{value.number2}</h6>
          <h6>Relation:{value.relation}</h6>
        </div>
        </center>
        </div>
        <div >
          <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
         
            <button className='btn btn-danger m-2 font-weight-bold'data-dismiss="modal" onClick={()=>deleteHandler(value.id)}><small className='font-weight-bold'>DELETE</small></button>
            
        </div>
       </div>
      </div>
    </div>
  </div>
  </center>
  
      </div>
      
  )
}
