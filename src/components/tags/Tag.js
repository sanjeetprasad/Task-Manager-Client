import React, {useContext, useRef} from "react";
import { TagContext } from "./TagProvider"


export const Tag = ({ tag, props}) => {
  const {deleteTag} = useContext(TagContext)


  // Delete As a Dialog
  const dialog = useRef()

  return (
    <section className="tag">
      
      <dialog ref= {dialog}>
        <div>
          Are you sure, you want to delete this Tag?

          <button className="btn--release"
                  onClick={() => {
                  
                    deleteTag(tag.id)
         
                     }}
              >Delete Tag</button>
              <br></br>
                  <button className="btn--release"
                  onClick={() => {

                    dialog.current.close()
                   }}
              >Cancel Delete</button>
        </div>
      </dialog>
      
      
      <p>{tag.label}</p> 

      <button onClick={() => {
                    props.history.push(`/tags/edit/${tag.id}`)
                }}>Edit Tag!</button>
      <br></br>

      <button className="btn--release"
                  onClick={() => {
                    dialog.current.showModal()
                  }}
              >Delete Tag</button>
    </section>
  );
};