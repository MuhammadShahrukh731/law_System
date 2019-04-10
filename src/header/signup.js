import React, {Component} from "react";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            
         
<div class="container">
 



<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
       
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form class="form-horizontal">
      <div class="form-group">
      <div class="form-group">
                                <label for="Name" class="col-lg-2 control-label">Your Name</label>
                                <div class="col-lg-9">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="glyphicon glyphicon-envelope" aria-hidden="true"></i></span>
                                        <input type="text" class="form-control" name="name" id="name"  placeholder="Enter your Name"/>
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
                            
                                <label for="email" class="col-lg-2 control-label">Your Email</label>
                                <div class="col-lg-9">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="glyphicon glyphicon-envelope" aria-hidden="true"></i></span>
                                        <input type="text" class="form-control" name="email" id="email"  placeholder="Enter your Email"/>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="password" class="col-lg-2 control-label">Contact No.</label>
                                <div class="col-lg-9">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="glyphicon glyphicon-lock" aria-hidden="true"></i></span>
                                        <input type="password" class="form-control" name="phone" id="phone"  placeholder="Enter your Contact No"/>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label  class="col-lg-3 control-label"></label>
                                <div class="col-lg-6">
                                    <div class="input-group">
                                    <button type="button" class="btn btn-primary">Register</button>
                                  
                                        </div>
                                </div>
                            </div>
                        </form>     
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
     
      </div>
    </div>
  </div>
</div>
</div>

        );
    }
}

export default Signup;
