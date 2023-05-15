import {
  LockClock,
  ModeEditOutlineTwoTone,
  Pages,
  PendingActions,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

const SideMenu = () => {
  const location = useLocation();
  return (
    <div className="w-[19.5%] border-r-2 border-black">
      <div className=" w-full border-b-2 border-black flex items-center justify-center py-3 bg-[#F3CEB4]">
        <img src={require("../../assets/new design/spring.png")} alt="" />
      </div>
      <Link
        to="/sellnow/drafts"
        className={`${
          location.pathname.includes("/sellnow/drafts")
            ? "bg-sa-primary-yellow"
            : "bg-white"
        }  py-4 border-b-2 border-black flex items-center gap-x-3 pl-12`}
      >
        <ModeEditOutlineTwoTone />
        <h1 className="text-xl font-semibold text-black">Drafts</h1>
      </Link>
      <Link
        to="/sellnow/current"
        className={`${
          location.pathname.includes("/sellnow/current")
            ? "bg-sa-primary-yellow"
            : "bg-white"
        }  py-4 border-b-2 border-black flex items-center gap-x-3 pl-12`}
      >
        <Pages />
        <h1 className="text-xl font-semibold text-black">Current</h1>
      </Link>
      <Link
        to="/sellnow/expired"
        className={`${
          location.pathname.includes("/sellnow/expired")
            ? "bg-sa-primary-yellow"
            : "bg-white"
        }  py-4 border-b-2 border-black flex items-center gap-x-3 pl-12`}
      >
        <LockClock />
        <h1 className="text-xl font-semibold text-black">Expired</h1>
      </Link>
      <Link
        to="/sellnow/pending"
        className={`${
          location.pathname.includes("/sellnow/pending") ||
          location.pathname.includes("/sellnow/approval")
            ? "bg-sa-primary-yellow"
            : "bg-white"
        }  py-4 border-b-2 border-black flex items-center gap-x-3 pl-12`}
      >
        <PendingActions />
        <h1 className="text-xl font-semibold text-black">Pending</h1>
      </Link>
    </div>
  );
};

export default SideMenu;
