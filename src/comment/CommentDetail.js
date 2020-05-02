import React, {useContext, useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import "./CommentDetail.css";
import Divider from "@material-ui/core/Divider";
import {AllPostsContext, SelectedPostContext} from "../context/Store";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SendIcon from '@material-ui/icons/Send';
import {findWeeksFromPresentDate, getFormattedDate} from "../util/Util";


function CommentDetail(props) {

    const [selectedPost, setSelectedPost] = useContext(SelectedPostContext);
    const [allPosts, setAllPosts] = useContext(AllPostsContext);
    const [comment, setComment] = useState("");

    const handleComment = (event) => {
        const commentObj = {
            id: (new Date()).getTime(),
            description: comment,
            created: getFormattedDate(new Date()),
            lastUpdated: getFormattedDate(new Date()),
            user: {
                "id": 25,
                "name": "Random User"
            }
        }
        console.log(commentObj);

        const index = allPosts.indexOf(selectedPost);

        selectedPost.comments.push(commentObj);
        const newSelectedPost = {};
        Object.assign(newSelectedPost, selectedPost);
        setSelectedPost(newSelectedPost);
        allPosts[index] = newSelectedPost;
        setAllPosts(Array.from(allPosts));
    }

    useEffect(() => {
        if (Object.keys(selectedPost).length === 0) {
            window.location = "/";
        }
    }, [])
    return (
        <div className={"comment_detail_container"}>
            {
                selectedPost !== null && selectedPost !== undefined && selectedPost.comments !== null
                && selectedPost.comments !== undefined ? selectedPost.comments.map(comment => (
                    <div>
                        <Grid container style={{marginTop: 10, marginBottom: 10}}>
                            <Grid item md={3}>
                                <div align={"center"}>
                                    <div className={"user_logo"}/>
                                </div>
                            </Grid>
                            <Grid item md={9}>
                                <Typography variant={"body2"}
                                            component={"span"}><b>{comment.user.name} : </b></Typography>
                                <Typography variant={"caption"} component={"span"}>{comment.description}</Typography>
                                <Typography
                                    variant={"body2"}>{findWeeksFromPresentDate(comment.lastUpdated)}</Typography>
                            </Grid>
                        </Grid>
                        <Divider/>
                    </div>
                )) : ""}
            <div className={"comment_box"}>
                <Grid container spacing={1}>
                    <Grid item md={11}>
                        <TextField value={comment} onChange={(event => setComment(event.target.value))} autoFocus={true}
                                   id="comment_field" label="Comment" variant={"outlined"} fullWidth/>
                    </Grid>
                    <Grid item md={1}>
                        <Button color={"primary"} variant={"contained"} style={{minHeight: "100%"}}
                                onClick={(event) => handleComment(event)}><SendIcon/></Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default CommentDetail;
