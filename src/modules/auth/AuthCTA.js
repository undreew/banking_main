import React from 'react';

import { List, LockIcon, ShieldLock } from "lucide-react";

const FEATURES = [
  { Icon: ShieldLock, description: "Your balance is protected from double spending" },
  { Icon: LockIcon, description: "Sign-in sessions you can see and end" },
  { Icon: List, description: "Every transaction stays on the ledger" }
];

const AuthCTAFeatures = ({ Icon, description }) => {
  return (
    <dd className="section flex items-center gap-2">
      <div className="bg-valid-bg/20 p-2 rounded-lg">
        {!!Icon && <Icon className="text-valid-fg"/>}
      </div>
      <span>{description}</span>
    </dd>
  )
}

const AuthCTA = () => {
  return (
    <div>
      <div className="mb-8 flex flex-col gap-5">
        <h1 className="display5">
          Money that moves
          <br/>
          once, and only
          <br/>
          when you say so.
        </h1>

        <p className="font-normal text-xl text-white/50">
          Every transfer carries a one-time key, so a retry never pays twice
          <br/>
          Sessions renew quietly and end when you log out.
        </p>
      </div>

      <dl className="flex flex-col gap-7">
        {FEATURES.map((item, index) => {
          return <AuthCTAFeatures key={index} {...item} />
        })}
      </dl>
    </div>
  );
};

export default AuthCTA;