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

                <SheetTrigger >
                    <div className="w-60 h-60 py-0 px-0 scale-120  bottom-0">

                    <AiRobo />
                    </div>
                
                </SheetTrigger>

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