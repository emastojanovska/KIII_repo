import React from 'react';
import './add_post.styles.css';


class AddPost extends React.Component{
    constructor(){
        super()
        this.state = {
            post: '',
            anonymous: false
        }
    }

    handleChange = event =>{
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    handleSubmit = async event =>{
        event.preventDefault();
        const { post } = this.state;
        
        
    }

    render(){
        <div>
        <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
            <label>Share your thoughts and let the world help you...</label>
            <input type="text" name='post' class="form-control" value={this.state.post} onChange={this.handleChange} required></input>
        </div>                  
                          

            <div className='button-section'>
            <button className='btn btn-lg  btn-dark rounded-0' type='submit'> Submit </button>
                  
            </div>
            
        </form>
        </div>
    }
}

export default AddPost;