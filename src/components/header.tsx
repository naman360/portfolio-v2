"use client";
import React, { useState } from "react";
import { headerOptions } from "../util/data";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  const [activeOption, setActiveOption] = useState("");
  return (
    <div className="flex justify-around bg-white h-fit w-8/12 shadow-md rounded-full p-2">
      {headerOptions.map((option) => (
        <Link
          key={option.name}
          href={option.link}
          className="p-2 cursor-pointer"
        >
          {option.name}
        </Link>
      ))}
    </div>
  );
};

export default Header;
