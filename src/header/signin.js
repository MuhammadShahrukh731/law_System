import React, {Component} from "react";

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            
         
<div class="container">
 

 
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    

      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Login here</h4>
        </div>
     
      
        <form class="form-horizontal">
                            <div class="form-group">
                                <label for="email" class="col-lg-2 control-label">Your Email</label>
                                <div class="col-lg-9">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="glyphicon glyphicon-envelope" aria-hidden="true"></i></span>
                                        <input type="text" class="form-control" name="email" id="email"  placeholder="Enter your Email"/>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="password" class="col-lg-2 control-label">Password</label>
                                <div class="col-lg-9">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="glyphicon glyphicon-lock" aria-hidden="true"></i></span>
                                        <input type="password" class="form-control" name="password" id="password"  placeholder="Enter your Password"/>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label  class="col-lg-3 control-label"></label>
                                <div class="col-lg-6">
                                    <div class="input-group">
                                    <button type="button" class="btn btn-primary">Login</button>
                                  
                                        </div>
                                </div>
                            </div>
                        </form>
               
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>
  
</div>

        );
    }
}

export default Signin;
