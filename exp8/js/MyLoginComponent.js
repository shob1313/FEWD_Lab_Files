const MyLoginComponent = () => {
    return (
            
        <div className="modal fade" id="loginModal"  role="dialog" aria-labelledby="myModalLabel"
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
                <input type="email" id="defaultForm-email" className="form-control validate"/>
                <label data-error="wrong" data-success="right" for="defaultForm-email">Your email</label>
              </div>
      
              <div className="md-form mb-1">
                <i className="fas fa-lock prefix grey-text"></i>
                <input type="password" id="defaultForm-pass" className="form-control validate"/>
                <label data-error="wrong" data-success="right" for="defaultForm-pass">Your password</label>
              </div>
      
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button className="btn btn-default">Login</button>
            </div>
          </div>
        </div>
      </div>
                
            );
        };

ReactDOM.render( <MyLoginComponent/>,document.getElementById('mylogindiv')
);
