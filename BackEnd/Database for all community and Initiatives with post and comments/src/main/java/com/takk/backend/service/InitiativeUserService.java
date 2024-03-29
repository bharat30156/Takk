package com.takk.backend.service;

import com.takk.backend.model.InitiativeUser;

import java.util.List;

public interface InitiativeUserService {

    InitiativeUser saveInitiativeUser(InitiativeUser initiativeUser);

    List<InitiativeUser> getAllInitiativeUser();

    InitiativeUser getInitiativeUserByID(long id);

    InitiativeUser updateInitiativeUser(InitiativeUser initiativeUser, long id);

    void deleteInitiativeUser(long id);

}
