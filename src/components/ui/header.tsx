"use client";

import { HomeIcon, ListOrderedIcon, LogInIcon, LogOutIcon, MenuIcon, PercentIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Separator } from "./separator";
import { ModeToggle } from "./theme-button";

const Header = () => {
    const { status, data } = useSession();

    const handleLoginClick = async () => {
        await signIn();
    }

    const handleLogoutClick = async () => {
        await signOut();
    }
 
    return <Card className="flex justify-between p-[1.87rem] items-center">
        <Sheet>
            <SheetTrigger asChild> 
                <Button size="icon" variant="outline">
                    <MenuIcon />
                </Button>
            </SheetTrigger>

            <SheetContent side="left">
            <SheetHeader className="flex flex-row justify-between text-left text-lg font-semibold mt-7">
                    Menu
                <div className="text-right">
                    <ModeToggle />
                </div>
            </SheetHeader>


                {
                    status === "authenticated" && data?.user && (
                        <div className="flex flex-col">
                            <div className="py-4 flex items-center gap-2">
                                <Avatar>
                                    <AvatarFallback>
                                        {data.user.name?.[0].toUpperCase()}
                                    </AvatarFallback>

                                    {
                                        data.user.image && (
                                            <AvatarImage src={data.user.image} alt="profile image" />
                                        )
                                    }
                                </Avatar>

                                <div className="flex flex-col">
                                    <p className="font-midium">{data.user.name}</p>
                                    <p className="text-sm opacity-75">Boas compras!</p>
                                </div>
                            </div>
                            <Separator />
                        </div>
                    )
                }

                <div className="mt-4 flex flex-col gap-2">
                    {
                        status === "unauthenticated" ?
                        <Button onClick={handleLoginClick} variant="outline" className="w-full text-left">
                            <LogInIcon className="mr-2" size="16"/>
                            Fazer login
                        </Button> :
                        <Button onClick={handleLogoutClick} variant="outline" className="w-full text-left">
                            <LogOutIcon className="mr-2" size="16"/>
                            Sair
                        </Button>
                    }
                    <Button variant="outline" className="w-full text-left">
                        <HomeIcon className="mr-2" size="16"/>
                        Início
                    </Button>
                    <Button variant="outline" className="w-full text-left">
                        <PercentIcon className="mr-2" size="16"/>
                        Ofertas
                    </Button>
                    <Button variant="outline" className="w-full text-left">
                        <ListOrderedIcon className="mr-2" size="16"/>
                        Catálogo
                    </Button>
                </div>
            </SheetContent>
        </Sheet>

        <h1 className="font-semibold text-lg"><span className="text-primary">FSW</span> Store</h1>

        <Button size="icon" variant="outline">
            <ShoppingCartIcon />
        </Button>
    </Card>;
}
 
export default Header;