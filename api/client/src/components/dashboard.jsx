import { useSelector } from "react-redux";

export default function Dashboard() {
  const sessionUser = useSelector((state) => state.session);
  console.log("Hola", sessionUser);
  return (
    <div>
      <h1 className="font-bold text-2xl text-cyan-900">Dashboard</h1>
      {/* <p>{sessionUser.user.nombre} {sessionUser.user.apellido}</p> */}
    </div>
  );
}
