import { ReactElement } from "react";
import HomeIcon from "@mui/icons-material/Home";
import EngineeringIcon from "@mui/icons-material/Engineering";
import BusinessIcon from "@mui/icons-material/Business";
import StoreIcon from "@mui/icons-material/Store";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import GroupIcon from "@mui/icons-material/Group";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CategoryIcon from "@mui/icons-material/Category";
import PersonIcon from "@mui/icons-material/Person";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ChatIcon from "@mui/icons-material/Chat";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";

type QuickLink = {
  tabIndex: number;
  name: string;
  href: string;
  hrefName?: string;
};

type MenuItem = {
  text: string;
  startIcon: ReactElement;
  type: string;
  href?: string;
  hrefName?: string;
  navQuickLinks?: QuickLink[];
  items?: MenuItem[];
};

export const menu: MenuItem[] = [
  {
    text: "Inicio",
    startIcon: <HomeIcon />,
    href: "dashboard",
    hrefName: "dashboard",
    navQuickLinks: [
      {
        tabIndex: 0,
        name: "Inicio",
        href: "dashboard",
      },
    ],
    type: "featured",
  },
  {
    text: "Mantenimiento",
    startIcon: <EngineeringIcon />,
    href: "mantenimiento",
    hrefName: "mantenimiento",
    navQuickLinks: [
      {
        tabIndex: 0,
        name: "Razones Sociales",
        href: "razones-sociales",
      },
      {
        tabIndex: 1,
        name: "Unidades de Negocio",
        href: "unidades-de-negocio",
      },
      {
        tabIndex: 2,
        name: "Proyectos",
        href: "proyectos",
      },
      {
        tabIndex: 3,
        name: "Usuarios y permisos",
        href: "usuarios-y-permisos",
      },
      {
        tabIndex: 4,
        name: "Colaboradores",
        href: "colaboradores",
      },
      {
        tabIndex: 5,
        name: "Cuentas Bancarias",
        href: "cuentas-bancarias",
      },
      {
        tabIndex: 6,
        name: "Catálogos",
        href: "catalogos",
      },
      {
        tabIndex: 7,
        name: "Clientes",
        href: "clientes",
      },
      {
        tabIndex: 8,
        name: "Proveedores",
        href: "proveedores",
      },
    ],
    items: [
      {
        text: "Razones Sociales",
        startIcon: <BusinessIcon />,
        type: "item",
        href: "mantenimiento/razones-sociales",
      },
      {
        text: "Unidades de Negocio",
        startIcon: <StoreIcon />,
        type: "item",
        href: "mantenimiento/unidades-de-negocio",
      },
      {
        text: "Proyectos",
        startIcon: <WorkOutlineIcon />,
        type: "item",
        href: "mantenimiento/proyectos",
      },
      {
        text: "Usuarios y permisos",
        startIcon: <GroupIcon />,
        type: "item",
        href: "mantenimiento/usuarios-y-permisos",
      },
      {
        text: "Colaboradores",
        startIcon: <GroupIcon />,
        type: "item",
        href: "mantenimiento/colaboradores",
      },
      {
        text: "Cuentas Bancarias",
        startIcon: <AccountBalanceIcon />,
        type: "item",
        href: "mantenimiento/cuentas-bancarias",
      },
      {
        text: "Catálogos",
        startIcon: <CategoryIcon />,
        type: "item",
        href: "mantenimiento/catalogos",
      },
      {
        text: "Clientes",
        startIcon: <PersonIcon />,
        type: "item",
        href: "mantenimiento/clientes",
      },
      {
        text: "Proveedores",
        startIcon: <LocalShippingIcon />,
        type: "item",
        href: "mantenimiento/proveedores",
      },
    ],
    type: "expandable",
  },
  {
    text: "Proyecto",
    startIcon: <FolderSpecialIcon />,
    href: "proyecto",
    hrefName: "proyecto",
    navQuickLinks: [
      {
        tabIndex: 0,
        name: "Panel",
        href: "panel",
      },
      {
        tabIndex: 1,
        name: "Presupuesto",
        href: "presupuesto",
      },
      {
        tabIndex: 2,
        name: "Tareas",
        href: "tareas",
      },
      {
        tabIndex: 3,
        name: "Movimientos",
        href: "movimientos",
      },
      {
        tabIndex: 4,
        name: "Calendario de obra",
        href: "calendario-de-obra",
      },
    ],
    items: [
      {
        text: "Panel",
        startIcon: <BusinessIcon />,
        type: "item",
        href: "proyecto/panel",
      },
      {
        text: "Presupuesto",
        startIcon: <StoreIcon />,
        type: "item",
        href: "proyecto/presupuesto",
      },
      {
        text: "Tareas",
        startIcon: <WorkOutlineIcon />,
        type: "item",
        href: "proyecto/tareas",
      },
      {
        text: "Movimientos",
        startIcon: <GroupIcon />,
        type: "item",
        href: "proyecto/movimientos",
      },
      {
        text: "Calendario de obra",
        startIcon: <GroupIcon />,
        type: "item",
        href: "proyecto/calendario-de-obra",
      },
    ],
    type: "expandable",
  },
  {
    text: "CxC y CxP",
    startIcon: <AccountBalanceWalletIcon />,
    href: "cxc-y-cxp",
    hrefName: "cxc-y-cxp",
    navQuickLinks: [
      {
        tabIndex: 0,
        name: "CxC y CxP",
        href: "cxc-y-cxp",
      },
    ],
    type: "item",
  },
  {
    text: "Chatbot",
    startIcon: <ChatIcon />,
    href: "chatbot",
    hrefName: "chatbot",
    navQuickLinks: [
      {
        tabIndex: 0,
        name: "Panel",
        href: "panel",
      },
      {
        tabIndex: 1,
        name: "Conversaciones",
        href: "conversaciones",
      },
    ],
    items: [
      {
        text: "Panel",
        startIcon: <BusinessIcon />,
        type: "item",
        href: "chatbot/panel",
      },
      {
        text: "Conversaciones",
        startIcon: <StoreIcon />,
        type: "item",
        href: "chatbot/conversaciones",
      },
    ],
    type: "expandable",
  },
  {
    text: "Configuración",
    startIcon: <SettingsIcon />,
    href: "configuracion",
    hrefName: "configuracion",
    navQuickLinks: [
      {
        tabIndex: 0,
        name: "Perfil",
        href: "perfil",
      },
      {
        tabIndex: 1,
        name: "Notificaciones",
        href: "notificaciones",
      },
      {
        tabIndex: 2,
        name: "Pago",
        href: "pago",
      },
    ],
    items: [
      {
        text: "Perfil",
        startIcon: <BusinessIcon />,
        type: "item",
        href: "configuracion/perfil",
      },
      {
        text: "Notificaciones",
        startIcon: <StoreIcon />,
        type: "item",
        href: "configuracion/notificaciones",
      },
      {
        text: "Pago",
        startIcon: <StoreIcon />,
        type: "item",
        href: "configuracion/pago",
      },
    ],
    type: "expandable",
  },
  {
    text: "Ayuda",
    startIcon: <HelpIcon />,
    href: "ayuda",
    hrefName: "ayuda",
    navQuickLinks: [
      {
        tabIndex: 0,
        name: "Ayuda",
        href: "ayuda",
      },
    ],
    type: "item",
  },
];

export const getCurrentMenuNode = (pathname: string) => {
  const pathWithAppRemoved = pathname.replace("/app", "");
  const pathArray = pathWithAppRemoved.split("/");
  pathArray.splice(0, 1);
  const section = pathArray[0] ?? "";
  const parentNode = menu.find((item) => item.hrefName === section);
  const currentChildRoute = pathArray[pathArray.length - 1];
  const currentMenuNode = parentNode?.navQuickLinks?.find((link) => {
    if (link.hrefName) return link.hrefName === currentChildRoute;
    else return link.href === currentChildRoute;
  });

  return { parentNode, currentMenuNode };
};
