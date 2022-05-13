import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  DashboardOutlined,
  Dashboard,
  ExitToAppOutlined,
  GroupOutlined,
  Group,
  SummarizeOutlined,
  Summarize,
  BedroomChildRounded,
  SettingsApplications,
  SettingsApplicationsOutlined,
  StoreMallDirectory,
  StoreMallDirectoryOutlined,
} from "@mui/icons-material";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const iconStyle = "w-5 !fill-slate-400";
  const iconSelectStyle = "w-5 !fill-sky-600";
  const { pathname } = useLocation();
  let navigate = useNavigate();

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
      title: "Productos",
      icon: <StoreMallDirectoryOutlined className={`${iconStyle}`} />,
      iconSelected: <StoreMallDirectory className={`${iconSelectStyle}`} />,
      to: "/Productos",
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
          <div className=" w-full text-sky-600 font-bold flex items-center h-[80px] pl-8 text-lg">
            <BedroomChildRounded className="!fil-sky-600" />
            <span
              className={`${
                !sidebarOpen && "w-0 inline opacity-0 ml-0 pointer-events-none"
              } ml-3 origin-left duration-100 ease-in font-semibold  whitespace-nowrap `}
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
            w-full cursor-pointer flex items-center py-4 hover:bg-slate-100 pl-8 text-md text-slate-400 relative
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
                {/* {!sidebarOpen &&
                  <span className="absolute left-full ml-3 bg-slate-600 py-1 px-2 rounded-md text-slate-200">{menu.title}</span>
                } */}
              </li>
            ))}
            {/* LOGOUT */}
            <li
              className={`w-full  cursor-pointer flex items-center py-6 text-sm text-slate-500 mt-auto pl-8 `}
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
                <div onClick={() => setSidebarOpen(!sidebarOpen)}>
                  <Menu className="!cursor-pointer !fill-slate-400" />
                </div>
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

  