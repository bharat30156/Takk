package com.Project.Takk.SignupQuestions;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class UserDataController {
    @Autowired
    private UserDetailsRepository userDetailsRepository;

    @RequestMapping(method=RequestMethod.POST, value="/userdata")
    public void addUserData(@RequestBody UserData userdata) {
        userDetailsRepository.save(userdata);
    }
}
