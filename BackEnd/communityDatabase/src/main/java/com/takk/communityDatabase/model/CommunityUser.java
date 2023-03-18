package com.takk.communityDatabase.model;


import jakarta.persistence.*;
import lombok.Data;

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
    @Column(name = "community_images")
    private byte[] images;
    @Column(name = "location")
    private String location;
    @Column(name = "county")
    private String county;
    @Column(name = "region")
    private String region;
}
