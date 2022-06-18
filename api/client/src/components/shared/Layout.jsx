import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../store/session";
import { useDispatch } from "react-redux";

import {
  Menu,
  DashboardOutlined,
  Dashboard,
  ExitToAppOutlined,
  GroupOutlined,
  Group,
  SummarizeOutlined,
  Summarize,
  SettingsApplications,
  SettingsApplicationsOutlined,
  StoreMallDirectory,
  StoreMallDirectoryOutlined,
  Category,
  CategoryOutlined,
} from "@mui/icons-material";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const iconStyle = "w-5 !fill-slate-400";
  const iconSelectStyle = "w-5 !fill-sky-600";
  const { pathname } = useLocation();
  let navigate = useNavigate();

  const dispatch = useDispatch();

  const removeUser = async() => {
    return await dispatch(logout()).then(() => {
      navigate("/login");
    });
  };

  const Menus = [
    {
      title: "Dashboard",
      icon: <DashboardOutlined className={`${iconStyle}`} />,
      iconSelected: <Dashboard className={`${iconSelectStyle}`} />,
      to: "/",
    },
    {
      title: "Usuarios",
      icon: <GroupOutlined className={`${iconStyle}`} />,
      iconSelected: <Group className={`${iconSelectStyle}`} />,
      to: "/usuarios/",
    },
    {
      title: "Proveedores",
      icon: <GroupOutlined className={`${iconStyle}`} />,
      iconSelected: <Group className={`${iconSelectStyle}`} />,
      to: "/proveedores/",
    },
    {
      title: "Productos",
      icon: <StoreMallDirectoryOutlined className={`${iconStyle}`} />,
      iconSelected: <StoreMallDirectory className={`${iconSelectStyle}`} />,
      to: "/Productos",
    },
    {
      title: "Categorias",
      icon: <CategoryOutlined className={`${iconStyle}`} />,
      iconSelected: <Category className={`${iconSelectStyle}`} />,
      to: "/Categorias",
    },
    {
      title: "Reportes",
      icon: <SummarizeOutlined className={`${iconStyle}`} />,
      iconSelected: <Summarize className={`${iconSelectStyle}`} />,
      to: "/reportes/",
    },
    {
      title: "Configuraciones",
      icon: <SettingsApplicationsOutlined className={`${iconStyle}`} />,
      iconSelected: <SettingsApplications className={`${iconSelectStyle}`} />,
      to: "/configuraciones",
    },
  ];

  return (
    <div>
      <div className="min-w-screen min-h-screen bg-slate-200 bg-opacity-60 flex flex-row">
        {/* -------------------- SIDEBAR ---------------------- */}
        <aside
          className={`bg-slate-50 min-h-full ${
            sidebarOpen ? "w-72" : "w-24"
          } duration-200 flex rounded-l-lg border-slate-300 border-r-[2px] flex-col relative`}
        >
          {/* LOGO */}
          <div className=" w-full text-sky-600 font-bold flex items-center h-[80px] pl-8 lg:text-lg sm:text-sm md:text-base">
            <div onClick={() => setSidebarOpen(!sidebarOpen)}>
              <Menu className="!fil-sky-600 cursor-pointer" />
            </div>
            <span
              className={`${
                !sidebarOpen && "w-0 inline opacity-0 ml-0 pointer-events-none"
              } ml-3 origin-left duration-100 ease-in font-bold  whitespace-nowrap`}
            >
              Muebleria Perez
            </span>
          </div>

          {/* NAV LINKS */}
          <ul className="flex flex-col justify-center w-full h-full pt-8">
            {Menus.map((menu, index) => (
              <li
                key={index}
                className={`
            w-full cursor-pointer flex items-center py-4 hover:bg-slate-100 pl-8 lg:text-lg sm:text-sm md:text-base text-slate-400 relative
            ${
              menu.to === pathname &&
              "bg-slate-100 border-r-[2px] border-sky-600 duration-200 ease-in"
            }`}
                onClick={() => navigate(menu.to)}
              >
                {menu.to === pathname ? menu.iconSelected : menu.icon}
                <p
                  className={`
              ml-3 origin-left duration-100 ease-in  whitespace-nowrap
              ${!sidebarOpen && "w-0 inline opacity-0 ml-0 pointer-events-none"}
              ${
                menu.to === pathname &&
                "text-sky-600 font-semibold duration-200 ease-in-out"
              }
              `}
                >
                  {menu.title}
                </p>
              </li>
            ))}
            {/* LOGOUT */}
            <li
              className={`w-full cursor-pointer flex items-center py-6 text-sm text-slate-500 mt-auto pl-8`}
              onClick={() => removeUser()}
            >
              <ExitToAppOutlined className={`${iconStyle} !fill-sky-600`} />
              <p
                className={`${
                  !sidebarOpen &&
                  "w-0 inline opacity-0 ml-0 pointer-events-none"
                } ml-3 origin-left duration-100 ease-in font-semibold whitespace-nowrap`}
              >
                Cerrar sesión
              </p>
            </li>
          </ul>
        </aside>
        {/* --------------------- FIN SIDEBAR ------------------------- */}
        <div className="flex flex-col w-full">
          {/* ------------------------- NAVBAR ---------------------------------- */}
          <header className="w-full">
            <nav className="bg-slate-50 h-[80px] border-b-[2px] border-slate-300 w-full px-5">
              <div className="w-full flex items-center h-full">
                {/* CONTENIDO  */}
                <div></div>
              </div>
            </nav>
          </header>
          {/* ------------------------------ FIN NAVBAR ----------------------------- */}

          {/* ------------------------------------ CONTENIDO PRINCIPAL ------------------------- */}
          <main className="min-w-full min-h-full p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
