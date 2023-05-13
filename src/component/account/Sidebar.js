import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const Data = [
    {
      title: "Manage My Account",
      url: "/account/manage",
    },
    {
      text: "My Profile ",
      url: "/account/profile",
    },
    {
      text: "Address Book",
      url: "/account/address",
    },
    {
      text: "My Payment options",
      url: "/account/paymentoption",
    },
    {
      text: "Wallet",
      url: "/account/wallet",
    },
    {
      text: "vouchers",
      url: "/account/vochar",
    },
    {
      title: "My Order",
      url: "/account/order",
    },
    {
      text: "My returns",
      url: "/account/return",
    },
    {
      text: "My cancellations",
      url: "/account/cancel",
    },
    {
      title: "My Reviews",
      url: "/account/reviews",
    },
    {
      title: "My Wishlist & Followed Store",
      url: "/account/mywishlist",
    },
  ];
  return (
    <Box sx={{}}>
      <List>
        {Data.map((item) => {
          return (
            <ListItem sx={{ padding: "3px", margin: "0" }}>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                style={{ textDecoration: "none", color: "black" }}
                to={item.url}
              >
                <span
                  style={{
                    color: "black",
                    fontSize: "1rem",
                    fontWeight: "550",
                  }}
                >
                  {item.title}
                </span>
                <ListItemText sx={{ color: "gray" }} primary={item.text} />
              </NavLink>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
export default Sidebar;
