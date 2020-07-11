import React, { Component } from 'react'
import info from './info'



class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
                data:info.data
        }
    }



    render() {
        if(info.logStatus){
        return (
            <div className='container-fluid alert-success'>
                <br /><br /><br />
                <div className=' row p-3' >
                     <div className=' col-6 jumbotron shadow'>
                         <h3>
                         <center>
                         <b> Username :</b>{this.state.data.username}
                         <br />
                         <b> Name :</b> {this.state.data.name}
                         </center>
                         </h3>
                     </div>
                         <div className='col-6 jumbotron shadow'>
                             <h3>
                             <center>
                             <b>Gender:</b> {this.state.data.gender}
                             <br />
                             <b> Age :</b> {this.state.data.age.toString()}
                             </center>
                             </h3>
                         </div>
                </div>
                <br /><br /><br />
            </div>
        )
    }
        else{
         return(
            <div className='container-fluid bg-light alert-danger'>
                <br /><br /><br /><br />
                <center>
                <h2 className='p-5 alert-danger'>
                   NOT LOGGED IN!

                </h2>
                </center>
                <br /><br /><br /><br /><br />
            </div>
         )
        }
    }
}

export default Content
