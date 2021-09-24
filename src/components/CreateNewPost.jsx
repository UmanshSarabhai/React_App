import React from "react";
import '../App.css'


const CreateNewPost = props => {
  return (
    <>
    <section className="create-post">
      <form onSubmit={props.savePost}>
        <h2>Create New Post</h2>
        <input
          type="text"
          onChange={props.savePostTitleToState}
          placeholder="Title"
          required
          ref={props.getTitle}
        ></input>
        <br />
        <br />
        <input
          type="text"
          onChange={props.savePostContentToState}
          placeholder="Text"          
          required
          ref={props.getContent}
        ></input>
        <br />
        <br />
        
        <section className="button-wrapper">
        <button className="button" variant="outline-primary" >Save Post</button></section>
      </form>
      </section>
    </>
  );
};
export default CreateNewPost;