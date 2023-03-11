package com.takk.communityDatabase.service.impl;

import com.takk.communityDatabase.exception.ResourceNotFoundException;
import com.takk.communityDatabase.model.CommunityUser;
import com.takk.communityDatabase.repository.CommunityUserRepository;
import com.takk.communityDatabase.service.CommunityUserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CommunityUserServiceImpl implements CommunityUserService {

    private CommunityUserRepository communityUserRepository;

    @Autowired
    public CommunityUserServiceImpl(CommunityUserRepository communityUserRepository) {
        super();
        this.communityUserRepository = communityUserRepository;
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
        existingCommunity.setImages(communityUser.getImages());
        existingCommunity.setLocation(communityUser.getLocation());
        existingCommunity.setCounty(communityUser.getCounty());
        existingCommunity.setRegion(communityUser.getRegion());

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
}
