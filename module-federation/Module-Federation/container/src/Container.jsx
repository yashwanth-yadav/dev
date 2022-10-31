import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { pink } from "@mui/material/colors";
import { Observable } from "windowed-observable";
import { navigateToUrl } from "single-spa";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Link } from "react-router-dom";

const Container = () => {
  const [notification, setNotification] = useState(
    localStorage.getItem("cart") == null
      ? 0
      : Object.keys(JSON.parse(localStorage.getItem("cart"))).length
  );
  const observable = new Observable("cart");
  observable.subscribe((value) => setNotification(value), { latest: true });

  const [location, setLocation] = useState(window.location.pathname);
  console.log(location);

  return (
    <Box
      data-testid="nav"
      sx={{
        backgroundColor: "#f20a7e",
        margin: 0,
        height: "60px",
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        paddingX: "0",
      }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <Box
          sx={{
            borderBottom: "1px solid white",
            marginLeft: "20px",
          }}
        >
          <Typography sx={{ color: "white", textDecoration: "none" }}>
            Home
          </Typography>
        </Box>
      </Link>

      <Box sx={{ marginLeft: "auto" }}>
        <Box
          sx={{
            width: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Link
            to="/calender"
            style={{
              textDecoration: "none",
            }}
          >
            <CalendarTodayIcon sx={{ color: "white" }} />
          </Link>
          <Badge badgeContent={notification} color="primary">
            <Link
              to="/cart"
              style={{
                textDecoration: "none",
              }}
            >
              {/* <a
              href={`/cart`}
              onClick={navigateToUrl}
              style={{
                textDecoration: "none",
              }}
            > */}
              <ShoppingCartIcon sx={{ color: "white" }} />
              {/* </a> */}
            </Link>
          </Badge>
          <Avatar sx={{ bgcolor: "#03abab" }}>A</Avatar>
        </Box>
      </Box>
    </Box>
  );
};

export default Container;
