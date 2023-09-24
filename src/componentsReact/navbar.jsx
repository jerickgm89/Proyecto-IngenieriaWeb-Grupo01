import React from "react";

import logo from '../img/logo.png'

import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Chip,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  UserCircleIcon,
  CubeTransparentIcon,
  Bars3Icon,
  XMarkIcon,
  FlagIcon,
  ChatBubbleOvalLeftIcon,
  UsersIcon,
  FolderIcon,
  Square3Stack3DIcon,
  RocketLaunchIcon,
  FaceSmileIcon,
  PuzzlePieceIcon,
  GiftIcon,
  WrenchIcon,
  HomeModernIcon,
  SparklesIcon,
  MapIcon,
  WrenchScrewdriverIcon,
  CpuChipIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";


 
const colors = {
  blue: "bg-blue-50 text-blue-500",
  orange: "bg-orange-50 text-orange-500",
  green: "bg-green-50 text-green-500",
  "blue-gray": "bg-blue-gray-50 text-blue-gray-500",
  purple: "bg-purple-50 text-purple-500",
  teal: "bg-teal-50 text-teal-500",
  cyan: "bg-cyan-50 text-cyan-500",
  pink: "bg-pink-50 text-pink-500",

  red: "bg-red-500 text-red-500",
};
 
const navListMenuItems = [
  {
    color: "purple",
    icon: WrenchScrewdriverIcon,
    title: "Mantenimiento",
    description: "Cuidamos tu vehiculo como si fuera nuestro.",
    href: "/mantenimiento",
  },
  {
    color: "orange",
    icon: CpuChipIcon,
    title: "Mecanica Especializada",
    description: "Detectamos fallas actuales y prevenimos fallas futuras.",
    href: "/mecanica-especializada",
  },
  {
    color: "green",
    icon: Square3Stack3DIcon,
    title: "Planchado y pintura",
    description: "Renovamos tu vehiculo con materiales de alta calidad",
    href: "/planchado-pintura",
  },
  {
    color: "teal",
    icon: SwatchIcon,
    title: "Servicios complementarios",
    description: "Contamos con servicios de lavado, engrase y mas.",
    href: "/mantenimiento",
  },
];
 
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
 
  const renderItems = navListMenuItems.map(
    ({ icon, title, description, color, href }, key) => (
      <a href={href} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className={`rounded-lg p-5 ${colors[color]}`}>
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm"
            >
              {title}
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );
 
  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-normal">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <WrenchIcon className="h-[18px] w-[18px]" />
              Servicios
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-4 gap-y-2">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}
 
function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <a href='/'>
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            <HomeModernIcon className="h-[18px] w-[18px]" />
            Inicio
          </ListItem>
        </a>

      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <a href='/promociones'>
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            <SparklesIcon className="h-[18px] w-[18px]" />
            Promociones
          </ListItem>
        </a>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <MapIcon className="h-[18px] w-[18px]" />
          Contactanos
        </ListItem>
      </Typography>
    </List>
  );
}
 
export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  return (
    <Navbar className="sticky top-0 z-10 mx-auto max-w-full px-4 py-2">
      <div className="flex items-center justify-between text-blue-gray-900">
        <img src={logo.src} alt="logo" />
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <a href='/admin/LayoutLogin'>
            <Button variant="text" size="sm" color="red">
              Inicia Sesion
            </Button>
          </a>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <a href='/admin/LayoutLogin'>
            <Button variant="outlined" size="sm" color="red" fullWidth href='/'> 
              Inicia Sesion
            </Button>
          </a>

        </div>
      </Collapse>
    </Navbar>
  );
}