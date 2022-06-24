import React, {useEffect, useState} from 'react';
import ResponsiveAppBar from "../AppBar/AppBar";
import {Rating, Tooltip} from "@mui/material";
import useStyles from "./blogCSS";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { getAuth } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, doc, getDocs, deleteDoc } from 'firebase/firestore';
import { db } from "../../Firebase/config";
import { Delete } from "@material-ui/icons";


export default function Blog() {

    const classes = useStyles();
    const navigate = useNavigate();

    const auth = getAuth();

    const [isAuth, setIsAuth] = useState(false);
    const [postList, setPostList] = useState([]);
    const postsCollectionRef = collection(db, 'posts');
    const getRating = collection(db, 'rating');
    const [rating, setRating] = useState([]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setIsAuth(true);
            } else {
                setIsAuth(false);
                alert("You are not logged in")
                navigate("/");
            }
        })},[])

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            // console.log(data.docs.map((doc) => ({...doc.data().author.name, id: doc.id})))
            setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getPosts();
    }, [])

    useEffect(() => {
        const getRatings = async () => {
            const data = await getDocs(getRating);
            console.log(data.docs.map((doc) => ({...doc.data()})));
            setRating(data.docs.map((doc) => ({...doc.data()})));
            console.log("space")
            // console.log(rating)

        }
        getRatings();
    },[]);

    const deletePost = async (postID) => {
        const postDoc = doc(db, 'posts', postID)
        await deleteDoc(postDoc)
        window.location.reload();
    }

    const ratingOoutput = () => {
        console.log(rating)
    }

    return(
        <div className={classes.homePage}>

            Rate this Website
            <br />

            //TODO hier rating von firebase einfügen

            <Rating defaultValue={3} />


            <Button onClick={ratingOoutput}>rating output</Button>

        <div>
            {isAuth ?
            < Button onClick={() => navigate("/createPost")}>Create</Button> : ""
            }
        </div>
            {postList.map((post) => {
                return (
                    <div className={classes.post}>
                        <div className={classes.postHeader}>
                            <div className={classes.title}>
                                <h2 style={{fontWeight: 'bold'}}>{post.title}</h2>
                            </div>
                                <div className={classes.deletePost}></div>
                            {isAuth && post.author.id === auth.currentUser.uid && (
                                <Tooltip title={"Delete"}>
                                <Delete fontSize={"large"} style={{cursor:"pointer"}} onClick={() => deletePost(post.id)} />
                                </Tooltip>
                                )}
                        </div>
                        <div className={classes.postTextContainer}>{post.post}</div>
                        <div className={classes.authorName}>{post.author.name}</div>
                    </div>
                )
            })}
        </div>
    )
}