package com.Initiative.Database.repository;

import com.Initiative.Database.model.InitiativeUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InitiativeUserRepository extends JpaRepository<InitiativeUser, Long> {
}
