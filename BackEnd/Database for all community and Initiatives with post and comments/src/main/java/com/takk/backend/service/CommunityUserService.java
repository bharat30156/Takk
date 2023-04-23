package com.takk.backend.service;

import com.takk.backend.model.Comment;
import com.takk.backend.model.CommunityUser;
import com.takk.backend.model.Post;

import java.util.List;

public interface CommunityUserService {
    CommunityUser saveCommunityUser(CommunityUser communityUser);
    List<CommunityUser> getAllCommunityUser();
    CommunityUser getCommunityUserByID(long id);
    CommunityUser updateCommunityUser(CommunityUser communityUser, long id);
    void deleteCommunityUser(long id);

    List<Post> getPostsByCommunityUser(Long communityUserId);

    List<Comment> getCommentsByPost(Long postId);
}
