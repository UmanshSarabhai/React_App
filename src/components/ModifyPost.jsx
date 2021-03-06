import React from "react";
const ModifyPost = (props) => {
  return (
    <><section className="create-post">
      <form>
        <h1>Modify Post</h1>
        <input type='text'
          defaultValue={props.title}
          onChange={props.savePostTitleToState}
          text
          placeholder="title"
        ></input>
        <br />
        <br />
        <input type="text"
          defaultValue={props.content}
          placeholder="content"
          onChange={props.savePostContentToState}
          
        ></input>
        <br />
        <br />
        
        <section className="button-wrapper">
        <button className="button" onClick ={props.updatePost}>Update Post</button>
        </section>
      </form>
      </section>
    </>
  );
};
export default ModifyPost;