import { useEffect, useState } from "react";

export default function HamburgerMenu() {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1536) setShowNavbar(false);
      else setShowNavbar(true);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return window.removeEventListener("resize", () => {});
  }, []);
  return (
    <>
      {showNavbar && (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
            className="cursor-pointer whitespace-nowrap"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
            >
              <path d="M5 5L12 12L19 5">
                <animate
                  fill="freeze"
                  attributeName="d"
                  dur="0.4s"
                  values="M5 5L12 12L19 5;M5 5L12 5L19 5"
                />
              </path>
              <path d="M12 12H12">
                <animate
                  fill="freeze"
                  attributeName="d"
                  dur="0.4s"
                  values="M12 12H12;M5 12H19"
                />
              </path>
              <path d="M5 19L12 12L19 19">
                <animate
                  fill="freeze"
                  attributeName="d"
                  dur="0.4s"
                  values="M5 19L12 12L19 19;M5 19L12 19L19 19"
                />
              </path>
            </g>
          </svg>
        </div>
      )}
    </>
  );
}
