package com.takk.backend.repository;


import com.takk.backend.model.CommunityUser;
import org.springframework.data.jpa.repository.JpaRepository;


public interface CommunityUserRepository extends JpaRepository<CommunityUser, Long> {
}
