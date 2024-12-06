import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import ExpandableListItem from "@/components/ExpandableListItem";
import HomeIcon from "@mui/icons-material/Home";

import logo from "@/assets/logo.png";
import { useNavigate } from "react-router-dom";
import { menu } from "@/config/menu";

interface Props {
  drawerWidth: number;
  mobileOpen: boolean;
  handleDrawerToggle: any;
}

export default function Sidebar({
  drawerWidth,
  mobileOpen,
  handleDrawerToggle,
}: Props) {
  const navigate = useNavigate();

  const drawer = (
    <div>
      <Toolbar
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img src={logo} style={{ width: 150 }} />
      </Toolbar>
      <List>
        {menu.map((item, i) => {
          if (item.type === "expandable") {
            return (
              <ExpandableListItem
                key={i}
                text={item.text}
                startIcon={item.startIcon}
                items={item.items}
              />
            );
          } else {
            return (
              <div key={i}>
                {item.type === "featured" && <Divider />}
                <ListItem sx={{ padding: "0px" }}>
                  <ListItemButton
                    onClick={() => {
                      item.href && navigate(item.href);
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color:
                          item.type === "featured"
                            ? "black"
                            : "icon.default.secondary",
                      }}
                    >
                      {item.startIcon}
                    </ListItemIcon>
                    <ListItemText>
                      <Typography
                        variant="title_small"
                        sx={{ color: "ap_text.default.default" }}
                      >
                        {item.text}
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                {item.type === "featured" && <Divider />}
              </div>
            );
          }
        })}
      </List>
    </div>
  );
  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
      }}
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "ap_background.default.secondary",
            color: "white",
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "ap_background.default.secondary",
            color: "white",
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
