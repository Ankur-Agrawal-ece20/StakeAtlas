import React from 'react'
import {
    AccessTimeOutlined,
    ArrowForwardIos,
    Facebook,
    Favorite,
    Instagram,
    LocationOnOutlined,
    Menu,
    Search,
    ShoppingCartOutlined,
    Twitter,
} from "@mui/icons-material";

const Footer = () => {
    const cols = [
        {
            heading: "Services",
            subHeadings: [
                "Sell Phone",
                "Sell Cars",
                "Find new Phone",
                "Become a verified seller",
            ],
        },
        {
            heading: "Company",
            subHeadings: ["About Us", "Contact Us"],
        },
        {
            heading: "Help & Support",
            subHeadings: [
                "FAQ",
                "Customer Support",
                "Terms & Conditions",
                "Privacy policy",
            ],
        },
    ];

    return (
        <div>
            <div className="hidden  bg-black h-[55vh] px-16 xl:flex items-center justify-center flex-col relative 4xl:h-[70vh]">
                <div className="4xl:w-full 3xl:w-full">
                    <h1 className="text-6xl font-medium text-white 4xl:text-7xl">
                        Stake Atlas
                    </h1>
                    <div className="flex items-start justify-between">
                        <div className="w-[50%] mt-5">
                            <p className="text-lg text-[#EFEFEF] font-normal w-[75%] 3xl:text-xl 4xl:text-2xl">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className="grid grid-cols-3 max-w-max gap-7 mt-10">
                                <Instagram className="text-[#1BE2CF] 4xl:text-3xl" />
                                <Facebook className="text-[#1BE2CF] 4xl:text-3xl" />
                                <Twitter className="text-[#1BE2CF] 4xl:text-3xl" />
                            </div>
                        </div>
                        <div className="w-[50%] flex items-center justify-center">
                            {cols.map((col, index) => (
                                <div
                                    className="w-[45%] flex items-start self-stretch"
                                    key={index}
                                >
                                    <div className="card p-3 ">
                                        <h2 className="text-[#FFE278] font-medium  mb-4 text-xl 4xl:text-2xl">
                                            {col.heading}
                                        </h2>
                                        {col.subHeadings.map((s, index) => (
                                            <h3
                                                className="font-normal text-white mb-1 text-base 4xl:text-xl"
                                                key={index}
                                            >
                                                {s}
                                            </h3>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <h1 className="text-lg font-normal text-white absolute bottom-3 left-16">
                    Ⓒ 2023 Stake Atlas, Inc.
                </h1>
            </div>

            <div className="xl:hidden bg-black px-3 pt-14">
                <div className="">
                    <h1 className="text-3xl font-semibold text-white">Stake Atlas</h1>
                    <p className="text-sm text-[#EFEFEF] font-normal mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className=" flex flex-wrap mt-5">
                    {cols.map((col, index) => (
                        <div className="w-[50%] flex items-start self-stretch" key={index}>
                            <div className="card">
                                <h2 className="text-[#FFE278] font-medium  mb-4 text-base 4xl:text-2xl">
                                    {col.heading}
                                </h2>
                                {col.subHeadings.map((s, index) => (
                                    <h3
                                        className="font-normal text-white mb-1 text-sm 4xl:text-xl"
                                        key={index}
                                    >
                                        {s}
                                    </h3>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-3 max-w-max gap-7 mt-2">
                    <Instagram className="text-[#1BE2CF] 4xl:text-3xl" />
                    <Facebook className="text-[#1BE2CF] 4xl:text-3xl" />
                    <Twitter className="text-[#1BE2CF] 4xl:text-3xl" />
                </div>
                <h1 className="text-sm font-normal text-white mt-8 pb-3">
                    Ⓒ 2023 Stake Atlas, Inc.
                </h1>
            </div>
        </div>
    )
}

export default Footer