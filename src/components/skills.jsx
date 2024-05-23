import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
    const percentage1 = 66;
    const percentage2 = 70;

    return (
        <div className="bg-gray-900  w-full">
            <div className="container mx-auto w-full">
                <div className="relative py-16 lg:py-20 mx-auto">
                    <div className="flex flex-col md:flex-row gap-20 justify-between">
                        <div className="flex flex-col md:w-1/2 space-y-4 w-full">
                            <h2 className="text-white font-bold text-xl">Technical Skills</h2>
                            <div className="relative pt-1">
                                <div className="flex mb-2 items-center justify-between">
                                    <div>
                                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-50">
                                            Resume Writing
                                        </span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xs font-semibold inline-block text-slate-50">
                                            80%
                                        </span>
                                    </div>
                                </div>
                                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
                                    <div
                                        style={{ width: "80%" }}
                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                                    ></div>
                                </div>
                            </div>
                            <div className="relative pt-1">
                                <div className="flex mb-2 items-center justify-between">
                                    <div>
                                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-50">
                                            Cover Letter 
                                        </span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xs font-semibold inline-block text-slate-50">
                                            75%
                                        </span>
                                    </div>
                                </div>
                                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
                                    <div
                                        style={{ width: "75%" }}
                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                                    ></div>
                                </div>
                            </div>
                            <div className="relative pt-1">
                                <div className="flex mb-2 items-center justify-between">
                                    <div>
                                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-50">
                                            Editing & Proofreading
                                        </span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xs font-semibold inline-block text-slate-50">
                                            70%
                                        </span>
                                    </div>
                                </div>
                                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
                                    <div
                                        style={{ width: "70%" }}
                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                                    ></div>
                                </div>
                            </div>
                            <div className="relative pt-1">
                                <div className="flex mb-2 items-center justify-between">
                                    <div>
                                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-50">
                                            Sales & Marketing
                                        </span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xs font-semibold inline-block text-slate-50">
                                            78%
                                        </span>
                                    </div>
                                </div>
                                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
                                    <div
                                        style={{ width: "78%" }}
                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                                    ></div>
                                </div>
                            </div>
                            <div className="relative pt-1">
                                <div className="flex mb-2 items-center justify-between">
                                    <div>
                                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-50">
                                            Promotion
                                        </span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xs font-semibold inline-block text-slate-50">
                                            65%
                                        </span>
                                    </div>
                                </div>
                                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
                                    <div
                                        style={{ width: "65%" }}
                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                                    ></div>
                                </div>
                            </div>
                            <div className="relative pt-1">
                                <div className="flex mb-2 items-center justify-between">
                                    <div>
                                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-50">
                                            Graphic Design
                                        </span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xs font-semibold inline-block text-slate-50">
                                            80%
                                        </span>
                                    </div>
                                </div>
                                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
                                    <div
                                        style={{ width: "57%" }}
                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 w-full flex flex-col space-y-4">
                            <h2 className="text-white font-bold text-xl">Professional Skills</h2>
                            <div className="grid grid-cols-2 gap-5">
                                <div className="flex flex-col space-y-4">
                                    <div style={{ width: "40%" }}>
                                        <CircularProgressbar
                                            styles={buildStyles({
                                                trailColor: "#e2e8f0",
                                                pathColor: "#a855f7",
                                                textColor: "#fff",
                                            })}
                                            value={percentage1}
                                            text={`${percentage1}%`}
                                        />
                                    </div>
                                    <p className="text-white font-bold text-sm uppercase">
                                        communication
                                    </p>
                                </div>
                                <div className="flex flex-col space-y-4">
                                    <div style={{ width: "40%" }}>
                                        <CircularProgressbar
                                            styles={buildStyles({
                                                trailColor: "#e2e8f0",
                                                pathColor: "#a855f7",
                                                textColor: "#fff",
                                            })}
                                            value={percentage2}
                                            text={`${percentage2}%`}
                                        />
                                    </div>
                                    <p className="text-white font-bold text-sm uppercase">
                                        team work
                                    </p>
                                </div>
                                <div className="flex flex-col space-y-4">
                                    <div style={{ width: "40%" }}>
                                        <CircularProgressbar
                                            styles={buildStyles({
                                                trailColor: "#e2e8f0",
                                                pathColor: "#a855f7",
                                                textColor: "#fff",
                                            })}
                                            value={percentage2}
                                            text={`${percentage2}%`}
                                        />
                                    </div>
                                    <p className="text-white font-medium text-sm uppercase">
                                        project management
                                    </p>
                                </div>
                                <div className="flex flex-col space-y-4">
                                    <div style={{ width: "40%" }}>
                                        <CircularProgressbar
                                            styles={buildStyles({
                                                trailColor: "#e2e8f0",
                                                pathColor: "#a855f7",
                                                textColor: "#fff",
                                            })}
                                            value={percentage2}
                                            text={`${percentage2}%`}
                                        />
                                    </div>
                                    <p className="text-white font-medium text-sm uppercase">
                                        creativity
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
