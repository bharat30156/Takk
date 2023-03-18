package com.takk.communityDatabase.repository;

import com.takk.communityDatabase.model.CommunityUser;
import org.springframework.data.jpa.repository.JpaRepository;


public interface CommunityUserRepository extends JpaRepository<CommunityUser, Long> {
}
