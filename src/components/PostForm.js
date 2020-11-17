import React,{useState} from 'react';
import axios from 'axios';

class PostForm extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            userid:' ',
            password:' '
        }
    }
    changeHandler=e=>
    {
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler=e=>
    {
        e.preventDefault()
        console.log(this.state)
       {/* axios
        .post("https://localhost:3000/form",this.state)
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })*/}
    }
    render()
    {
        const {userid,password} =this.state
        return (

            <div>
            
                    <form onSubmit={this.submitHandler}>
                        <div>
                            <input type="text" name="userid" value={userid} onChange={this.changeHandler} style={{color:"black"}} />
                        </div>
                        <div>
                            <input type="text" name="password" value={password} onChange={this.changeHandler}/>
                        </div>
                        <button type="submit">Submit</button>
                        
                    </form>
                </div>

        );

    }
}
export default PostForm;