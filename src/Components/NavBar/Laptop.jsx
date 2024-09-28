import { useState } from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useAppContext } from "../../AppContext";
import { TbLogout2 } from "react-icons/tb";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Logo from "../../../public/Logo.png";
import { GoHome } from "react-icons/go";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaRegComment } from "react-icons/fa6";
import { BiMessageDetail } from "react-icons/bi";
import { PiListFill } from "react-icons/pi";
import { RiContactsLine } from "react-icons/ri";

function Laptop() {
    const Navigate = useNavigate();
    const { set_Auth } = useAppContext();
    const [Active_nav, setActive_nav] = useState("Home");
    const location = useLocation();
    useEffect(() => {
        setActive_nav(location.pathname.split("/")[1]);
    }, [location.pathname]);

    const [LogoutClicked, setLogoutClicked] = useState(false);
    const handleLogout = async () => {
        setLogoutClicked(true);
        try {
            // Send a request to the logout endpoint on the server
            const response = await axios.post(
                "http://localhost:3000/logout",
                {},
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );
            if (response.status == 204) {
                set_Auth(false);
                Swal.fire("Success!", `Logged Out Successfully`, "success");
                Navigate("/Login");
            } else {
                Swal.fire("Error!", `Something Went Wrong ,`, "error");
            }
        } catch (error) {
            Swal.fire("Error!", `Something Went Wrong `, "error");
        }
        setLogoutClicked(false);
    };
    return (
        <div className="flex flex-col gap-8 text-sm text-gray_v pl-8 py-4">
            <div className=" flex flex-col items-center justify-center">
                <img src={Logo} alt="Logo" className=" w-[220px]" />
                {/* <div className="text-sm text-gray_v font-semibold">Admin Panel</div> */}
            </div>
            <div>
                <div className=" font-semibold pb-4  flex gap-2 items-center ">
                    <GoHome className=" text-lg" />
                    Home
                </div>
                <div className=" flex flex-col gap-2 pl-2  ">
                    <Link
                        to={"/Home"}
                        className={` ${
                            Active_nav == "Home"
                                ? "bg-blue_v text-white px-4 "
                                : "bg-white hover:text-green_v"
                        }  transition-all duration-150  cursor-pointer py-1 select-none  w-[150px] rounded-full `}
                    >
                        <span>Statistics</span>
                    </Link>
                    <Link
                        to={"/Users"}
                        className={` ${
                            Active_nav == "Users"
                                ? "bg-blue_v text-white px-4 "
                                : "bg-white hover:text-green_v"
                        }  transition-all duration-150  cursor-pointer py-1 select-none  w-[150px] rounded-full  `}
                    >
                        <span>Users</span>
                    </Link>
                </div>
            </div>
            <div>
                <div className=" font-semibold pb-4  flex gap-2 items-center ">
                    <MdOutlineWorkOutline className=" text-lg" />
                    Courses
                </div>
                <div className=" flex flex-col gap-2 pl-2 ">
                    <Link
                        to={"/All_Courses"}
                        className={` ${
                            Active_nav == "All_Courses"
                                ? "bg-blue_v text-white px-4 "
                                : "bg-white hover:text-green_v"
                        }  transition-all duration-150  cursor-pointer py-1 select-none  w-[150px] rounded-full  `}
                    >
                        <span>All Courses</span>
                    </Link>
                    <Link
                        to={"/Courses_Requests"}
                        className={` ${
                            Active_nav == "Courses_Requests"
                                ? "bg-blue_v text-white px-4 "
                                : "bg-white hover:text-green_v"
                        }  transition-all duration-150  cursor-pointer py-1 select-none  w-[150px] rounded-full  `}
                    >
                        <span>Request</span>
                    </Link>
                    <Link
                        to={"/Courses_Applications"}
                        className={` ${
                            Active_nav == "Courses_Applications"
                                ? "bg-blue_v text-white px-4 "
                                : "bg-white hover:text-green_v"
                        }  transition-all duration-150  cursor-pointer py-1 select-none  w-[150px] rounded-full  `}
                    >
                        <span>Applications</span>
                    </Link>
                    {/* <Link
                        to={"/Courses_Accepted"}
                        className={` ${
                            Active_nav == "Courses_Accepted"
                                ? "bg-blue_v text-white px-4 "
                                : "bg-white hover:text-green_v"
                        }  transition-all duration-150  cursor-pointer py-1 select-none  w-[150px] rounded-full  `}
                    >
                        <span>Accepted</span>
                    </Link> */}
                    <Link
                        to={"/Courses_Paying"}
                        className={` ${
                            Active_nav == "Courses_Paying"
                                ? "bg-blue_v text-white px-4 "
                                : "bg-white hover:text-green_v"
                        }  transition-all duration-150  cursor-pointer py-1 select-none  w-[150px] rounded-full  `}
                    >
                        <span>Payment</span>
                    </Link>
                    {/* <Link
                        to={"/Courses_At_Work"}
                        className={` ${
                            Active_nav == "Courses_At_Work"
                                ? "bg-blue_v text-white px-4 "
                                : "bg-white hover:text-green_v"
                        }  transition-all duration-150  cursor-pointer py-1 select-none  w-[150px] rounded-full  `}
                    >
                        <span>At Work</span>
                    </Link> */}
                </div>
            </div>

            <div>
                <div className=" font-semibold pb-4  flex gap-2 items-center ">
                    <RiContactsLine className=" text-lg" />
                    Contact
                </div>{" "}
                <div className=" flex flex-col gap-2 pl-2  ">
                    <Link
                        to={"/Contact"}
                        className={` ${
                            Active_nav == "Contact"
                                ? "bg-blue_v text-white px-4 "
                                : "bg-white hover:text-green_v"
                        }  transition-all duration-150  cursor-pointer py-1 select-none  w-[150px] rounded-full  `}
                    >
                        <span> Messages</span>
                    </Link>
                </div>
            </div>
            <div className="pb-6">
                {LogoutClicked ? (
                    <div className="w-full ">
                        <span className="small-loader font-bold  w-full m-auto"></span>
                    </div>
                ) : (
                    <div
                        className="cursor-pointer w-full 
                                    flex items-center gap-3 text-red-500"
                        onClick={() => {
                            handleLogout();
                        }}
                    >
                        <TbLogout2 className="  text-xl" />
                        Logout
                    </div>
                )}
            </div>
        </div>
    );
}

export default Laptop;
