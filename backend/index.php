<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);


// CORS headers
header('Access-Control-Allow-Origin: http://localhost:5173');  // Or specify the React app URL
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');  // If necessary

// Handle OPTIONS requests (pre-flight)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    header('HTTP/1.1 200 OK');
    exit;
}

session_start();

require __DIR__ . "/controller/PostsController.php";
require __DIR__ . "/controller/LoginController.php";


/**
 * Front Controller (url router)
 */
if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

    switch ($uri) {

        case '/api/posts':
            $postController = new PostsController();
            $postController->getPosts();
            break;



        default:
            header("HTTP/1.1 404 Not Found");
            header('Content-Type: application/json');

            echo json_encode(['error' => '404 Not Found: The requested resource could not be found.']);
            exit;
    }
} else {
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {




        $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

        switch ($uri) {
            case '/api/login':



                $loginController = new LoginController();
                $loginController->handleLogin();


                break;

            default:

                header('Content-Type: application/json');

                echo json_encode(['error' => '500 Not Found: The requested  could not be made.']);
                exit;
        }
    }
}
