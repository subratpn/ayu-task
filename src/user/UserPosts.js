import React, {useContext, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import {SAMPLE_DATA} from "../data/SAMPLE_DATA";
import "./UserPosts.css";
import {AllPostsContext, SelectedPostContext} from "../context/Store";
import {useHistory} from "react-router";

const UserPosts = () => {

    const posts = SAMPLE_DATA.posts;
    const history = useHistory();
    const [allPosts,setAllPosts] = useContext(AllPostsContext);
    const [selectedPost,setSelectedPost] = useContext(SelectedPostContext);

    const handlePostSelection = (event,post) => {
        setAllPosts(posts);
        setSelectedPost(post);
        history.push("/posts");
    };

    return (
        <div>
            <Grid container spacing={1}>
                {posts.map(post =>
                    <Grid item md={6}>
                        <img src={post.image} alt={"IMAGE"} className={"post_image"} onClick={(event) => handlePostSelection(event,post)}/>
                    </Grid>
                )}
            </Grid>
        </div>
    );
};

export default UserPosts;
