import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ = () => {
    return (
        <div className="flex flex-col items-center justify-center p-10 space-y-8 bg-gray-900 text-white">
            <h2 className="text-4xl font-bold mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full max-w-4xl">
                {[
                    {
                        question: "I can’t watch tutorial videos. What should I do?",
                        answer: "Try using a different browser, disable ad blockers, or check your internet connection. If the issue persists, ensure that JavaScript is enabled in your browser settings. Also, clear your cache and cookies or try using an incognito/private browsing mode."
                    },
                    {
                        question: "How do I submit a plumbing-related question?",
                        answer: 'You can submit your question in the "Ask an Expert" section of our website. Alternatively, you can post it in the community forum where experienced professionals and fellow users can provide helpful answers. Make sure to include details about your plumbing issue for better assistance.'
                    },
                    {
                        question: "What type of plumbing tutorials are available?",
                        answer: "We offer step-by-step guides covering various plumbing topics, including basic repairs, pipe installations, faucet replacements, leak detection, and maintenance tips. Our tutorials also include troubleshooting advice for common plumbing issues such as clogged drains, water pressure problems, and water heater malfunctions."
                    },
                    {
                        question: "Do I need to pay for any services on this website?",
                        answer: "All our written guides and video tutorials are available for free. However, if you choose to book a professional plumbing service through our platform, service charges may apply. Pricing varies depending on the type of service and location. You can find detailed pricing information in the 'Service Charges' section."
                    },
                    {
                        question: "How often is the content updated?",
                        answer: "We update our guides regularly to ensure they reflect the latest plumbing techniques and industry best practices. Our team constantly reviews user feedback and adds new content based on frequently asked questions and emerging trends in home maintenance."
                    },
                    {
                        question: "Can I request a specific tutorial?",
                        answer: 'Yes! You can use the "Request a Topic" feature to suggest a tutorial. Our team will review popular requests and create new guides accordingly. If you need urgent help, consider reaching out in our community forum for quicker responses from experts and other users.'
                    }
                ].map((item, index) => (
                    <AccordionItem key={index} value={`item-${index + 1}`} className="border border-gray-700 shadow-lg mb-3 rounded-lg">
                        <AccordionTrigger className="p-6 py-7 bg-[#2c343f] hover:bg-[#3e4a5b] transition text-2xl font-semibold no-underline hover:no-underline focus:no-underline rounded-t-lg">
                            {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="p-6 py-7 bg-[#2c343f] text-white text-lg mt-0.5 rounded-b-lg">
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
            <hr className="w-full border-gray-700 mt-10" />
        </div>
    );
};

export default FAQ;