import React from 'react';
import Grid from "@material-ui/core/Grid";
import {SAMPLE_DATA} from "../data/SAMPLE_DATA";
import './UserProfile.css';
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import UserPosts from "./UserPosts";

function UserProfile(props) {

    const total_posts = SAMPLE_DATA.total_posts;
    const total_followers = SAMPLE_DATA.total_followers;
    const total_following = SAMPLE_DATA.total_following;
    const user_name = SAMPLE_DATA.name;
    const about = SAMPLE_DATA.about;


    return (
        <div className={"user_profile_container"}>
            <div className={"user_profile_header"}>
                <Grid container spacing={5}>
                    <Grid item md={3}>
                        <div align={"center"}>
                            <div className={"user_logo"}/>
                        </div>
                    </Grid>
                    <Grid item md={9}>
                        <Grid container spacing={1}>
                            <Grid item md={4}>
                                <div align={"center"}>
                                    <div className={"user_profile_heading"}>{total_posts}</div>
                                    <div>POSTS</div>
                                </div>
                            </Grid>
                            <Grid item md={4}>
                                <div align={"center"}>
                                    <div className={"user_profile_heading"}>{total_followers}</div>
                                    <div>FOLLOWERS</div>
                                </div>
                            </Grid>
                            <Grid item md={4}>
                                <div align={"center"}>
                                    <div className={"user_profile_heading"}>{total_following}</div>
                                    <div>FOLLOWING</div>
                                </div>
                            </Grid>
                            <Grid container spacing={1} style={{marginTop: 40}}>
                                <Grid item md={10}>
                                    <Button fullWidth variant={"contained"} color={"primary"}>FOLLOW</Button>
                                </Grid>
                                <Grid item md={2}>
                                    <Button color={"primary"} variant={"contained"}>
                                        <ExpandMoreIcon/>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <div className={"user_profile_detail"}>
                    <Typography variant={"h5"}>{user_name}</Typography>
                    <Typography variant={"body2"}>{about}</Typography>
                </div>
                <div className={"user_call_option"}>
                    <Divider/>
                    <div className={"user_call_button"} align={"center"}>
                        <Typography>Call</Typography>
                    </div>
                    <Divider/>
                </div>
                <div className={"user_posts"}>
                    <UserPosts/>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
