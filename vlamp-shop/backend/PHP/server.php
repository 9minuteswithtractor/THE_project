<?php
// Allow CORS requests from any origin 
header("Access-Control-Allow-Origin: http://localhost:5173");  // Replace with your frontend URL
header("Access-Control-Allow-Methods: POST, GET");  // Allowed HTTP methods
header("Access-Control-Allow-Headers: Content-Type");  // Allow Content-Type header


// normal POST request handling
$rawData = file_get_contents("php://input");

// Decode the JSON into a PHP array
$data = json_decode($rawData, true);  // true for associative array

// Check if the data was properly decoded
if ($data === null) {
    echo json_encode("Failed to decode JSON.");
    exit();
}
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Check if 'user' is provided
    $user = $data['user'];

    if ($user && isset($user)) {
        echo json_encode("Hello from server, " . htmlspecialchars($user) . "!");
    } else {
        echo json_encode("No user provided.");
    }
}
