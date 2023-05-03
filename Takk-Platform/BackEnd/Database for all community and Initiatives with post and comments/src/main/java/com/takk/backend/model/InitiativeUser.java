package com.takk.backend.model;

import jakarta.persistence.*;
//import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
@Entity
@Table(name = "initiativeUser")
public class InitiativeUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "initiative_name", nullable = false)
   // @NotBlank(message = "Initiative name cannot be blank")
    private String nameofInitiative;
    @Column(name = "initiative_description")
    private String descriptionOfInitiative;
    @Column(name = "short_initiative_description")
    private String shortDescriptionOfInitiative;
    @Column(name = "images")
    @Lob
    private String imagesAndVideo;
    @Column(name = "country")
    private String country;
    @Column(name = "region")
    private String region;
    @Column(name = "tags")
    private String tags;
}