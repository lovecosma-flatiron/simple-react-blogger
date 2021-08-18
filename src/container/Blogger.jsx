import React, {Component} from "react"
import BlogForm from "../components/BlogForm"
import Blog from "../components/Blog"
class Blogger extends Component {

   state = {
       blogs: []
   }

   addBlog = (blog) => {
        this.setState({
            blogs: [...this.state.blogs, blog]
        })
   }
 
    render(){
        let blogs = this.state.blogs.map(blog => {
            return (
                <Blog title={blog.title} content={blog.content}/>
            )
        })
        return(
            <div>
                <h3>Welcome to the Blogger App</h3>
                <BlogForm addBlog={this.addBlog}/>
                {blogs}
            </div>
        ) 

    }


}

export default Blogger
