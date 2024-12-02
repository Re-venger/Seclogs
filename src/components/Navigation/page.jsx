import Link from "next/link";
import React from "react";

const NavigationBar = () => {
  return (
    <>
      <div className="bg-[#99625B] p-4 flex justify-between">
        <p>NullShadow</p>
        <div className="flex gap-2">
          <Link href="#">Posts</Link>
          <Link href="#">Categories</Link>
          <Link href="#">theme</Link>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
