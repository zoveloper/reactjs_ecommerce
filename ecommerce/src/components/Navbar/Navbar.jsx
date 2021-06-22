import React from 'react'
import {Drawer,Hidden,List,ListItem,ListItemText,IconButton} from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Cross as Hamburger } from 'hamburger-react'

const drawerWidth = '15%'

const useStyles = makeStyles((theme) => ({
  root: {
  },
  menuicon:{
    display: 'flex',
    justifyContent:'flex-end',
    position:'fixed',
    width:'100%',
    zIndex:'2000',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    
    
  },
  MobiledrawerPaper: {
    width: '100%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'pink'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    }
  },


}))

const Navbar = (props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const container = window !== undefined ? () => window().document.body : undefined;
   
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer=(
    <List>
      {['WORK','SHOP','ABOUT'].map((text,index)=>(
        <ListItem autoFocus button key={text}>
        <ListItemText primary={text}/>
      </ListItem>
      ))}
    </List>
  )

  return (
      <>
      <div className={classes.menuicon}>
      <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <Hamburger toggled={mobileOpen} toggle={setMobileOpen}/>
      </IconButton>
      </div>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.MobiledrawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      </>
  )
}

export default Navbar
