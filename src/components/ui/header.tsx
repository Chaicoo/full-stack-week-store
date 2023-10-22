import { HomeIcon, ListOrderedIcon, LogInIcon, MenuIcon, PercentIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";

const Header = () => {
    return <Card className="flex justify-between p-[1.87rem] items-center">
        <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" variant="outline">
                    <MenuIcon />
                </Button>
            </SheetTrigger>

            <SheetContent side="left">
                <SheetHeader className="text-left text-lg font-semibold">
                    Menu
                </SheetHeader>

                <div className="mt-2 flex flex-col gap-2">
                    <Button variant="outline" className="w-full text-left">
                        <HomeIcon className="mr-2" size="16"/>
                        Início
                    </Button>
                    <Button variant="outline" className="w-full text-left">
                        <LogInIcon className="mr-2" size="16"/>
                        Fazer login
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