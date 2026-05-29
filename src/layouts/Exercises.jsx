import { Outlet } from "react-router-dom";
import BackButton from "../components/ui/BackButton"

export default function Exercises() {
  return (
    <>
      <BackButton />
      <Outlet />
    </>
  );
}
