import { Link } from "react-router-dom";

const RobotDetails = ({ robot }) => {
    if (!robot) {
        return <div>Loading...</div>;
    }

    const { id, name, model, manufacturer, serialNumber, height, mass, status, description } = robot;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-white shadow-lg rounded-lg px-4 py-6">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-2">{name}</h2>
                    <p className="text-lg text-gray-600">{model}</p>
                </div>
                <div className="flex flex-wrap mt-6">
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
                    <div className="w-full md:w-1/2 px-2">
                        <div className="mb-4">
                            <h3 className="font-bold text-gray-600 mb-2">Mass</h3>
                            <p className="text-gray-700">{mass}</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="font-bold text-gray-600 mb-2">Status</h3>
                            <p className={`text-gray-700 ${status === 'Active' ? 'text-green-500' : 'text-red-500'}`}>{status}</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="font-bold text-gray-600 mb-2">Description</h3>
                            <p className="text-gray-700">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RobotDetails;
