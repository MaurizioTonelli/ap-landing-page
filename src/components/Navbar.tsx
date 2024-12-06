import {
  Badge,
  Box,
  Dialog,
  DialogTitle,
  IconButton,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import BallotIcon from "@mui/icons-material/Ballot";
import { useContext, useEffect, useState } from "react";
import { ColorModeContext } from "@/config/colorModeContext";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { DialogErrorFallback } from "./elements/DialogErrorFallback";
import { useAuth } from "@/lib/auth";
import { getCurrentMenuNode } from "../config/menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeIcon from "@mui/icons-material/Home";
import { BreadcrumbsArray } from "./elements/BreadcrumbsArray";

interface Props {
  drawerWidth: number;
  handleDrawerToggle: any;
}

const AccountMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { user, logout } = useAuth();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    logout();
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton size="medium" onClick={handleClick}>
        <AccountCircleIcon fontSize="large" />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
};
const pathMatches = (expression: string, path: string) => {
  const split = expression.split("/");
  const pathSplit = path.split("/");
  if (path.endsWith("/")) return false;
  if (split.length != pathSplit.length) return false;
  for (let i = 0; i < split.length; i++) {
    if (split[i].startsWith(":")) continue;
    if (split[i] != pathSplit[i]) return false;
  }
  return true;
};

const getBreadcrumbsOfRoute = (routes: any[], targetPath: string) => {
  for (let route of routes) {
    if (pathMatches(route.path, targetPath)) return route;
  }
  return null;
};

export default function Navbar({ drawerWidth, handleDrawerToggle }: Props) {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const [openRazonSocialDialog, setOpenRazonSocialDialog] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { parentNode, currentMenuNode } = getCurrentMenuNode(location.pathname);
  const breadcrumbRoutes = [
    {
      path: "/app/proyecto/tareas/:id",
      breadcrumbs: [
        { text: "Proyecto", icon: <HomeIcon />, path: "/app/proyecto/panel" },
        { text: "Tareas", icon: null, path: "/app/proyecto/tareas" },
        { text: "Tarea", icon: null, path: "" },
      ],
    },
    {
      path: "/app/chatbot/conversaciones/:id",
      breadcrumbs: [
        { text: "Chatbot", icon: <HomeIcon />, path: "/app/chatbot/panel" },
        {
          text: "Conversaciones",
          icon: null,
          path: "/app/chatbot/conversaciones",
        },
        { text: "Conversación", icon: null, path: "" },
      ],
    },
  ];

  const handleCloseRazonSocialDialog = (value: string) => {
    setOpenRazonSocialDialog(false);
  };

  const handleOpenRazonSocialDialog = () => {
    setOpenRazonSocialDialog(true);
  };

  const changeRouteLocation = (route: string) => {
    return location.pathname.split("/").slice(0, -1).concat(route).join("/");
  };
  const breadcrumbsObject = getBreadcrumbsOfRoute(
    breadcrumbRoutes,
    location.pathname,
  );
  return (
    <>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={2}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: `${theme.palette.mode === "light" ? "white" : "black"}`,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            {!breadcrumbsObject && (
              <Box sx={{ maxWidth: "100%", minWidth: 0 }}>
                {parentNode?.navQuickLinks && (
                  <Tabs
                    value={currentMenuNode?.tabIndex}
                    variant="scrollable"
                    scrollButtons={true}
                  >
                    {parentNode?.navQuickLinks?.map((link, i) => (
                      <Tab
                        key={i}
                        label={link.name}
                        sx={(theme) => ({
                          display: {
                            xs: "none",
                            sm: "flex",
                          },
                          ...theme.typography.label_medium,
                        })}
                        onClick={() => {
                          navigate(changeRouteLocation(link.href));
                        }}
                      />
                    ))}
                  </Tabs>
                )}
              </Box>
            )}
            {breadcrumbsObject && (
              <Box sx={{ maxWidth: "100%", minWidth: 0 }}>
                <BreadcrumbsArray breadcrumbs={breadcrumbsObject.breadcrumbs} />
              </Box>
            )}
            <Box sx={{ display: "flex", flexWrap: "nowrap" }}>
              {/* TODO: cuando este listo el dark theme, hay que activar el boton para cambiarlo aqui */}
              {/* <IconButton size="medium" onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === "light" && (
                  <DarkModeIcon fontSize="medium" />
                )}
                {theme.palette.mode === "dark" && (
                  <LightModeIcon fontSize="medium" />
                )}
              </IconButton> */}
              <IconButton
                size="medium"
                onClick={() => navigate("/app/notifications")}
              >
                <NotificationsIcon />
              </IconButton>
              <IconButton size="medium" onClick={handleOpenRazonSocialDialog}>
                <Badge color="secondary">
                  <BallotIcon fontSize="large" />
                </Badge>
              </IconButton>
              <AccountMenu />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <ErrorBoundary
        fallbackRender={({ error, resetErrorBoundary }) => {
          return (
            <>
              <DialogErrorFallback
                open={openRazonSocialDialog}
                onClose={handleCloseRazonSocialDialog}
              />
            </>
          );
        }}
      ></ErrorBoundary>
    </>
  );
}
