package com.takk.backend.repository;

import com.takk.backend.model.InitiativeUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InitiativeUserRepository extends JpaRepository<InitiativeUser, Long> {
}

