import React, { Component } from 'react'

export class BlogForm extends Component {

    state = {
        title: "",
        content: ""
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addBlog(this.state)
        this.setState({
            title: "",
            content: ""
        })
    }

    handleChange = (e) => {
        
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
              <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input onChange={this.handleChange} type="text" name="title" id="" value={this.state.title}/>
                    <br></br>
                    <label htmlFor="content">Content</label>
                    <input onChange={this.handleChange} type="text" name="content" id="" value={this.state.content}/>
                    <br></br>
                    <button>Create Blog</button>
                </form>  
            </div>
        )
    }
}

export default BlogForm
