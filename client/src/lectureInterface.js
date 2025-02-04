import React, {useEffect} from 'react';
import useStyles from "./styles";
import lectureI from './styles.css';
import {AppBar, Container, Grid, GridListTileBar, Grow, Menu, MenuItem, Paper, Typography} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {red} from "@material-ui/core/colors";
import {FaFilePdf} from "react-icons/fa";

function deleteLecture() {
    //remove item from cpp stored file??
    <NavLink style={{ textDecoration: 'none' }} to={'./'}><button>go home</button> </NavLink>

    return null;
}
function getLectSummary() {
// gets the lect summary info from the db
//     <div className='tile-container'>

    return (<div className='lectureSummary'>This is the Lecture Summary </div>
    );
}
function getClassInteraction() {
// gets the class interaction from the db
    //        "Word '" << p.first << "' occurs " << p.second << " times.\n";
    let keywords = []
    for(let i = 0; i<10; i++) {
        let pfirst = "p.first"
        let psecond = "p.second"
        keywords.push(
            <div className='keywords'>Word: {pfirst} occurs {psecond} times.</div>
        )
    }
    return (
            <div className='keywords-box'>{keywords}</div>
    );
}
const LectInterface = () => {
    const  classes = useStyles();
    localStorage.getItem("getCurrentID").toString();

    function downloadLectureasPDF() {
        return undefined;
    }

    return (
        <Container maxidth={"lg"}>

            <Grid>
                    {/*<p>About StudyStream</p>*/}
                    <button className='button-standard' onClick={downloadLectureasPDF()}>
                      <div className='make-grid'>  <p>Download PDF</p>
                          {/*<FaFilePdf></FaFilePdf>*/}
                      </div>
                    </button>
                    <NavLink className='right' style={{ textDecoration: 'red' }} to={"/LearnSS"}>
                        <button  className='button-standard' onClick={deleteLecture()} >
                            <p >Delete</p>
                        </button>
                    </NavLink>
            </Grid>

            {/*Header Bar*/}
                <NavLink  to={"/"} style={{ textDecoration: 'none' }} color='black'>
                <AppBar className={classes.appBar} position = "static" color ="inherit">
                    <Typography className={classes.heading} variant="h2" aligin="center">StudyStream</Typography>
                </AppBar>
            </NavLink>

            {localStorage.getItem("getCurrentID").toString()}
            {/*add a border and make it look nice w/ typ*/}
            {/*<Typography className={classes.heading} variant="h5" aligin="center">h5 Set interface</Typography>*/}
            {/*<Typography className={classes.heading} variant="subtitle1" aligin="center"> subtitle1 Set interface</Typography>*/}
            {/*<Typography className={classes.heading} variant="body2" aligin="center">body2 Set interface</Typography>*/}

            <Grow in>
                <Grid container justify="space-between" alignItems="stretch" flexDirection='row' spacing={3}>
                    <Grid item xs={12} sm={7}>
                    </Grid>
                </Grid>
            </Grow>
            <div className='lectureI'>
                <Typography className='box-with-blue-border' variant="h6">Lecture Name</Typography>
                    <Paper background-color='black'>
                    {getLectSummary()}
                </Paper>
                {/*Function: getClassInteraction*/}

                <div className='classInteraction'>
                    <Container className='box-with-blue-border' position='relative'>
                        {getClassInteraction()}
                    </Container>
                </div>
                <div align='right'>
                    <Typography className='button-standard'>This set was created by INSERT CREATOR</Typography>
                </div>
            </div>
        </Container>
    );
}

export default LectInterface;