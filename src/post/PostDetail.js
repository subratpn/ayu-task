import React, {useContext, useEffect, useState} from 'react';
import {AllPostsContext, SelectedPostContext} from "../context/Store";
import "./PostDetail.css";
import {SAMPLE_DATA} from "../data/SAMPLE_DATA";
import Button from "@material-ui/core/Button";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import SendIcon from '@material-ui/icons/Send';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import {useHistory} from "react-router";


const PostDetail = () => {
    const [allPosts, setAllPosts] = useContext(AllPostsContext);
    const [selectedPost,setSelectedPost] = useContext(SelectedPostContext);
    const history = useHistory();

    useEffect(() => {
        if (allPosts.length === 0) {
            window.location = "/";
        }
        else{
            document.getElementById(selectedPost.id).scrollIntoView();
        }
    }, [])

    const handleLike = (event, post) => {
        const index = allPosts.indexOf(post);
        console.log("INDEX : " + index);
        post.likes = (parseInt(post.likes) + 1).toString();
        console.log(post);
        allPosts[index] = post;
        console.log(allPosts);
        setAllPosts(Array.from(allPosts));
    }

    const handleComment = (event,post) => {
        setSelectedPost(post);
        history.push("/comments");
    }

    return (
        <div className={"post_detail_container"}>
            {allPosts.map(post => (
                <div style={{marginBottom: 20}} id={post.id}>
                    <img src={post.image} alt={"Image"} width={"100%"} height={"400px"}/>
                    <span>
                        <Button onClick={(event) => handleLike(event, post)}><FavoriteBorderIcon/></Button>
                        <Button onClick={(event) => handleComment(event,post)}><ChatBubbleOutlineIcon/></Button>
                        <Button><SendIcon/></Button>
                    </span>
                    <div>
                        <Typography><b>{post.likes} likes</b></Typography>
                    </div>
                    <Divider/>
                    <div>
                        {
                            post.comments!= null ? post.comments.map(comment => {
                                return (
                                    <div>
                                        <Typography variant={"caption"} component={"span"}><b>{comment.user.name} : </b></Typography>
                                        <Typography variant={"caption"}>{comment.description}</Typography>
                                    </div>
                                )
                            }):""}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostDetail;
