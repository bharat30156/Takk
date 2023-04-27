package com.takk.backend.controller;


import com.takk.backend.model.Comment;
import com.takk.backend.model.CommunityUser;
import com.takk.backend.model.Like;
import com.takk.backend.model.Post;
import com.takk.backend.service.CommunityUserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/communityUser")
public class CommunityUserController {

    private CommunityUserService communityUserService;

    public CommunityUserController(CommunityUserService communityUserService) {
        super();
        this.communityUserService = communityUserService;
    }

    /**
     *
     * All the APIs for communityUser (for creating, updating and deleting the community)
     */

    // API to send request to save the community in database
    // API URL - http://localhost:8080/api/communityUser/create
    @PostMapping("/create")
    public ResponseEntity<CommunityUser> saveCommunityUser(@RequestBody CommunityUser communityUser){
        return new ResponseEntity<CommunityUser>(communityUserService.saveCommunityUser(communityUser), HttpStatus.CREATED);
    }

    // API to get all communities
    // API URL - http://localhost:8080/api/communityUser
    @GetMapping
    public List<CommunityUser> getAllCommunityUser(){
        return communityUserService.getAllCommunityUser();
    }

    // API to get the community by specific ID
    // http://localhost:8080/api/communityUser/1
    @GetMapping("{id}")
    public ResponseEntity<CommunityUser> getCommunityUserByID( @PathVariable("id") long communityUserid){
        return new ResponseEntity<CommunityUser>(communityUserService.getCommunityUserByID(communityUserid), HttpStatus.OK);
    }

    // API to update the community details
    // http://localhost:8080/api/communityUser/1
    @PutMapping("{id}")
    public ResponseEntity<CommunityUser> updateCommunityUser(@PathVariable("id") long id
            ,@RequestBody CommunityUser communityUser){
        return new ResponseEntity<CommunityUser>(communityUserService.updateCommunityUser(communityUser, id), HttpStatus.OK);
    }

    // API to delete the community from the database using specific ID
    // http://localhost:8080/api/communityUser/1
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteCommunityUser(@PathVariable("id") long id){
        //delete the community from database
        communityUserService.deleteCommunityUser(id);
        return new ResponseEntity<String>("Community deleted Sucessfuly", HttpStatus.OK);
    }

    /**
     *
     * All the APIs for post (for creating post, updating and deleting)
     */

    @GetMapping("{id}/posts")
    public List<Post> getPostsByCommunityUserID(@PathVariable("id") long id){
        return communityUserService.getPostsByCommunityUserID(id);
    }

    @PostMapping("{id}/posts/create")
    public ResponseEntity<Post> savePostByCommunityUserID(@PathVariable("id") long id, @RequestBody Post post){
        return new ResponseEntity<Post>(communityUserService.savePostByCommunityUserID(post, id), HttpStatus.CREATED);
    }

    @GetMapping("/posts/{postId}")
    public ResponseEntity<Post> getPostByID(@PathVariable("postId") long postId){
        return new ResponseEntity<Post>(communityUserService.getPostByID(postId), HttpStatus.OK);
    }

    @PutMapping("/posts/{postId}")
    public ResponseEntity<Post> updatePost(@PathVariable("postId") long postId, @RequestBody Post post){
        return new ResponseEntity<Post>(communityUserService.updatePost(post, postId), HttpStatus.OK);
    }

    @DeleteMapping("/posts/{postId}")
    public ResponseEntity<String> deletePost(@PathVariable("postId") long postId){
        communityUserService.deletePost(postId);
        return new ResponseEntity<String>("Post deleted successfully", HttpStatus.OK);
    }

    /**
     *
     * All the APIs for comments (for creating comments, updating it, deleting it)
     */

    //
    @PostMapping("/posts/{postId}/comments/create")
    public ResponseEntity<Comment> saveCommentByPostID(@PathVariable("postId") long postId, @RequestBody Comment comment){
        return new ResponseEntity<Comment>(communityUserService.saveCommentByPostID(comment, postId), HttpStatus.CREATED);
    }

    @GetMapping("/comments/{commentId}")
    public ResponseEntity<Comment> getCommentByID(@PathVariable("commentId") long commentId){
        return new ResponseEntity<Comment>(communityUserService.getCommentByID(commentId), HttpStatus.OK);
    }

    @PutMapping("/comments/{commentId}")
    public ResponseEntity<Comment> updateComment(@PathVariable("commentId") long commentId, @RequestBody Comment comment){
        return new ResponseEntity<Comment>(communityUserService.updateComment(comment, commentId), HttpStatus.OK);
    }

    @DeleteMapping("/comments/{commentId}")
    public ResponseEntity<String> deleteComment(@PathVariable("commentId") long commentId){
        communityUserService.deleteComment(commentId);
        return new ResponseEntity<String>("Comment deleted successfully", HttpStatus.OK);
    }

    /**
     *
     * All the for likes for (creating it, deleting it)
     */


    @PostMapping("/posts/{postId}/likes/create")
    public ResponseEntity<Like> saveLikeByPostID(@PathVariable("postId") long postId, @RequestBody Like like){
        return new ResponseEntity<Like>(communityUserService.saveLikeByPostID(like, postId), HttpStatus.CREATED);
    }

    @GetMapping("/likes/{likeId}")
    public ResponseEntity<Like> getLikeByID(@PathVariable("likeId") long likeId){
        return new ResponseEntity<Like>(communityUserService.getLikeByID(likeId), HttpStatus.OK);
    }

    @DeleteMapping("/likes/{likeId}")
    public ResponseEntity<String> deleteLike(@PathVariable("likeId") long likeId){
        communityUserService.deleteLike(likeId);
        return new ResponseEntity<String>("Like deleted successfully", HttpStatus.OK);
    }
}

