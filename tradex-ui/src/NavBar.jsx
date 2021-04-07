import React from 'react'
import CustomBtn from './CustomBtn.jsx'
import logo from '../logo.svg'
import logoMobile from '../logoMobile.svg'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 
import {Link} from 'react-router-dom';
import Login from './Login.jsx';

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
          '@media (max-width:780px)': { 
           flexDirection: "column"
          }
    },
    logo:{
        width: "15%", 
        '@media (max-width:780px)': { 
           display: "none"
           }
    },
    logoMobile:{
        width: "100%", 
        display: "none", 
        '@media (max-width:780px)': { 
            display: "inline-block"
            }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        '@media (max-width:780px)': { 
            paddingBottom: "1rem"    }
    }
})

function NavBar() {
    const classes = styles()
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                 <img src={logo} alt=" " className={classes.logo}/> 
                 <img src={logoMobile} alt=" " className={classes.logoMobile}/> 
                <Typography variant="h6" className={classes.menuItem}>
                    <Link to='/'>
                        Home
                    </Link>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    <Link to='/about'>
                        About
                    </Link>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    <Link to='/signup'>
                        Sign up
                    </Link>
                </Typography>
                <Typography /* onClick={handleOpen} */variant="h6" className={classes.menuItem}>
                    <Link to='/login'>
                        Login
                    </Link>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    <Link to='/contact'>
                        Contact Us 
                    </Link>
                </Typography>
                <CustomBtn txt="Pay Now"/>
            </Toolbar>
    )
}






export default NavBar