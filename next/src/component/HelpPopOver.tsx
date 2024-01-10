import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose, DialogOverlay } from "@radix-ui/react-dialog";

function HelpPopOver() {

    const [isDialogOpen, setDialogOpen] = useState(true);

    return (
        <Dialog>
            <DialogTrigger className="w-4 h-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                    stroke="currentColor"
                    className="w-4 h-4 hover:text-blue-400"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                    />
                </svg>
            </DialogTrigger>
            <DialogOverlay onClick={() => setDialogOpen(false)}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Help</DialogTitle>
                        <DialogDescription>
                            <div className="flex flex-col">
                                <div className="w-full h-full rounded-lg space-y-3 pt-2">
                                    <h1>📅 Downloading calendar events</h1>
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="h-full w-full flex justify-center items-center"
                                    >
                                        <source src="/IcalVideo.mp4" type="video/mp4" />
                                    </video>
                                    {/* <div className="pt-2 flex flex-row">
                                        <h1>🐛 Bugs report: </h1>
                                        <p className="text-blue-300 pl-1">
                                            github.link
                                        </p>
                                    </div> */}
                                    <div className="pt-1">
                                        <p className="italic">
                                            Please be aware that this experimental website may
                                            not present information accurately or as intended.
                                            Thank you for your understanding as we work to
                                            improve it.
                                        </p>
                                        <div className="pt-2 pb-4 flex flex-row">
                                            <p className="">Looking for the original&nbsp;</p>
                                            <a
                                                href="https://schedules.oval.ucalgary.ca/MobileOpenGymTimes.aspx"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-300 italic"
                                            >
                                                site?
                                            </a>
                                        </div>
                                        <hr />
                                        <div className="pt-2 flex justify-center">
                                            <p className="text-red-600">
                                                Made with ❤ by your fellow pack of 🦖
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </DialogOverlay>
        </Dialog>
    )
}

export default HelpPopOver