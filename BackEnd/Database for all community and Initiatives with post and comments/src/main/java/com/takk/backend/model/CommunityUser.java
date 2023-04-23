package com.takk.backend.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name = "communityUser")
public class CommunityUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "community_name", nullable = false)
    private String nameOfCommunity;
    @Column(name = "community_description")
    private String descriptionOfCommunity;
    @Column(name = "short_description_of_community")
    private String shortDescriptionOfCommunity;
    @Column(name = "community_images")
    private byte[] images;
    @Column(name = "location")
    private String location;
    @Column(name = "country")
    private String country;
    @Column(name = "region")
    private String region;
    @Column(name = "tags")
    private String tags;


    @OneToMany(mappedBy = "communityUser", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Post> posts = new ArrayList<>();

    public void addPost(Post post) {
        posts.add(post);
        post.setCommunityUser(this);
    }

    public void removePost(Post post) {
        posts.remove(post);
        post.setCommunityUser(null);
    }


}

