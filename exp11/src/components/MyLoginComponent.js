const MyLoginComponent = () => {

    let uname='';
   
     const handleChange = event => {
       uname = event.target.value;
     };
   
     const handleClick = event => {    
       window.localStorage.setItem('name',JSON.stringify(uname))  
       window.localStorage.setItem('flag','true');  
       window.location.reload();
     };
    
       return (
         <div> 
       
   
         <div className="modal fade" id="loginModal" role="dialog" aria-labelledby="myModalLabel"
         aria-hidden="true">
         <div className="modal-dialog" role="document">
           <div className="modal-content">
             <div className="modal-header text-center">
               <h4 className="modal-title w-100 font-weight-bold">Login</h4>
               <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
               </button>
             </div>
             <div className="modal-body mx-1">
               <div className="md-form mb-1">
                 <i className="fas fa-envelope prefix grey-text"></i>
       <input type="email" placeholder="Enter your email" onChange={handleChange} /> <br/>
                 <label data-error="wrong" data-success="right" htmlFor="defaultForm-email">Your email</label>
               </div>
       
               <div className="md-form mb-1">
                     <i className="fas fa-lock prefix grey-text"></i>
       <input type="password" id="defaultForm-pass" className="form-control validate"/>
                     <label data-error="wrong" data-success="right" htmlFor="defaultForm-pass">Your password</label>
                   </div>
       
             </div>
             <div className="modal-footer d-flex justify-content-center">
               <button onClick={handleClick} className="btn btn-default" data-dismiss="modal" >Login</button>
             </div>
           </div>
         </div>
       </div>
       </div>       
               );
      
           };
   
           export default MyLoginComponent;
   