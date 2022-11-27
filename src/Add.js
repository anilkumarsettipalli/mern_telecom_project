import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
export const Add = () => {
  
  const navigate = useNavigate();
    const [setItem]=useState([]);
   const[data,setData]=useState({
    id:"",
    name:'',
    email:"",
    address:"",
    number1:"",
    number2:"",
    relation:"",
   
 });
 
 const onSubmit=(e)=>{
  
    e.preventDefault();
  
    axios.post('http://localhost:5000/post',{
      id:data.id,
      name:data.name,
      email:data.email,
      address:data.address,
      number1:data.number1,
      number2:data.number2,
      relation:data.relation}).then(
      (res)=>setItem(res.data),
      )
     
      alert('Added to contact-list')
      
       navigate('/list')
    };
     const onChange=(e)=>{
        const newdata = {...data}
        newdata[e.target.name]=e.target.value
        setData(newdata);
       
     
    }; 
    
    
    
    return (
    <div className='total' >
      <div  className="navbar navbar-light bg-dark container-fluid navbar-expand-lg text-white" style={{padding:20}}>
              <div >
                <img src='https://cdn-icons-png.flaticon.com/512/1023/1023542.png' alt='loading' width='100px' height='60px' className='rounded'/>
              </div>&nbsp;
             <h3 className='font-weight-bold'style={{fontFamily:'cursive'}}>Telecom_App</h3>
             <div style={{paddingLeft:1050}}>
                <Link to='/list'>
                <button className='btn btn-primary font-weight-bold'style={{fontFamily:'cursive'}}><img src='https://as1.ftcdn.net/v2/jpg/01/16/20/40/1000_F_116204006_YkNHhl3hnJEpMXm8jaX478ACO0nveGC3.jpg' alt='loading' width='18px' height='18px'/> Contact-list </button>
                </Link>
             </div>
      </div>
        <div className='row'>
          <div className='col-1'></div>
          <div className='col-3 m-4 ' style={{paddingLeft:10,borderRadius:'2%'}}>
          <h3 className='font-weight-bold text-dark'style={{paddingLeft:20,paddingTop:10,fontFamily:'cursive'}}>Enter Details Of Person.</h3>
          <center>
          <form onSubmit={onSubmit} className='form-group' >
               <input type='text' className='form-control' name='id'onChange={onChange} 
               placeholder='Enter ID' value={data.id} style={{width:250}} required/><br/>
               
               
               <input type='text' className='form-control' name='name' onChange={onChange}
                placeholder='Enter Name' value={data.name} style={{width:250}}  title='Must contain alphabets only' required/>
                <br/>
              
               <input type='email' className='form-control' name='email' onChange={onChange}
                placeholder='Enter Mail' value={data.email} style={{width:250}} required/>
               <br/>
              
               <input type='text' className='form-control' name='address' onChange={onChange}
                placeholder='Enter Address' value={data.address} style={{width:250}} required/>
                <br/>
               
               <input type='number' className='form-control'name='number1' onChange={onChange}
                placeholder='Enter Number1' value={data.number1} style={{width:250}} size='10'  pattern='[0-9]{10}' required></input> 
                 <br/>
               
               <input type='number' className='form-control' name='number2'onChange={onChange} 
               placeholder='Enter Number2' value={data.number2} style={{width:250}} required />
               <br/>
               
               <select className="form-control" name="relation" placeholder='Select Relation' onChange={onChange}
                value={data.relation} style={{width:250}} required>
              
                <option>Select Relation</option>
                
                <option>Friend</option>
                <option>Family</option>
                <option>Colleague</option>
                </select><br/>
                
                <button className='btn btn-dark'style={{fontFamily:'cursive'}} >ADD-TO-CONTACTS</button><br/>
          </form>
          </center>
        </div>
        <div className='col-5 card-body' style={{paddingTop:50,paddingLeft:10}}> 
         <img src='https://images-cdn.newscred.com/Zz04NjA3ZjljMjQ0ODkxMWViOWRjYzU1OGJkNjI1ZjVkZA==' alt='loading' width='700' height='400' className='rounded-pill' style={{border:'5px solid black',borderRadius:'100%'}}/>
        </div>
        </div>
    </div>
  )
}
