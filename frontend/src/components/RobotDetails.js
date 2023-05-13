import { Link } from "react-router-dom";
import Header from './Header';

const RobotDetails = ({ robot, index }) => {
    if (!robot) {
        return <div>Loading...</div>;
    }

    const { _id, name, model, manufacturer, serialNumber, height, mass, status, description, sensors, logs, notifications } = robot;

    const Sensor = ({ type, status, reading }) => (
        <div className="flex justify-between py-1">
            <p>{type}</p>
            <p>{status}</p>
            <p>{reading}</p>
            <p className={`ml-2 ${status ? 'text-green-600' : 'text-red-600'}`}>{status ? 'OK' : 'FAILED'}</p>
        </div>
    );


    const Sensors = ({ sensors }) => (
        <div className="bg-gray-100 rounded-md shadow-lg p-4">
            <h2 className="font-bold mb-4">Sensors</h2>
            <div>
                {sensors.map((sensor) => (
                    <Sensor key={sensor.type} type={sensor.type} status={sensor.status} reading={sensor.reading} lastUpdate={sensor.lastUpdate} />
                ))}
            </div>
            <div className="mt-5">
                <Link
                    to={{
                        pathname: `/robots/${_id}/feed`,
                        state: { robot },
                    }}
                    className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
                >
                    View Camera Feed
                </Link>

            </div>

        </div>
    );


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

    const Notification = ({ type, message, time }) => (
        <div className="flex justify-between py-1">
            <p className="font-bold">{type}</p>
            <p className="ml-2 text-gray-600">{message}</p>
            <p className="ml-2 text-gray-600">{time}</p>
        </div>
    );

    const Notifications = ({ notifications }) => (
        <div className="bg-gray-100 rounded-md shadow-lg p-4">
            <h2 className="font-bold mb-4">Notifications</h2>
            <div>
                {notifications.map((notification) => (
                    <Notification key={notification.type} type={notification.type} message={notification.message} time={notification.time} />
                ))}
            </div>
        </div>
    );


    return (
        <div>
            <Header title={`${name} Dashboard`} />

            <div className="container mx-auto px-4">

                <div className="bg-slate-100  shadow-lg rounded-lg px-4 py-2">
                    <div className="">
                        <div className="flex justify-center items-center">
                            <img className="w-40" src={`https://1000logos.net/wp-content/uploads/2021/07/San-Jose-State-Spartans-logo.png`} alt={`Robot ${name}`} />
                            <div className="text-center ml-4">
                                <h2 className="text-2xl font-bold mb-2">{name}</h2>
                                <p className="text-lg text-gray-600">{model}</p>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-wrap mt-5 pt-8">
                        <div className="w-full md:w-1/2 px-2">
                            <div className="mb-4">
                                <h3 className="font-bold text-gray-600 mb-2">Manufacturer</h3>
                                <p className="text-gray-700">{manufacturer}</p>
                            </div>
                            <div className="mb-4">
                                <h3 className="font-bold text-gray-600 mb-2">Serial Number</h3>
                                <p className="text-gray-700">{serialNumber}</p>
                            </div>
                            <div className="mb-4">
                                <h3 className="font-bold text-gray-600 mb-2">Height</h3>
                                <p className="text-gray-700">{height}</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <div className="mb-4">
                                <h3 className="font-bold text-gray-600 mb-2">Mass</h3>
                                <p className="text-gray-700">{mass}</p>
                            </div>
                            <div className="mb-4">
                                <h3 className="font-bold text-gray-600 mb-2">Status</h3>
                                <p className={`text-gray-700 ${status === 'Active' ? 'text-green-500' : 'text-red-500'}`}>{status}</p>
                            </div>
                            <div className="mb-4 px-10">
                                <h3 className="font-bold text-gray-600 mb-2">Description</h3>
                                <p className="text-gray-700">{description}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <br />
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/3 px-2">
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
                    </div>
                </div>


            </div>
        </div>
    );

};

export default RobotDetails;
