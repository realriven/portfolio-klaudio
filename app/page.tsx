import Image from "next/image";
import React from "react";

// Importing images
import OpenFOAM from "@/public/images/svg/OpenFOAMLogo.svg";
import Matlab from "@/public/images/svg/MatlabLogo.svg";
import Python from "@/public/images/svg/PythonLogo.svg";
import Java from "@/public/images/svg/JavaLogo.svg";
import ReactNative from "@/public/images/svg/ReactLogo.svg";
import TS from "@/public/images/svg/TSLogo.svg";

// Components
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Menu from "@/components/Layout/Menu";

// Style definition
const smallLogoStyle = "w-12 h-12 rounded bg-black";
const largeLogoStyle = "w-40 h-12 rounded bg-black";

export default function Home() {
  return (
    <BackgroundGradientAnimation 
      className="z-0 flex flex-col items-center p-24 bg-black min-h-screen"
    >
      {/* Fixed navigation at the top */}
      <div className="fixed top-0 left-0 w-full flex justify-center py-4 z-50 backdrop-blur-sm bg-black">
        <Menu/>
      </div>

      {/* Main content */}
      <div className="mt-16 flex gap-4">
        <Image
          src={OpenFOAM}
          alt="OpenFOAM Logo"
          width={128}
          height={128}
          className={largeLogoStyle}
        />
        <Image
          src={Matlab}
          alt="Matlab Logo"
          width={128}
          height={128}
          className={smallLogoStyle}
        />
        <Image
          src={Python}
          alt="Python Logo"
          width={128}
          height={128}
          className={smallLogoStyle}
        />
        <Image
          src={Java}
          alt="Java Logo"
          width={128}
          height={128}
          className={smallLogoStyle}
        />
        <Image
          src={ReactNative}
          alt="React Logo"
          width={128}
          height={128}
          className={smallLogoStyle}
        />
        <Image
          src={TS}
          alt="TypeScript Logo"
          width={128}
          height={128}
          className={smallLogoStyle}
        />
      </div>
    </BackgroundGradientAnimation>
  );
}