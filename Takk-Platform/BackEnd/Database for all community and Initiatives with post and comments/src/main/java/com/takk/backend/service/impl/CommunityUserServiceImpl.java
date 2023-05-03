package com.takk.backend.service.impl;



import com.takk.backend.exception.ResourceNotFoundException;
import com.takk.backend.model.CommunityUser;
import com.takk.backend.model.Comment;
import com.takk.backend.model.Like;
import com.takk.backend.model.Post;
import com.takk.backend.repository.CommunityUserRepository;
import com.takk.backend.repository.CommentRepository;
import com.takk.backend.repository.LikeRepository;
import com.takk.backend.repository.PostRepository;
import com.takk.backend.service.CommunityUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommunityUserServiceImpl implements CommunityUserService {

    private CommunityUserRepository communityUserRepository;
    private PostRepository postRepository;
    private CommentRepository commentRepository;
    private LikeRepository likeRepository;



    @Autowired
    public CommunityUserServiceImpl(CommunityUserRepository communityUserRepository) {
        super();
        this.communityUserRepository = communityUserRepository;
        this.postRepository = postRepository;
        this.commentRepository = commentRepository;
        this.likeRepository = likeRepository;

    }

    // all services for communities
    @Override
    public CommunityUser saveCommunityUser(CommunityUser communityUser) {
        return communityUserRepository.save(communityUser);
    }

    @Override
    public List<CommunityUser> getAllCommunityUser() {
        return communityUserRepository.findAll();
    }

    @Override
    public CommunityUser getCommunityUserByID(long id) {
//        Optional<CommunityUser> communityUser = communityUserRepository.findById(id);
//        if (communityUser.isPresent()){
//            return communityUser.get();
//        }
//        else {
//            throw new ResourceNotFoundException("CommunityUser", "Id", id);
//        }
        return communityUserRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("CommunityUser", "Id", id));
    }

    @Override
    public CommunityUser updateCommunityUser(CommunityUser communityUser, long id) {
        // First need to check whether community user with given Id is exists in the database or not
        CommunityUser existingCommunity = communityUserRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("CommunityUser", "Id", id));

        existingCommunity.setNameOfCommunity(communityUser.getNameOfCommunity());
        existingCommunity.setDescriptionOfCommunity(communityUser.getDescriptionOfCommunity());
        existingCommunity.setShortDescriptionOfCommunity(communityUser.getShortDescriptionOfCommunity());
        existingCommunity.setImages(communityUser.getImages());
        existingCommunity.setLocation(communityUser.getLocation());
        existingCommunity.setCountry(communityUser.getCountry());
        existingCommunity.setRegion(communityUser.getRegion());
        existingCommunity.setTags(communityUser.getTags());

        //save existing community information
        communityUserRepository.save(existingCommunity);
        return existingCommunity;
    }

    @Override
    public void deleteCommunityUser(long id) {
        //check whether community exists in the database or not
        communityUserRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("CommunityUser", "Id", id));
        communityUserRepository.deleteById(id);
    }

    // all services for post, comments and like
    @Override
    public List<Post> getPostsByCommunityUserID(long id) {
        CommunityUser communityUser = communityUserRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("CommunityUser", "Id", id));
        return communityUser.getPosts();
    }

    @Override
    public Post savePostByCommunityUserID(Post post, long communityUserId) {
        CommunityUser communityUser = communityUserRepository.findById(communityUserId).orElseThrow(() ->
                new ResourceNotFoundException("CommunityUser", "Id", communityUserId));
        post.setCommunityUser(communityUser);
        return postRepository.save(post);
    }

    @Override
    public Post getPostByID(long postId) {
        return postRepository.findById(postId).orElseThrow(() ->
                new ResourceNotFoundException("Post", "Id", postId));
    }

    @Override
    public Post updatePost(Post post, long postId) {
        Post existingPost = postRepository.findById(postId).orElseThrow(() ->
                new ResourceNotFoundException("Post", "Id", postId));

        existingPost.setDescription(post.getDescription());
        existingPost.setLikes(post.getLikes());
        existingPost.setComments(post.getComments());
        existingPost.setShares(post.getShares());

        postRepository.save(existingPost);
        return existingPost;
    }

    @Override
    public void deletePost(long postId) {
        postRepository.findById(postId).orElseThrow(() ->
                new ResourceNotFoundException("Post", "Id", postId));
        postRepository.deleteById(postId);
    }

    @Override
    public Comment saveCommentByPostID(Comment comment, long postId) {
        Post post = postRepository.findById(postId).orElseThrow(() ->
                new ResourceNotFoundException("Post", "Id", postId));
        comment.setPost(post);
        return commentRepository.save(comment);
    }

    @Override
    public Comment getCommentByID(long commentId) {
        return commentRepository.findById(commentId).orElseThrow(() ->
                new ResourceNotFoundException("Comment", "Id", commentId));
    }

    @Override
    public Comment updateComment(Comment comment, long commentId) {
        Comment existingComment = commentRepository.findById(commentId).orElseThrow(() ->
                new ResourceNotFoundException("Comment", "Id", commentId));

        existingComment.setComment(comment.getComment());

        commentRepository.save(existingComment);
        return existingComment;
    }

    @Override
    public void deleteComment(long commentId) {
        commentRepository.findById(commentId).orElseThrow(() ->
                new ResourceNotFoundException("Comment", "Id", commentId));
        commentRepository.deleteById(commentId);
    }

    @Override
    public Like saveLikeByPostID(Like like, long postId) {
        Post post = postRepository.findById(postId).orElseThrow(() ->
                new ResourceNotFoundException("Post", "Id", postId));
        like.setPost(post);
        return likeRepository.save(like);
    }

    @Override
    public Like getLikeByID(long likeId) {
        return likeRepository.findById(likeId).orElseThrow(() ->
                new ResourceNotFoundException("Like", "Id", likeId));
    }

    @Override
    public void deleteLike(long likeId) {
        likeRepository.findById(likeId).orElseThrow(() ->
                new ResourceNotFoundException("Like", "Id", likeId));
        likeRepository.deleteById(likeId);
    }


}