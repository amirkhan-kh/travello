"use client";

import { useTheme } from "next-themes";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
  className={`text-xl p-2 rounded-[50%] hover:scale-110 transition  ${
    theme === "light" ? "bg-gray-100" : "bg-gray-300"
  }`}
>
  {theme === "light" ? <RiMoonLine /> : <RiSunLine />}
</button>

  );
};

export default ThemeToggle;
