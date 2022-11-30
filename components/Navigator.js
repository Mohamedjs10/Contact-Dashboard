import * as React from "react";
import { useState } from "react";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PeopleIcon from "@mui/icons-material/People";
import DnsRoundedIcon from "@mui/icons-material/DnsRounded";
import PermMediaOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActual";
import { useSelector, useDispatch } from "react-redux";
import { tabActions } from "../components/store/store";

export default function Navigator(props) {
  const dispatch = useDispatch();
  const tab = useSelector((state) => state.tab.tab);
  const { ...other } = props;
  const categories = [
    {
      children: [
        {
          id: "Our Team",
          icon: <PeopleIcon />,
          active: tab == "Our Team" ? true : false,
        },
        {
          id: "Our Directors",
          icon: <DnsRoundedIcon />,
          active: tab == "Our Directors" ? true : false,
        },
        {
          id: "Media News",
          icon: <PermMediaOutlinedIcon />,
          active: tab == "Media News" ? true : false,
        },
        {
          id: "Media Events",
          icon: <PermMediaOutlinedIcon />,
          active: tab == "Media Events" ? true : false,
        },
      ],
    },
  ];

  const item = {
    py: "10px",
    px: 3,
    color: "rgba(255, 255, 255, 0.7)",
    "&:hover, &:focus": {
      bgcolor: "rgba(255, 255, 255, 0.08)",
    },
  };

  const itemCategory = {
    boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
    py: 1.5,
    px: 3,
  };

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem
          sx={{ ...item, ...itemCategory, fontSize: 22, color: "#fff" }}
        >
          Sarwa Dashboard
        </ListItem>

        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: "#101F33" }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: "#fff" }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active }) => (
              <ListItem
                disablePadding
                key={childId}
                onClick={() => {
                  dispatch(tabActions.update(childId));
                }}
              >
                <ListItemButton selected={active} sx={item}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{childId}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}

            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}
