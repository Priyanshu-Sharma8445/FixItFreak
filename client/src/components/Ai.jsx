// import {
//     Sheet,
//     SheetContent,
//     SheetDescription,
//     SheetHeader,
//     SheetTitle,
//     SheetTrigger,
// } from "@/components/ui/sheet"
// import React, { useState } from 'react';
// import AiRobo from './AiRobo';
// import { Button } from "./ui/button";
// import { IoMdSend } from "react-icons/io";
// import axios from "axios";

// const Ai = () => {
//     const [question, setQuestion] = useState("Ask your question ??");
//     const [answer, setAnswer] = useState("");
//     async function generateResponse() {
//         const response = await axios({
//             url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyA9y_ocPAgYWlaUtSq1HbyprQZud51KVD4",
//             method: "POST",
//             data: {
//                 "contents": [{
//                     "parts": [{ "text": question }]
//                 }]
//             },
//         });
//         console.log(response['data']['candidates'][0]['content']['parts'][0]['text']);
//         setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
//     }
    
//     return (
//         <>
//             <Sheet>

//                 <SheetTrigger >
//                     <div className="w-60 h-60 py-0 px-0 scale-120  bottom-0">

//                         <AiRobo />
//                     </div>

//                 </SheetTrigger>

//                 <SheetContent>
//                     <SheetHeader>
//                         <SheetTitle className="text-white text-center font-bold text-3xl">Hii , I am always there to help you !!</SheetTitle>
//                         <SheetDescription className=" text-center font-bold">
//                             "FixItFreak – Your smart assistant for instant solutions and seamless troubleshooting."
//                         </SheetDescription>
//                     </SheetHeader>
//                     <div className="m-10 h-[50%]  overflow-scroll">
//                         <p className="text-start">{question}</p>
//                         <p className="text-start m-10">{answer}</p>
//                     </div>

//                     <div className="flex justify-center items-end  gap-2 w-[100%]">

//                         <input type="text"  onChange={(e)=>{setQuestion(e.target.value)}} placeholder="Search here" className="w-[80%] p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white-600 focus:border-gray " />
//                         <Button className="h-10 bg-blue-600 text-white font-bold px-4 py-2 rounded-md hover:bg-blue-700 m-1" onClick={generateResponse}>Ask<IoMdSend /></Button>
//                     </div>



//                 </SheetContent>
//             </Sheet>



//         </>
//     );
// };

// export default Ai;  


import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import React, { useState } from "react";
import AiRobo from "./AiRobo";
import { Button } from "./ui/button";
import { IoMdSend } from "react-icons/io";
import axios from "axios";

const Ai = () => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    async function generateResponse() {
        setAnswer("Loading...");
        const response = await axios({
            url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyA9y_ocPAgYWlaUtSq1HbyprQZud51KVD4",
            method: "POST",
            data: {
                contents: [
                    {
                        parts: [{ text: question }],
                    },
                ],
            },
        });
        setAnswer(response.data.candidates[0].content.parts[0].text);
        setQuestion(""); // Reset input after asking
    }

    return (
        <>
            <Sheet>
                <SheetTrigger>
                    <div className="w-60 h-60 py-0 px-0 scale-120 bottom-0">
                        <AiRobo />
                    </div>
                </SheetTrigger>

                <SheetContent>
                    <SheetHeader>
                        <SheetTitle className="text-white text-center font-bold text-3xl">
                            Hi, I am always here to help you!
                        </SheetTitle>
                        <SheetDescription className="text-center font-bold">
                            "FixItFreak – Your smart assistant for instant solutions and seamless troubleshooting."
                        </SheetDescription>
                    </SheetHeader>

                    {/* Question and Answer Section */}
                    <div className="m-10 h-[50%] overflow-y-auto scrollbar-hide">
                        <p className="text-start">{question}</p>
                        <pre className="text-wrap text-start m-10">
                            {answer}
                        </pre>
                    </div>

                    {/* Input and Button */}
                    <div className="flex justify-center items-end gap-2 w-full">
                        <input
                            type="text"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            placeholder="Search here"
                            className="w-[80%] p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white-600 focus:border-gray"
                        />
                        <Button
                            className="h-10 bg-blue-600 text-white font-bold px-4 py-2 rounded-md hover:bg-blue-700 m-1"
                            onClick={generateResponse}
                        >
                            Ask <IoMdSend />
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>
        </>
    );
};

export default Ai;
