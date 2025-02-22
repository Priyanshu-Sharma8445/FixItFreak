import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import React from 'react';
import AiRobo from './AiRobo';

const Ai = () => {
    return (
        <>
        <Sheet>              
                    
                    <SheetTrigger className="w-90 h-90 py-0 "><AiRobo/></SheetTrigger>
                
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Are you absolutely sure?</SheetTitle>
                            <SheetDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>

           

        </>
    );
};

export default Ai;  