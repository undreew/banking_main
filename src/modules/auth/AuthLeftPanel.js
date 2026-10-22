import React from 'react';
import Image from "next/image";

import AuthCTA from "@/modules/auth/AuthCTA";
import BnkLogo from "@/components/Logo/BnkLogo";
import { APP_API_VERSION } from "@/config/AppConfig";

const AuthLeftPanel = () => {
  return (
    <div
      className="col-span-5 bg-[linear-gradient(to_bottom,var(--color-card-bg)_40%,var(--color-primary)_150%)] relative">
      <Image src="/pattern-radial-ledger-hero.svg" alt="" width="500" height="500" loading="eager"
             className="absolute bottom-0 right-0"/>

      <div className="flex flex-col justify-between h-full text-white px-20 py-10">
        <BnkLogo/>

        <AuthCTA/>

        <span className="caption text-white/50">Spring Boot banking API v{APP_API_VERSION}</span>
      </div>
    </div>
  );
};

export default AuthLeftPanel;