import * as React from "react";
import {NoteModel, NoteComment} from '../types/NoteModel';
import NoteCommentsItem from "./NoteCommentsItem";

function NoteCommentsPanel(){
    return(
        <div className="comments__panel">
            <div className="comments__header">Comments : </div>
            <ul className="comment__list">
                <NoteCommentsItem />
            </ul>
        </div>
    )
}
export default NoteCommentsPanel;