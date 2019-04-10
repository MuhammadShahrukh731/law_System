import React from 'react';
import {updateCriminal} from './../firebaseConfig'
class renderLaw extends React.Component {
   
    constructor(props) {    
        super(props);
        this.state = {
            ele : this.props.location.state.el,
            arrest_warrant:this.props.location.state.el.arrest_warrant,
            punishment:this.props.location.state.el.punishment,
            bailable:this.props.location.state.el.bailable,
            section_no:this.props.location.state.el.section_no,
            compoundable:this.props.location.state.el.compoundable,
            description:this.props.location.state.el.description,
            offences:this.props.location.state.el.offences


        };
        this.updateText=this.updateText.bind(this);
        this.updateText2=this.updateText2.bind(this);
        this.updateText3=this.updateText3.bind(this);
        this.updateText4=this.updateText4.bind(this);
        this.updateText5=this.updateText5.bind(this);
        this.updateText6=this.updateText6.bind(this);
    }
   
    async updateCriminalLaw(ele){
    console.log(ele.description);
       try {
        let res = await updateCriminal(ele._id, {arrest_warrant: this.state.arrest_warrant, bailable: this.state.bailable,compoundable : this.state.compoundable, description: this.state.description,offences : this.state.offences, punishment: this.state.punishment,section_no: this.state.section_no  });
        alert(ele.section_no + ' # updated sucessfully');
        this.props.history.push('/Criminal_admin');
    } catch(e) {
        alert('Error' + e);
    }
    }

    updateText(e){
        this.setState({offences:e.target.value})
    }
    updateText2(e){
        this.setState({punishment:e.target.value})
    }
    updateText3(e){

        this.setState({bailable:e.target.value})
        
    }
    updateText4(e){

        this.setState({compoundable:e.target.value})
        
    }
    updateText5(e){

        this.setState({section_no:e.target.value})
        
    }
    updateText6(e){

        this.setState({description:e.target.value})
        
    }
    
    render() {
        const {ele} = this.state;
        console.log(ele,'eeeeeeeeeeeeeee')
    
      return (
         <div>
              <form>
                <div class="form-group">
                           
                           <input class="form-control  input-grp"  value ={ele.offence} onChange={this.updateText} required />
                           </div><br/>
                       
                <div class="form-group">
                           
                    <input class="form-control  input-grp"  value={ele.punishment} onChange={this.updateText2} required />
                    </div><br/>
                    <div class="form-group">
                               
                                <input class="form-control input-grp"  value={ele.bailable} onChange={this.updateText3} required />
                           
                    </div><br/>
                    <div class="form-group">
                                
                                <input class="form-control input-grp" value={ele.compoundable}  onChange={this.updateText4} required />
                    </div><br/>
                    <div class="form-group">
                                
                                <input class="form-control input-grp"  value={ele.description} onChange={this.updateText6} required />
                        
                    </div><br/>
                    <div class="form-group">
                              
                                <input class="form-control input-grp" onChange={this.Description} required />
                    </div><br/>
                    <button type="button" class="btn btn-success" onClick={() => { this.addL(this.state) }}>Add</button>


                </form>
             Offence : <input onChange={this.updateText}/><br/>
             Punsihment : <input type="text" value={ele.punishment} onChange={this.updateText2}/><br/>
             Bailable : <input type="text" value={ele.bailable} onChange={this.updateText3}/><br/>
             Compoundable : <input type="text" value={ele.compoundable} onChange={this.updateText4}/><br/>
             Description : <input type="text" value={ele.description} onChange={this.updateText5}/><br/>
             <button type="button" class="btn btn-success" onClick= {()=>{this.updateCriminalLaw(ele)}}>Update</button>
         </div>
      );
   }
}
export default renderLaw;