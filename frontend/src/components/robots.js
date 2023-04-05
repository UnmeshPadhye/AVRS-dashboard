const robotsData = [
    {
        id: 1,
        name: "R2-D2",
        model: "Astromech",
        manufacturer: "Industrial Automation",
        serialNumber: "A001",
        height: "0.96 m",
        mass: "32 kg",
        status: "Active",
        description:
            "R2-D2 is a droid character in the Star Wars franchise created by George Lucas. He is a major character in all of the Star Wars films, appearing in nine films in total, as well as in numerous games, books, and other media.",
        sensors: [
            { id: 1, name: "Sensor 1", value: "1.23" },
            { id: 2, name: "Sensor 2", value: "3.45" },
            { id: 3, name: "Sensor 3", value: "6.78" },
        ],
        logs: [
            { id: 1, message: "Log message 1", timestamp: "2022-03-20T14:23:45Z" },
            { id: 2, message: "Log message 2", timestamp: "2022-03-21T10:11:12Z" },
        ],
        notifications: [
            { id: 1, message: "Notification message 1", timestamp: "2022-03-20T14:23:45Z" },
            { id: 2, message: "Notification message 2", timestamp: "2022-03-21T10:11:12Z" },
        ],
    },
    {
        id: 2,
        name: "BB-8",
        model: "Astromech",
        manufacturer: "Industrial Automation",
        serialNumber: "A002",
        height: "0.67 m",
        mass: "39 kg",
        status: "Inactive",
        description:
            "BB-8 is a droid character in the Star Wars franchise created by George Lucas. He first appeared in the 2015 film Star Wars: The Force Awakens and has since appeared in other Star Wars films, as well as in various games, books, and other media.",
        sensors: [
            { id: 1, name: "Sensor 1", value: "1.23" },
            { id: 2, name: "Sensor 2", value: "3.45" },
            { id: 3, name: "Sensor 3", value: "6.78" },
        ],
        logs: [
            { id: 1, message: "Log message 1", timestamp: "2022-03-20T14:23:45Z" },
            { id: 2, message: "Log message 2", timestamp: "2022-03-21T10:11:12Z" },
        ],
        notifications: [
            { id: 1, message: "Notification message 1", timestamp: "2022-03-20T14:23:45Z" },
            { id: 2, message: "Notification message 2", timestamp: "2022-03-21T10:11:12Z" },
        ],
    },
    {
        id: 3,
        name: "T-800",
        model: "Series 800",
        manufacturer: "Cyberdyne Systems",
        serialNumber: "B001",
        height: "1.88 m",
        mass: "200 kg",
        status: "Active",
        description:
            "The T-800 is a fictional cyborg assassin, played by Arnold Schwarzenegger, who first appeared in the 1984 film The Terminator. He has since appeared in multiple sequels and spin-offs, as well as in other media.",
        sensors: [
            {
                id: 1,
                type: "Infrared",
                status: "Active",
                location: "Head",
                description: "Detects heat signatures and body temperature",
            },
            {
                id: 2,
                type: "Motion",
                status: "Inactive",
                location: "Chest",
                description: "Detects movement and speed",
            },
        ],
        logs: [
            {
                id: 1,
                date: "2022-10-01",
                time: "10:30:00",
                message: "T-800 completed mission successfully",
            },
            {
                id: 2,
                date: "2022-10-03",
                time: "13:45:00",
                message: "T-800 encountered resistance and engaged in combat",
            },
        ],
        notifications: [
            {
                id: 1,
                type: "Warning",
                message: "Low battery",
                timestamp: "2022-10-05 18:20:00",
            },
            {
                id: 2,
                type: "Error",
                message: "Malfunction in left arm",
                timestamp: "2022-10-06 09:15:00",
            },
        ],
    },
    {
        id: 4,
        name: "Wall-E",
        model: "AMG E63",
        manufacturer: "Buy n Large",
        serialNumber: "C001",
        height: "0.43 m",
        mass: "27 kg",
        status: "Active",
        description:
            "WALL-E is a fictional robot character in the 2008 Pixar film of the same name. He is the last remaining operational robot on Earth, tasked with cleaning up the planet after humanity has abandoned it.",
        logs: [
            {
                id: 1,
                date: "2022-03-21",
                message: "Cleaned up 100 tons of garbage today",
                severity: "Info"
            },
            {
                id: 2,
                date: "2022-03-22",
                message: "Found a plant growing in the garbage, stored it in the truck",
                severity: "Warning"
            },
            {
                id: 3,
                date: "2022-03-23",
                message: "Encountered a malfunction in the truck's compacting mechanism",
                severity: "Error"
            }
        ],
        notifications: [
            {
                id: 1,
                message: "Trash level in storage container is reaching maximum capacity",
                read: false
            },
            {
                id: 2,
                message: "Detected presence of foreign object in storage container",
                read: false
            },
            {
                id: 3,
                message: "Scheduled maintenance is due next week",
                read: true
            }
        ],
        sensors: [
            {
                id: 1,
                type: "Camera",
                status: "Active",
                reading: "No objects detected",
                lastUpdate: "2022-03-22 15:30:00"
            },
            {
                id: 2,
                type: "Temperature",
                status: "Active",
                reading: "25°C",
                lastUpdate: "2022-03-23 10:45:00"
            },
            {
                id: 3,
                type: "Moisture",
                status: "Inactive",
                reading: "N/A",
                lastUpdate: "N/A"
            }
        ]
    },
];

export default robotsData;
