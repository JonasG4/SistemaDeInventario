import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Dashboard() {

  return (
    <div>
      <h1 className="font-bold text-2xl text-cyan-900">Dashboard</h1>
      {/* <p>{sessionUser.user.nombre} {sessionUser.user.apellido}</p> */}
    </div>
  );
}
