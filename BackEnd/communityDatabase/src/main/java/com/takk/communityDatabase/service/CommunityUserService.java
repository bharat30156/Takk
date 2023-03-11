package com.takk.communityDatabase.service;

import com.takk.communityDatabase.model.CommunityUser;

import java.util.List;

public interface CommunityUserService {
    CommunityUser saveCommunityUser(CommunityUser communityUser);
    List<CommunityUser> getAllCommunityUser();
    CommunityUser getCommunityUserByID(long id);
    CommunityUser updateCommunityUser(CommunityUser communityUser, long id);
    void deleteCommunityUser(long id);
}
