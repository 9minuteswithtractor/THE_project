<?php

require  "models/Post.php";

class PostsController
{

    public function getPosts()
    {

        $posts = Post::getAllPosts();  // Fetch posts

        // Set response type to JSON
        header('Content-Type: application/json');

        // Return the posts as a JSON response
        echo json_encode($posts);
    }

    public function createPost()
    {
        // TODO :  check if user is logged-in in order to create post ...

        $data = json_decode(file_get_contents("php://input"), true);

        // simple validation check
        if (empty($data['title']) || empty($data['content']) || empty($data['author'])) {

            header('Content-Type: application/json', true, 400);
            echo json_encode(['error' => 'Missing required fields ...']);
        }

        $post = new Post();
        $post->title = $data['title'];
        $post->content = $data['content'];
        $post->author = $data['author'];

        $result = $post->savePost();

        if ($result) {
            header('Content-Type: application/json', true, 201);
            echo json_encode(['message' => 'Post created successfully!', 'post' => $post]);
        } else {
            header('Content-Type: application/json', true, 500);
            echo json_encode(['error' => 'Failed to create post']);
        }
    }
}
