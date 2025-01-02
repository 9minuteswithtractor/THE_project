<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);


// CORS headers
header('Access-Control-Allow-Origin: http://localhost:5173');  // Or specify the React app URL
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');  // If necessary


// Handle GET requests to /api/posts
if ($_SERVER['REQUEST_METHOD'] == 'GET' && $_SERVER['REQUEST_URI'] == '/api/posts') {
    require __DIR__ . '/models/Post.php';  // Assuming this is the correct location
    $posts = Post::getPosts();  // Fetch posts

    // Set response type to JSON
    header('Content-Type: application/json');

    // Return the posts as a JSON response
    echo json_encode($posts);

    // in case of invalid url
} else {

    header("HTTP/1.1 404 Not Found");  // Send 404 status code
    header('Content-Type: application/json');  // Return response as JSON

    // Return a simple 404 error message
    echo json_encode(['error' => '404 Not Found: The requested resource could not be found.']);
    exit;
}
