import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { navItems, navregister } from "./Data";
import { Link, NavLink } from "react-router-dom";
import { Stack, Typography } from "@mui/material";

const drawerWidth = 300;

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);



  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center"}}>
  <Box sx={{backgroundColor:"white",height:"100vh"}}>
  <Box
        
        // variant="h5"
        sx={{ py: 2,background:'white'}}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
         <Typography sx={{
            fontSize:'24px',
            color:'#1e1e27',
            fontWeight:700,
            textTransform:"uppercase"
        }}>
             Fashion <span style={{
                color: "#fe4c50"
             }}> Cube</span>
        </Typography>
        </Link>
      </Box>
      <Divider />
      <List sx={{ display: "flex", flexDirection: "column" }}>
        {navItems.map(({ id, title, url }) => (
          <Link
            style={{ color: "white", textDecoration: "none" }}
            key={id}
            to={url}
          >
            <Stack direction="column" alignItems="center">
              <p style={{ fontSize: "13px", color: "black" }}>{title}</p>
            </Stack>
          </Link>
        ))}

       
      </List>
      <List sx={{ display: "flex", flexDirection: "column" }}>
        {navregister.map(({ id, title, url }) => (
          <Link
            style={{ color: "white", textDecoration: "none" }}
            key={id}
            to={url}
          >
            <Stack direction="column" alignItems="center">
              <p style={{ fontSize: "13px", color: "black" }}>{title}</p>
            </Stack>
          </Link>
        ))}

       
      </List>
  </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ backgroundColor: "white", color: "black", padding: "20px 0px" }}
      >
        <Box
          sx={{
            width:{md:'90%',xs:'97%'},
            maxWidth: "1200px",
            mx: "auto",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ flexGrow: 3}}>
            <Link to="/"
              style={{ textDecoration: "none", color: "black" }}
            >
           <Typography sx={{
            fontSize:'24px',
            color:'#1e1e27',
            fontWeight:700,
            textTransform:"uppercase"
        }}>
             Fashion <span style={{
                color: "#fe4c50"
             }}> Cube</span>
        </Typography>
            </Link>
          </Box>
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" ,flexGrow: 2}}
          >
            {navItems.map(({ id, title, url }) => (
              <Link
                key={id}
                to={url}
                style={{ color: "black", textDecoration: "none", mr: "20px" }}
            
              >
                <Button
                  variant="text"
                  sx={{
                    marginRight: "5px",
                    borderRadius: "0px",
                    color: "black",
                  
                  }}
                >
                  {title}
                </Button>
              </Link>
            ))}
           
          </Box>
          <Box 
          sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" ,flexGrow: 1}}
          >
            {navregister.map(({ id, title, url }) => (
              <NavLink
                key={id}
                to={url}
                style={{ color: "black", textDecoration: "none", mr: "20px" }}
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              >
                <Button
                  variant="text"
                  sx={{
                    marginRight: "5px",
                    borderRadius: "0px",
                    color: "black",
                  
                  }}
                >
                  {title}
                </Button>
              </NavLink>
            ))}
           
          </Box>
        
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              ml: "auto",
              display: { md: "none" },
              border: "1px solid #353538",
              borderRadius: "9px",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" mt={2}>
        <Toolbar />
      </Box>
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;