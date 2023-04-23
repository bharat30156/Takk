package com.takk.backend.repository;

import com.takk.backend.model.CommunityUser;
import com.takk.backend.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findByCommunityUser(CommunityUser communityUser);
}
