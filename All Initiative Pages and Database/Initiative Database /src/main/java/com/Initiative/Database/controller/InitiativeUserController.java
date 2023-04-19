package com.Initiative.Database.controller;

import com.Initiative.Database.model.InitiativeUser;
import com.Initiative.Database.service.InitiativeUserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;


import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/initiativeUser")
public class InitiativeUserController {

    private InitiativeUserService initiativeUserService;

    public InitiativeUserController(InitiativeUserService initiativeUserService){
        super();
        this.initiativeUserService = initiativeUserService;
    }

    // Building create initiativeUser Rest API
//    @PostMapping("/create")
//    public ResponseEntity<InitiativeUser> saveInitiativeUser(@RequestBody InitiativeUser initiativeUser){
//        return new ResponseEntity<InitiativeUser>(initiativeUserService.saveInitiativeUser(initiativeUser), HttpStatus.CREATED);
//    }

    @PostMapping("/create")
    public ResponseEntity<?> saveInitiativeUser(@Valid @RequestBody InitiativeUser initiativeUser, BindingResult result){
        if(result.hasErrors()){
            return new ResponseEntity<>(result.getAllErrors(), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(initiativeUserService.saveInitiativeUser(initiativeUser), HttpStatus.CREATED);
    }

    // building get all initiative Rest API
    @GetMapping
    public List<InitiativeUser> getAllInitiativeUser(){
        return initiativeUserService.getAllInitiativeUser();
    }

    // Building Api to get Initiatives by their ID
    //http://localhost:8081/api/initiativeUser/1
    @GetMapping("{id}")
    public ResponseEntity<InitiativeUser> getInitiativeUserByID(@PathVariable("id") long initiativeUserid){
        return new ResponseEntity<InitiativeUser>(initiativeUserService.getInitiativeUserByID(initiativeUserid), HttpStatus.OK);
    }
    @PutMapping("{id}")
    public ResponseEntity<InitiativeUser> updateInitiativeUser(@PathVariable("id") long id,
                                                               @RequestBody InitiativeUser initiativeUser){
        return new ResponseEntity<InitiativeUser>(initiativeUserService.updateInitiativeUser(initiativeUser, id), HttpStatus.OK);
    }

    //Build delete initiative rest API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteInitiativeUser(@PathVariable("id") long id){
        //delete the initiative from database
        initiativeUserService.deleteInitiativeUser(id);
        return new ResponseEntity<String>("Initiative deleted Sucessfully", HttpStatus.OK);
    }


}
