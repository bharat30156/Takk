package com.Project.Takk.SignupQuestions;

import jakarta.persistence.Entity;

@Entity
public class UserData {
    private String interests;
    private String location;

    public String getInterests() {
        return interests;
    }

    public void setInterests(String interests) {
        this.interests = interests;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
