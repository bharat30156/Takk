package com.takk.communityDatabase.controller;

import com.takk.communityDatabase.model.CommunityUser;
import com.takk.communityDatabase.service.CommunityUserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/communityUser")
public class CommunityUserController {

    private CommunityUserService communityUserService;

    public CommunityUserController(CommunityUserService communityUserService) {
        super();
        this.communityUserService = communityUserService;
    }

    //building create communityUser Rest API
    @PostMapping("/create")
    public ResponseEntity<CommunityUser> saveCommunityUser( @RequestBody CommunityUser communityUser){
        return new ResponseEntity<CommunityUser>(communityUserService.saveCommunityUser(communityUser), HttpStatus.CREATED);
    }

    //build get all community Rest API
    @GetMapping
    public List<CommunityUser> getAllCommunityUser(){
        return communityUserService.getAllCommunityUser();
    }

    //build get communityUser ID Rest API
    //http://localhost:8081/api/communityUser/1
    @GetMapping("{id}")
    public ResponseEntity<CommunityUser> getCommunityUserByID( @PathVariable("id") long communityUserid){
        return new ResponseEntity<CommunityUser>(communityUserService.getCommunityUserByID(communityUserid), HttpStatus.OK);
    }

    //Build update Community Rest API
    //http://localhost:8081/api/communityUser/1
    @PutMapping("{id}")
    public ResponseEntity<CommunityUser> updateCommunityUser(@PathVariable("id") long id
                                                            ,@RequestBody CommunityUser communityUser){
        return new ResponseEntity<CommunityUser>(communityUserService.updateCommunityUser(communityUser, id), HttpStatus.OK);
    }

    //Build delete community rest API
    //http://localhost:8081/api/communityUser/1
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteCommunityUser(@PathVariable("id") long id){
        //delete the community from database
        communityUserService.deleteCommunityUser(id);
        return new ResponseEntity<String>("Community deleted Sucessfuly", HttpStatus.OK);
    }
}
