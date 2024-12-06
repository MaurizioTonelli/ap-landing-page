import {
  Collapse,
  List,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import { useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { useNavigate } from "react-router-dom";

interface Props {
  items?: any;
  startIcon?: any;
  text: string;
}

export default function ExpandableListItem({ items, startIcon, text }: Props) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();
  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon sx={{ color: "icon.default.secondary" }}>
          {startIcon}
        </ListItemIcon>
        <ListItemText>
          <Typography
            variant="title_small"
            sx={{ color: "ap_text.default.default" }}
          >
            {text}
          </Typography>
        </ListItemText>
        {open ? (
          <ExpandLess sx={{ color: "ap_text.default.default" }} />
        ) : (
          <ExpandMore sx={{ color: "ap_text.default.default" }} />
        )}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {items.map((item: any, index: number) => {
            return (
              <ListItemButton
                key={index}
                sx={{ pl: 4 }}
                onClick={() => {
                  navigate(item.href);
                }}
              >
                {/*Descomenta la linea de abajo si quieres que los subitems del menu tengan iconos*/}
                {/* <ListItemIcon sx={{ color: "icon.default.secondary" }}>
                  {item.startIcon}
                </ListItemIcon> */}
                <ListItemText sx={{ color: "ap_text.default.secondary" }}>
                  <Typography variant="label_medium">{item.text}</Typography>
                </ListItemText>
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
    </>
  );
}
