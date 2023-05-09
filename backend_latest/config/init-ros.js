const RCL_node = require('rclnodejs');
const std_msgs = require('std_msgs'); // Import message types

// Initialize ROS2 node
RCL_node.initNode('my_node');

// Create publisher for topic "my_topic"
const publisher = RCL_node.createPublisher('std_msgs/msg/String', 'my_topic');

// Publish a message
const message = new std_msgs.msg.String();
message.data = 'Hello, world!';
publisher.publish(message);

module.exports = RCL_node;
