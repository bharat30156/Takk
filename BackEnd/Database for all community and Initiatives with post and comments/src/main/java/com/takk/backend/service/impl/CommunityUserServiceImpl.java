package com.takk.backend.service.impl;



import com.takk.backend.exception.ResourceNotFoundException;
import com.takk.backend.model.Comment;
import com.takk.backend.model.CommunityUser;
import com.takk.backend.model.Post;
import com.takk.backend.repository.CommentRepository;
import com.takk.backend.repository.CommunityUserRepository;
import com.takk.backend.repository.PostRepository;
import com.takk.backend.service.CommunityUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CommunityUserServiceImpl implements CommunityUserService {

    private CommunityUserRepository communityUserRepository;
    private PostRepository postRepository;
    private CommentRepository commentRepository;



    @Autowired
    public CommunityUserServiceImpl(CommunityUserRepository communityUserRepository) {
        super();
        this.communityUserRepository = communityUserRepository;
        this.postRepository = postRepository;
        this.commentRepository = commentRepository;
    }

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

    @Override
    public List<Post> getPostsByCommunityUser(Long communityUserId) {
        CommunityUser communityUser = communityUserRepository.findById(communityUserId).orElseThrow(() ->
                new ResourceNotFoundException("CommunityUser", "Id", communityUserId));
        return postRepository.findByCommunityUser(communityUser);
    }

    @Override
    public List<Comment> getCommentsByPost(Long postId) {
        Post post = postRepository.findById(postId).orElseThrow(() ->
                new ResourceNotFoundException("Post", "Id", postId));
        return commentRepository.findByPost(post);
    }

}