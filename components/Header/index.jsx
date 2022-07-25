import HomeIcon from "@mui/icons-material/Home";

import Link from "next/link";
import { useEffect, useState } from "react";

import { hoverUnderline } from "./hoverUnderline.module.css";

const HeaderLinkItem = ({ children, to, dropdown = false }) => {
  const [dropdownDown, setDropdownDown] = useState(false);
	const [dropdownAnimation, setDropdownAnimation] = useState(false);
	let removeTimeout = 0;

	useEffect(() => {
		if (dropdownDown) {
			setDropdownAnimation(true);
		} else {
			setDropdownAnimation(false);
		}
	}, [dropdownDown]);

  return (
    <Link href={to}>
      <a
        className="none group cursor-pointer relative py-1 px-3 rounded-sm hover:bg-[rgba(255,255,255,.25)] text-white transition-colors duration-200"
        onMouseOver={() => {
          setDropdownDown(true);
					clearTimeout(removeTimeout);
        }}

				onMouseOut={() => {
					removeTimeout = setTimeout(() => setDropdownDown(false), 200);
				}}
      >
        {dropdown && dropdownDown && (
          <div
            className={`
							absolute left-1/2 -translate-x-1/2 bg-white text-black rounded-md transition-all duration-200 shadow-2xl
							opacity-0
							-top-full
							${dropdownAnimation ? "group-hover:top-[2.8rem] group-hover:opacity-100" : ""}
						`}
          >
            <div className="relative flex p-6">
              {dropdown.map((item, idx) => (
                <div key={idx} className="px-3">
                  <Link href={item.to}>
                    <a className={hoverUnderline}>{item.text}</a>
                  </Link>
                </div>
              ))}

              {/* triangle */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-full border-transparent border-[12px] border-t-0 border-b-white"></div>
            </div>
          </div>
        )}
        {children}
      </a>
    </Link>
  );
};

export default function Header() {
  const projectSections = [
    {
      to: "/projects/games",
      text: "Games",
    },

    {
      to: "/projects/web",
      text: "Websites",
    },

    {
      to: "/projects/apps",
      text: "Apps",
    },
  ];
  return (
    <div className="bg-black h-12 flex justify-center items-center">
      <HeaderLinkItem to="/">
        <HomeIcon />
      </HeaderLinkItem>

      <HeaderLinkItem to="/projects" dropdown={projectSections}>
        Projects
      </HeaderLinkItem>

      <HeaderLinkItem to="/about">About</HeaderLinkItem>
    </div>
  );
}
