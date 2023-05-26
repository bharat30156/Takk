package com.takk.backend.service;

import com.takk.backend.model.*;

import java.util.List;

public interface CommunityUserService {
    CommunityUser saveCommunityUser(CommunityUser communityUser);
    List<CommunityUser> getAllCommunityUser();
    CommunityUser getCommunityUserByID(long id);
    CommunityUser updateCommunityUser(CommunityUser communityUser, long id);
    void deleteCommunityUser(long id);

    // methods for post and comments
    List<Post> getPostsByCommunityUserID(long id);
    Post savePostByCommunityUserID(Post post, long communityUserId);
    Post getPostByID(long postId);
    Post updatePost(Post post, long postId);
    void deletePost(long postId);
    Comment saveCommentByPostID(Comment comment, long postId);
    Comment getCommentByID(long commentId);
    Comment updateComment(Comment comment, long commentId);
    void deleteComment(long commentId);
    Like saveLikeByPostID(Like like, long postId);
    Like getLikeByID(long likeId);
    void deleteLike(long likeId);

    //methods for tags
    List<Tag> getAllTags();
    Tag saveTag(Tag tag);
    List<Tag> getTagsByCommunityUserID(long id);
    CommunityUser addTagToCommunityUser(long communityUserId, long tagId);
    List<Tag> getTagsByCommunityUserId(long communityUserId);
}
