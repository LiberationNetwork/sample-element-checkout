import React, { useLayoutEffect } from 'react'
import clsx from 'clsx';
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';

import sc30  from '../assets/sc30.jpeg'
import cap  from '../assets/cap.webp';
import shoe  from '../assets/shoe.webp';
import tshirt  from '../assets/tshirt.jpeg';


const useStyles = makeStyles(theme => ({
    gradient: {
        // background: 'linear-gradient(154deg,#53f 15%,#05d5ff 70%,#a6ffcb 94%)',
        // background: 'linear-gradient(154deg,#7df3d0 15%,#a2f7c2 70%,#a2f7c2 94%)',
        // background: `url(${cloudImage}), linear-gradient(210deg,#dad48a 0%,#1FA595 100%)`,
        // background: `linear-gradient(210deg,#fff9ab 0%,#1FA595 100%)`,
        background: `linear-gradient(210deg,#8CD987 0%,#1FA595 100%)`,
        backgroundPosition: 'bottom right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'initial'
    },
    banner: {
        backgroundImage: `url(${sc30})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '700px',
        margin: '0',
        [theme.breakpoints.down('sm')]: {
            minHeight: '300px',
        },
    },
    onePage: {
        maxWidth: '100%',
        // minHeight: '87vh',
    },
}));

const Home = (props) => {
    const classes = useStyles(props)
    const { addItem } = props

    useLayoutEffect(() => {
    },[])
    return (<div className={classes.onePage}>
                <div className={classes.banner}></div>
                <Box sx={{ width: '80%', margin: '0 auto', padding: '1em' }}>
                    <Grid 
                        container 
                        rowSpacing={1} 
                        spacing={2} 
                    >
                        {/* Shoe */}
                        <Grid item xs={12} md={4} sm={4}>
                            <Card sx={{ width: "100%", minHeight: '380px' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="450"
                                        image={shoe}
                                        sx={{ objectFit: 'contain', width: '100%', height: '100%', backgroundSize: 'contain'}}
                                        alt="red shoe"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Unisex Curry HOVR™ Splash Basketball Shoes
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Ultra-breathable engineered mesh upper with 3D print for added durability & abrasion-resistance<br/>
                                        Plush molded collar for extra heel cushion & elevated comfort​<br/>
                                        TPE-blend sockliner with low compression set for underfoot cushioning<br/>
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" onClick={() => { addItem('shoe')}}>
                                        ADD TO CART
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        {/* Tshirt */}
                        <Grid item xs={12} md={4}>
                            <Card sx={{ width: "100%", minHeight: '380px' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="450"
                                        image={tshirt}
                                        sx={{ objectFit: 'contain', width: '100%', height: '100%', backgroundSize: 'contain'}}
                                        alt="red shoe"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Boys' Curry Logo T-Shirt
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    "Everything I put my name on has to be good—it has to help you play and it has to support our mission to change the game for good."<br/> – Stephen Curry<br/>
                                    <br/>
                                    Loose: Fuller cut for complete comfort​<br/>
                                    Super-soft, cotton-blend fabric provides all-day comfort<br/>
                                    60% Cotton/40% Polyester
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" onClick={() => { addItem('tshirt')}}>
                                        ADD TO CART
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        {/* Cap */}
                        <Grid item xs={12} md={4}>
                            <Card sx={{ width: "100%", minHeight: '380px' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="450"
                                        image={cap}
                                        sx={{ objectFit: 'contain', width: '100%', height: '100%', backgroundSize: 'contain'}}
                                        alt="red shoe"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Unisex Curry Golf Hat
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    "We have animals for each of my kids. The Butterfly represents my daughter Ryan—it speaks to her free spirit, her personality, and her energy for life."<br/> – Stephen<br/>
                                    <br/>
                                    Soft, stretchy woven fabric delivers total comfort​<br/>
                                    Material wicks sweat & dries really fast<br/>
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary"
                                        onClick={() => { addItem('cap')}}
                                    >
                                        ADD TO CART
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </div>)
}

export default Home