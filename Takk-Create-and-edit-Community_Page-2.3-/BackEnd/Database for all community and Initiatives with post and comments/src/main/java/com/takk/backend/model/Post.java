package com.takk.backend.model;


import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "post")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "description")
    private String description;
    @Column(name = "likes")
    private int likes;
    @Column(name = "comments")
    private int comments;
    @Column(name = "shares")
    private int shares;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "community_user_id")
    private CommunityUser communityUser;

    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
    private List<Comment> commentsList;

    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
    private List<Like> likesList;
}
