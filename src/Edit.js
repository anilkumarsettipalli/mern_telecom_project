import React,{useEffect, useState}from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import Tilt from 'react-parallax-tilt';
export const Edit = () => {
    const navigate = useNavigate();
    const[id,setId]=useState(0);
    const[name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [address,setAddress]=useState('');
    const[number1,setNumber1]=useState('');
    const [number2,setNumber2]=useState('');
    const [relation,setRelation]=useState('')
         
         useEffect(()=>{
          setId(localStorage.getItem('id'));
          setName(localStorage.getItem('name'));
          setEmail(localStorage.getItem('email'));
          setAddress(localStorage.getItem('address'));
          setNumber1(localStorage.getItem('number1'));
          setNumber2(localStorage.getItem('number2'));
          setRelation(localStorage.getItem('relation'));  
         },[]);
     const editHandler=(event)=>{
    event.preventDefault()
        axios.put(`http://localhost:5000/update/${id}`,{
          
          name:name,
          email:email,
          address:address,
          number1:number1,
          number2:number2,
          relation:relation , 
      
      })
      .then(()=>{navigate('/list')})
    };
       
  return (
    <div className='row jumbotron bg-dark'>
     <Tilt> <div className='  text-light' style={{fontFamily:'cursive',padding:'20px',fontSize:'large',paddingTop:'180px'}}><h4> Allows<br/> you<br/> to<br/> edit<br/> details<br/></h4><img src='https://www.shutterstock.com/image-vector/2-side-arrow-icon-isolated-600w-211159354.jpg' alt='loading'  width='100px' height='100px'className='rounded-pill'/> </div></Tilt>
        <div className='col-4 ml-5' style={{fontFamily:'cursive'}}>
          <h3 className='font-weight-bold text-light'style={{padding:20}}>UPDATE THE DETAILS OF PERSON.</h3>
          <form  className='form-group'style={{padding:20}}  >
               <input type='text' className='form-control' name='id'onChange={(e)=>setId(e.target.value)} placeholder='Enter ID' value={id} style={{width:250}} required/><br/>
               <input type='text' className='form-control' name='name' onChange={(e)=>setName(e.target.value)} placeholder='Enter Name' value={name} style={{width:250}} required/><br/>
               <input type='email' className='form-control' name='email' onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Mail' value={email} style={{width:250}} required/><br/>
               <input type='text' className='form-control' name='address' onChange={(e)=>setAddress(e.target.value)} placeholder='Enter Address' value={address} style={{width:250}} required/><br/>
               <input type='number' className='form-control'name='number1' onChange={(e)=>setNumber1(e.target.value)} placeholder='Enter Number1' value={number1} style={{width:250}} required/><br/>
               <input type='number' className='form-control' name='number2'onChange={(e)=>setNumber2(e.target.value)} placeholder='Enter Number2' value={number2} style={{width:250}} required/><br/>
               <select className="form-control" name="relation" placeholder='Select Relation' onChange={(e)=>setRelation(e.target.value)} value={relation} style={{width:250}} required>
                <option>Select Relation</option>
                <option>Select Relation</option>
                <option>Friend</option>
                <option>Family</option>
                <option>Colleague</option>
                </select><br/>
                <button className='btn btn-primary font-weight-bold' onClick={editHandler}>UPDATE</button>&nbsp;
               <Link to='/list'> <button className='btn btn-danger font-weight-bold'>Cancel</button></Link>
                <br/>
          </form>
        </div>
        <div className='col-5 'style={{paddingTop:100}}>
          <img src='https://i.pinimg.com/originals/f6/34/01/f634017e8277d18a163603575ca753e3.gif' alt='loading' width='800px' height='500px' className='rounded-pill'/>
        </div>
    </div>
  )
}
