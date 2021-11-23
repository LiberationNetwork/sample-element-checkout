import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import Badge from '@mui/material/Badge';
import Grid from '@material-ui/core/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import cap  from '../assets/cap.webp';
import shoe  from '../assets/shoe.webp';
import tshirt  from '../assets/tshirt.jpeg';
import lib_logo  from '../assets/lib_logo.png';

import { Link } from "react-router-dom"

import { Drawer } from '@mui/material';
import Divider from '@mui/material/Divider';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import LinearProgress from '@mui/material/LinearProgress';

const liberalize = require('liberalize-frontend-web-sdk');

const useStyles = makeStyles((theme) => ({
    drawer: {
        minWidth: 350,
        flexShrink: 0,
        width: '30%'
    },
    drawerHeader: {
        textAlign: 'left',
        display: 'flex',
        alignItems: 'left',
        padding: theme.spacing(5, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        // justifyContent: 'flex-left',
    },
    drawerPaper: {
        minWidth: 350,
        width: '30%'
    },
    cardMod:{
        width: '94%',
        backgroundColor: '#e3e0e0'
    },
    poweredBy: {
        display: 'inline-block',
        minWidth: '50px',
        minHeight: '20px',
        background: `url(${lib_logo}) no-repeat top left`,
        backgroundSize: 'contain',
        verticalAlign: 'middle'
    },
    payBtn: {
        marginRight: 0,
        right: 0,
        float: 'right',
    },
    qrImages: {
        height: 50,
        width: 50,
        margin: '0.5em',
        '&:hover': {
            cursor: 'pointer',
        },
    },
    qrImage: {
        display: 'table',
        margin: '0 auto',
    },
}));


const Appbar = (props) => {
    const classes = useStyles(props)
    const { itemCount, openDrawer, toggleDrawer, basket, addItem, lessItem, publicKey } = props
    let [isCheckingOut, setIsCheckingOut] = useState(false)
    let [liberalizeClass, setLiberalizeClass] = useState(null)
    let [cardModMounted, setCardModMounted] = useState(false)
    let [qrImages, setQrImages] = useState({})
    let [loadingQRs, setLoadingQRs] = useState(false)
    let [loadingCardMod, setLoadingCardMod] = useState(false)

    useEffect(() => {
        const liberalizeFrontEnd = new liberalize.LiberalizeWeb(publicKey, "staging")
        setLiberalizeClass(liberalizeFrontEnd)
      },[publicKey])

    return <React.Fragment>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Your E-Commerce
          </Typography>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => { 
                setIsCheckingOut(false)
                toggleDrawer() 
            }}
          >
            <Badge badgeContent={`${itemCount}`} color="error">
                <ShoppingCartSharpIcon/>
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
        <Drawer
            className={classes.drawer}
            anchor="right"
            open={openDrawer}
            classes={{
                paper: classes.drawerPaper,
              }}
            onClose={() => {
                toggleDrawer()
                setIsCheckingOut(false)
                setCardModMounted(false)
            }}
          >
            {!isCheckingOut && <div className={classes.drawerHeader}>
                <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                    <b>Your Cart</b>
                </Typography>
            </div>}
            {!isCheckingOut && <div>
                {
                    Object.keys(basket).map((eachItem) => {
                        return eachItem && basket[eachItem] > 0 &&<Grid 
                        container 
                        rowSpacing={1} 
                        spacing={2} 
                    >
                            <Grid item xs={5} md={5} sm={5}>
                                <Card sx={{ width: "100%" }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image={eachItem == 'cap' ? cap : eachItem == 'shoe' ? shoe : tshirt}
                                            sx={{ objectFit: 'contain', width: '100%', backgroundSize: 'contain'}}
                                            alt="red shoe"
                                        />
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={7} md={7} sm={7}>
                                <Typography variant="h5" sx={{ flexGrow: 1 }}>
                                    {eachItem == 'cap' ? "Unisex Curry Golf Hat" : eachItem == 'shoe' ? "Unisex Curry HOVR™ Splash Basketball Shoes" : "Boys' Curry Logo T-Shirt"}
                                </Typography>
                                <Typography >
                                    Qty: {eachItem == 'cap' ? basket.cap : eachItem == 'shoe' ? basket.shoe : basket.tshirt} Price: ${eachItem == 'cap' ? basket.cap * 30 : eachItem == 'shoe' ? basket.shoe * 100 : basket.tshirt * 20}
                                </Typography>
                                <IconButton>
                                    <AddCircleIcon onClick={() => { addItem(eachItem)}}/>
                                </IconButton>
                                <IconButton>
                                    <RemoveCircleIcon onClick={() => { lessItem(eachItem)}}/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    })
                }
            </div>}
            <br/><br/>
            <Divider/>
            <br/>
            <Typography variant="h4" component="div">
                    <b>Total:</b> ${ (basket.cap * 30) + (basket.shoe * 100) + basket.tshirt * 20 }.00
            </Typography>
            <br/><br/>
            {!isCheckingOut && <Button onClick={() => {setIsCheckingOut(true)}}>CHECKOUT</Button>}

            {/* CARD PAYMENTS */}
            {isCheckingOut &&<Accordion onClick={async () => {
                if (!cardModMounted) {
                    setLoadingCardMod(true)
                    const elementResponse = await liberalizeClass.cardElement("cardMod")
                    console.log('elementResponse : ', elementResponse)
                    setCardModMounted(true)
                    setLoadingCardMod(false)
                }
            }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Credit Card</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.cardMod}>
                    {loadingCardMod && <LinearProgress color="success" />}
                    <div className={classes.cardMod} id="cardMod"></div>
                    powered by: <span className={classes.poweredBy}></span>
                    <Button className={classes.payBtn} onClick={async() => {
                        const cardResponse = await liberalizeClass.cardElementPay()
                        alert(`card-token: ${JSON.stringify(cardResponse)}`)
                    }}>PAY</Button>
                </AccordionDetails>
            </Accordion>}

            {/* QR PAYMENTS */}
            {isCheckingOut &&<Accordion onClick={async () => {
                if (!cardModMounted) {
                    setLoadingQRs(true)
                    const supported = await liberalizeClass.qrSupported()
                    // supported will be one more many accounts for a particular payment scheme
                    setQrImages(supported)
                    setLoadingQRs(false)
                }
            }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>QR PAYMENTS</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.cardMod}>
                    <div>
                        {loadingQRs && <LinearProgress color="success" />}
                        {qrImages && Object.keys(qrImages).length > 0 && Object.keys(qrImages).map((eachScheme) => {
                            return <img
                                key={eachScheme}
                                alt={`${eachScheme}`}
                                onClick={() => {
                                    let qrCodeArea = document.getElementById("qrCode")
                                    if (qrCodeArea && qrCodeArea.childNodes && qrCodeArea.childNodes[0]) {
                                        // If it was already mounted remove the child element
                                        console.log('removed')
                                        qrCodeArea.removeChild(qrCodeArea.childNodes[0]);
                                    }
                                    // fire request to server then ..
                                    console.log('mount!')
                                    liberalizeClass.qrElement("qrCode", "your_backend_response_QRDATA", eachScheme)
                                }}
                                className={classes.qrImages}
                                src={qrImages[eachScheme] && qrImages[eachScheme][0] && qrImages[eachScheme][0].image}
                            />
                        }) }
                    </div>
                    {<div id="qrCode" className={classes.qrImage}>

                    </div>}
                    powered by: <span className={classes.poweredBy}></span>
                </AccordionDetails>
            </Accordion>}
            <br/><br/>
            {isCheckingOut && <Button className={classes.payButton} onClick={() => {
                setIsCheckingOut(false)
                setCardModMounted(false)
            }}>BACK</Button>}
          </Drawer>
        </React.Fragment>
}

Appbar.propTypes = {
}

export default Appbar
