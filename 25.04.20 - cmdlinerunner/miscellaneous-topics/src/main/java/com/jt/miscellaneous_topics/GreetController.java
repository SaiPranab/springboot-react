package com.jt.miscellaneous_topics;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController 
public class GreetController {
    @RequestMapping(value = "/hello", method = RequestMethod.POST)
    public String greet(){
        return "user created";
    }

    @RequestMapping("/")
    public String home() {
        return "Home Page";
    }
}

/*
 * get - extract resource
 * post - creating a resource
 * put - complete update to the existing resource
 * patch - partial update to the existing resource
 * delete - delete the resource
 */

 // create-user
 // extract-user
 // update-user
 // delete-user