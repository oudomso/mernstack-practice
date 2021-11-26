import React, {useEffect, useState} from "react";
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import {useDispatch} from 'react-redux';


import {getPosts} from './actions/posts';
import muscleright from './images/muslce right.png';
import muscleleft from './images/muslce left.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';

import './index.css';
 const App = () =>{
     const classes = useStyles();
     const [currentId, setCurrentId] = useState(null);
     const dispatch = useDispatch();

     useEffect(()=>{

         dispatch(getPosts());
        }, [currentId, dispatch]);
     
    return (
        <Container maxidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <img className={classes.image} src={muscleleft} alt="memories" height ="60" />
                <Typography variant='h2' align="center">សាច់​ ដំុ</Typography>
                <img className={classes.image} src={muscleright} alt="memories" height ="60" />
            </AppBar>

             <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing ={3}>
                        <Grid item xs={12} sm={7}> 
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}> 
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow> 
        </Container>
    )
}

export default App;