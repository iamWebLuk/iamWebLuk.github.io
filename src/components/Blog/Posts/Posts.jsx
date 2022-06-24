import React, {useState} from 'react';
import useStyles from "./postsCSS";
import { Button } from "@mui/material";
import { addDoc, collection } from 'firebase/firestore'
import { db, auth } from "../../../Firebase/config";
import { useNavigate } from "react-router-dom";

export default function Posts() {

    const classes = useStyles();

    const [title, setTitle] = useState("")
    const [postText, setPostText] = useState("")

    const navigate = useNavigate();

    const postCollectionRef = collection(db, "posts");

    const createPost = async () => {
        await addDoc(postCollectionRef, {
            title,
            post: postText,
            author: {name: auth.currentUser.email, id: auth.currentUser.uid},
        });
        navigate("/blog")
    }

    return (
        <div className={classes.createPostPage}>
            <div className={classes.cpContainer}>
                <h1>Create Post</h1>
                <div className={classes.inputGp}>
                    <label>Title:</label>
                    <input placeholder="Title..." onChange={(event) => setTitle(event.target.value)}/>
                </div>
                <div className={classes.inputGp}>
                    <label>Post:</label>
                    <textarea placeholder="Post..." style={{height: '150px'}}
                              onChange={(event) => setPostText(event.target.value)}/>
                </div>
                <div className={classes.button}>
                    <Button onClick={createPost}>Submit Post</Button>

                </div>
            </div>


        </div>
    )
}