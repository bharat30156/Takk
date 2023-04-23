package com.takk.backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "post")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = " description", nullable = false)
    private String description;
    @Column(name = "num_likes")
    private Integer numLikes = 0;
    @Column(name = "num_comments")
    private Integer numComments = 0;
    @Column(name = "num_shares")
    private Integer numShares = 0;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "community_user_id", nullable = false)
    private CommunityUser communityUser;


}
