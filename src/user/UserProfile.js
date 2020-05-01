import React from 'react';
import Grid from "@material-ui/core/Grid";
import {SAMPLE_DATA} from "../data/SAMPLE_DATA";
import './UserProfile.css';

function UserProfile(props) {

    return (
        <div className={"user_profile_container"}>
            <Grid container spacing={1}>
                <Grid item md={3}>
                    <div className={"user_logo"}>

                    </div>
                </Grid>
                <Grid item md={9}>
                    <Grid container spacing={1}>
                        <Grid>

                        </Grid>
                        <Grid>

                        </Grid>
                        <Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default UserProfile;
