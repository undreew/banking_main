'use client'
import React, { Fragment } from 'react';

import { BadgeInfoIcon, ClockAlert, PlusIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import BnkCard from "@/components/Card/BnkCard";
import { Switch } from "@/components/ui/switch";
import BnkAlert from "@/components/Alert/BnkAlert";
import BnkButton from "@/components/Button/BnkButton";
import BnkAvatar from "@/components/Avatar/BnkAvatar";
import BnkSidebar from "@/components/Sidebar/BnkSidebar";
import { Field, FieldLabel } from "@/components/ui/field";
import BnkUserRoleBadge from "@/components/Badge/BnkUserRoleBadge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BnkUserStatusBadge from "@/components/Badge/BnkUserStatusBadge";
import BnkAccountStatusBadge from "@/components/Badge/BnkAccountStatusBadge";
import BnkCalloutWithAction from "@/components/Callout/BnkCalloutWithAction";
import BnkTransactionStatusBadge from "@/components/Badge/BnkTransactionStatusBadge";
import {
    Pagination,
    PaginationItem,
    PaginationNext,
    PaginationContent,
    PaginationPrevious
} from "@/components/ui/pagination";


const Page = () => {
    return (
        <Fragment>
            <BnkSidebar/>

            <div className="w-full py-5">
                <div className="container m-auto px-5 flex flex-col gap-5">

                    <BnkCard title="Typography">
                        <h1 className="text-muted">display5</h1>
                        <div className="display5">$23,282.35</div>

                        <h1 className="text-muted">pageTitle</h1>
                        <div className="pageTitle">Accounts</div>

                        <h1 className="text-muted">cardTitle </h1>
                        <div className="cardTitle">Welcome Back</div>

                        <h1 className="text-muted">section</h1>
                        <div className="section">Devices</div>

                        <h1 className="text-muted">body</h1>
                        <div className="body">Sign in to see your accounts and move money.</div>

                        <h1 className="text-muted">bodyMedium</h1>
                        <div className="bodyMedium">Account number</div>

                        <h1 className="text-muted">button</h1>
                        <div className="button">Move money</div>

                        <h1 className="text-muted">caption</h1>
                        <div className="caption">Opened Apr 2025</div>

                        <h1 className="text-muted">label</h1>
                        <div className="eyebrow">Checking</div>

                        <h1 className="text-muted">mono</h1>
                        <div className="mono">48217 39026 15048</div>
                    </BnkCard>

                    <BnkCard title="Buttons">
                        <div className="flex gap-2">
                            <BnkButton>Move money</BnkButton>
                            <BnkButton variant="bnkOutline">Cancel</BnkButton>
                            <BnkButton variant="bnkGhost">Cancel</BnkButton>
                            <BnkButton variant="bnkDanger">Sign out all</BnkButton>
                            <BnkButton variant="bnkDisabled">Try again in 48s</BnkButton>
                        </div>
                    </BnkCard>

                    <BnkCard title="Account Status">
                        <div className="flex gap-2">
                            <BnkAccountStatusBadge status={"ACTIVE"}/>
                            <BnkAccountStatusBadge status={"FROZEN"}/>
                            <BnkAccountStatusBadge status={"CLOSED"}/>
                        </div>
                    </BnkCard>

                    <BnkCard title="Transaction Status">
                        <div className="flex gap-2">
                            <BnkTransactionStatusBadge status={"COMPLETED"}/>
                            <BnkTransactionStatusBadge status={"PENDING"}/>
                            <BnkTransactionStatusBadge status={"FAILED"}/>
                            <BnkTransactionStatusBadge status={"REVERSED"}/>
                        </div>
                    </BnkCard>

                    <BnkCard title="User Status">
                        <div className="flex gap-2">
                            <BnkUserStatusBadge status={"ENABLED"}/>
                            <BnkUserStatusBadge status={"DISABLED"}/>
                            <BnkUserRoleBadge status={"USER"}/>
                            <BnkUserRoleBadge status={"ADMIN"}/>
                        </div>
                    </BnkCard>

                    <BnkCard title="Alerts ">
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
                    </BnkCard>

                    <BnkCard title="Callout With Action">
                        <BnkCalloutWithAction
                            alt="AS"
                            title={'Ana Sousa'}
                            className={'w-1/2'}
                            description={'Checking ***6474'}
                            actionProps={{ text: "Change", onClick: () => console.log('Changing...') }}
                        />
                    </BnkCard>

                    <BnkCard title="Cards">
                        <div className="flex gap-5">
                            <BnkCard size="lg" className="bg-card-bg w-full">
                                <h1 className="body text-white/50">Total balance</h1>
                                <span className="cardTitle text-white">$23,282</span>
                            </BnkCard>

                            <BnkCard size="lg" className="border-dashed text-white w-full">
                                <h1 className="cardTitle text-black dark:text-white">6</h1>
                                <span className="body text-muted">Open accounts</span>
                            </BnkCard>

                            <BnkCard size="lg" className="border-dashed muted w-full">
                                <div className="flex items-center text-muted font-bold">
                                    <PlusIcon size="15"/>
                                    <span className="ml-2">Open a new account</span>
                                </div>
                            </BnkCard>
                        </div>
                    </BnkCard>

                    <BnkCard title="Inputs">
                        <div className="flex gap-2">
                            <Field>
                                <FieldLabel htmlFor="input-field-username">Email</FieldLabel>
                                <Input
                                    id="input-field-email"
                                    type="text"
                                    placeholder="Enter your email"
                                    className="focus-visible:ring-2 focus-visible:ring-primary dark:focus-visible:ring-primary/80"
                                />
                            </Field>

                            <Field data-invalid>
                                <FieldLabel htmlFor="input-field-username">Email</FieldLabel>
                                <Input
                                    id="input-field-email"
                                    type="text"
                                    placeholder="Enter your email"
                                    className="focus-visible:ring-2 focus-visible:ring-primary"
                                    aria-invalid
                                />
                            </Field>
                        </div>
                    </BnkCard>

                    <BnkCard title="SWITCH * TABS * AVATAR * SEARCH * PAGINATION">
                        <div className="flex items-center gap-2">
                            <Switch className="cursor-pointer" defaultChecked/>
                            <Switch className="cursor-pointer"/>

                            <Tabs>
                                <TabsList className="w-75">
                                    <TabsTrigger value="deposit" className="cursor-pointer data-active:font-bold data-active:border-0">Deposit</TabsTrigger>
                                    <TabsTrigger value="withdraw" className="cursor-pointer data-active:font-bold data-active:border-0">Withdraw</TabsTrigger>
                                    <TabsTrigger value="transfer" className="cursor-pointer data-active:font-bold data-active:border-0">Transfer</TabsTrigger>
                                </TabsList>
                            </Tabs>

                            <BnkAvatar src="" alt="JD" />

                            <Pagination className="w-full">
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationPrevious className="bg-white border-2 border-muted/20 hover:bg-transparent cursor-pointer dark:bg-transparent dark:hover:bg-muted/20" />
                                    </PaginationItem>
                                    <div className="caption mx-2">
                                        Page 1 of 3
                                    </div>
                                    <PaginationItem>
                                        <PaginationNext className="bg-white border-2 border-muted/20 hover:bg-transparent cursor-pointer dark:bg-transparent dark:hover:bg-muted/20" />
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </div>
                    </BnkCard>

                    <BnkCard title="TABLE HEADER">
                        <Tabs>
                            <TabsList className="w-75" variant="line">
                                <TabsTrigger value="deposit" className="cursor-pointer hover:text-muted/60 data-active:text-muted/60 data-active:hover:text-muted/60 data-active:after:bg-muted/60">Deposit</TabsTrigger>
                                <TabsTrigger value="withdraw" className="cursor-pointer hover:text-muted/60 data-active:text-muted/60 data-active:hover:text-muted/60 data-active:after:bg-muted/60">Withdraw</TabsTrigger>
                                <TabsTrigger value="transfer" className="cursor-pointer hover:text-muted/60 data-active:text-muted/60 data-active:hover:text-muted/60 data-active:after:bg-muted/60">Transfer</TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </BnkCard>
                </div>
            </div>
        </Fragment>
    )
        ;
};

export default Page;