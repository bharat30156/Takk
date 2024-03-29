package com.takk.backend.service.impl;


import com.takk.backend.exception.ResourceNotFoundException;
import com.takk.backend.model.InitiativeUser;
import com.takk.backend.repository.InitiativeUserRepository;
import com.takk.backend.service.InitiativeUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InitiativeUserServiceImpl implements InitiativeUserService {

    private InitiativeUserRepository initiativeUserRepository;

    @Autowired
    public InitiativeUserServiceImpl(InitiativeUserRepository initiativeUserRepository){
        super();
        this.initiativeUserRepository = initiativeUserRepository;
    }

    @Override
    public InitiativeUser saveInitiativeUser(InitiativeUser initiativeUser) {
        return initiativeUserRepository.save(initiativeUser);
    }

    @Override
    public List<InitiativeUser> getAllInitiativeUser() {
        return initiativeUserRepository.findAll();
    }

    @Override
    public InitiativeUser getInitiativeUserByID(long id) {
        return initiativeUserRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("InitiativeUser", "Id", id));
    }

    @Override
    public InitiativeUser updateInitiativeUser(InitiativeUser initiativeUser, long id) {
        // First need to check whether initiative user with given Id is exists in the database or not
        InitiativeUser existingInitiative = initiativeUserRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("Initiativeuser", "Id", id));

        existingInitiative.setNameofInitiative(initiativeUser.getNameofInitiative());
        existingInitiative.setDescriptionOfInitiative(initiativeUser.getDescriptionOfInitiative());
        existingInitiative.setShortDescriptionOfInitiative(initiativeUser.getShortDescriptionOfInitiative());
        existingInitiative.setImagesAndVideo(initiativeUser.getImagesAndVideo());
        existingInitiative.setCountry(initiativeUser.getCountry());
        existingInitiative.setRegion(initiativeUser.getRegion());
        existingInitiative.setTags(initiativeUser.getTags());

        initiativeUserRepository.save(existingInitiative);
        return existingInitiative;
    }

    @Override
    public void deleteInitiativeUser(long id) {
        // check whether the initiative exists in the database or not
        initiativeUserRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("InitiativeUser", "Id", id));
        initiativeUserRepository.deleteById(id);

    }
}
