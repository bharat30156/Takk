package com.Initiative.Database.model;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
@Entity
@Table(name = "initiativeUser")
public class InitiativeUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "initiative_name", nullable = false)
    @NotBlank(message = "Initiative name cannot be blank")
    private String nameofInitiative;
    @Column(name = "initiative_description")
    private String descriptionOfInitiative;
    @Column(name = "short_initiative_description")
    private String shortDescriptionOfInitiative;
    @Column(name = "initiative_imagesAndVideo")
    private byte[] imagesAndVideo;
    @Column(name = "county")
    private String county;
    @Column(name = "region")
    private String region;
    @Column(name= "tags")
    private String tags;
}
