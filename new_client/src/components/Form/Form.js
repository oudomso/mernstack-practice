import React, { useState } from 'react';
import useStyles from './style';
import {TextField, Button, Typography, Paper} from '@material-ui/core';
import {useDispatch} from 'react-redux';

import FileBase from 'react-file-base64';
import {createPost} from '../../actions/posts';

const Form = () => {
    //Link style.js to Form
    const classes = useStyles();


    // Store JSON DATA as State variable
    const [postData, setPostData] = useState({
        creator:"", title: "", message:"", tags:"", selectedFile: ""});
    
    //Uses dispatch 
    const dispatch = useDispatch();
    
    const handlesubmit =(e) =>{
            e.preventDefault();

            dispatch(createPost(postData));
    }
    
    const clear =() =>{

    }
    
    return (
        <Paper className={classes.paper}>
            <form autoCompletre="off" noValidate className = {`${classes.root}`, `${classes.form}`} onSubmit={handlesubmit}>
                <Typography variant="h6">​​​ ការផុស ​</Typography>
                <TextField name="Creator" 
                    variant="outlined" 
                    label="ឈ្មោះ" 
                    fullWidth
                    value={postData.creator}
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value})}
                
                />

                <TextField name="title" 
                    variant="outlined" 
                    label="​ធ្វើអ្វី?" 
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value})}
                
                />
                <TextField name="tags" 
                    variant="outlined" 
                    label="" 
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value})}
                
                />
                <TextField name="message" 
                    variant="outlined" 
                    label="" 
                    fullWidth
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value})}
                
                />

                <div className ={classes.fileInput}>
                    <FileBase
                        type='file'
                        multiple={false}
                        onDone ={({base64}) => setPostData({...postData, selectedFile: base64})}
                    />
                </div>

                <Button className={classes.buttonSubmit} variant="container" color="Red" size="large" type="submit" fullWidth> submit </Button>
                <Button onClick={clear} variant="container" color="Red" size="large" type="submit" fullWidth> Clear </Button>
            </form>
        </Paper>
    );
}

export default Form;