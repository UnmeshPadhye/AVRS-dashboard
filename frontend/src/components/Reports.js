import { Link } from "react-router-dom";
import Header from './Header';
import { report_content } from "../data/reports";

const Reports = ({ robot, index }) => {

    const Log = ({ time, event }) => (
        <div className="flex justify-between py-1">
            <p>{time}</p>
            <p>{event}</p>
            <p className="ml-2 text-gray-600">{event}</p>
        </div>
    );

    const Logs = ({ logs }) => (
        <div className="bg-gray-100 rounded-md shadow-lg p-4 mr-4">
            <h2 className="font-bold mb-4">Logs</h2>
            <div>
                {logs.map((log) => (
                    <Log key={log.date} time={log.time} event={log.event} />
                ))}
            </div>
        </div>
    );



    return (
        <div>
            <Header title={`Report`} />

            <div className="container mx-auto px-4">

                <div className="bg-slate-100  shadow-lg rounded-lg px-4 py-2">
                    <div className="">
                        <div className="flex justify-center items-center">
                            <p>{report_content}</p>
                        </div>
                    </div>

                </div>

            </div>

            <br />
            <div className="flex flex-wrap">

                {/* <div className="w-full md:w-1/3 px-2">
                    <div className="mb-4">
                        <Sensors sensors={sensors} />
                    </div>
                </div>
                <div className="w-full md:w-1/3 px-2">
                    <div className="mb-4">
                        <Logs logs={logs} />
                    </div>
                </div>
                <div className="w-full md:w-1/3 px-2">
                    <div className="mb-4">
                        <Notifications notifications={notifications} />
                    </div>
                </div> */}
            </div>


        </div>
    );

};

export default Reports;
