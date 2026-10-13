'use client'
import React, { Fragment } from 'react';


import BnkAlert from "@/components/Alert/BnkAlert";
import BnkSidebar from "@/components/Sidebar/BnkSidebar";
import { BadgeInfoIcon, ClockAlert } from "lucide-react";
import BnkAccountStatusBadge from "@/components/Badge/BnkAccountStatusBadge";
import BnkCalloutWithAction from "@/components/Callout/BnkCalloutWithAction";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Page = () => {
    return (
        <Fragment>
            <BnkSidebar/>

            <div className="w-full pt-5">
                <div className="container m-auto px-5 flex flex-col gap-5">
                    <h1 className="text-5xl font-heading font-[650]">Checking ***5048</h1>
                    <h1 className="text-2xl font-sans font-normal">Transfer sent to Noor H.</h1>
                    <h1 className="text-xl font-mono font-semibold">48217 39026 15048</h1>

                    <BnkCalloutWithAction
                        className={'w-1/2'}
                        title={'Ana Sousa'}
                        avatarFallback={'AS'}
                        description={'Checking ***6474'}
                        actionProps={{ text: "Change", onClick: () => console.log('Changing...') }}
                    />

                    <Card className="card">
                        <CardContent>
                            <BnkAccountStatusBadge status={'ACTIVE'}/>
                            <BnkAccountStatusBadge status={'FROZEN'}/>
                            <BnkAccountStatusBadge status={'CLOSED'}/>
                        </CardContent>
                    </Card>

                    <Card size="lg" className="card border-transparent outline-transparent">
                        <CardHeader>
                            <CardTitle className="font-heading font-bold text-3xl">
                                Welcome back
                            </CardTitle>
                            <CardDescription className="font-sans font-medium text-[1rem]">
                                Sign in to see your accounts and move money.
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <BnkAlert
                        variant="pending"
                        icon={<ClockAlert/>}
                        title={"Too many sign-in attempts."}
                        description={<>Try again in <span className="font-bold">0:48</span>. Your account is not
                            blocked.</>}
                    />

                    <BnkAlert
                        variant="info"
                        icon={<BadgeInfoIcon/>}
                        title={"You're signed out"}
                        description={"Your session on this device has ended."}
                    />

                    <BnkAlert
                        variant="danger"
                        icon={<BadgeInfoIcon/>}
                        title={"409 conflict"}
                        description={"Transaction cannot be reversed (already reversed, or not completed)."}
                    />
                </div>
            </div>
        </Fragment>
    );
};

export default Page;