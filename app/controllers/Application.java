package controllers;

import play.*;
import play.mvc.*;

import views.html.*;

public class Application extends Controller {

    public static Result index() {
        return ok(index.render("Your new application is ready."));
    }
    public static Result dashboard(){
        return ok(dashboard.render());
    }
    public static Result agentHome(){
        return ok(agentHomepage.render());
    }
    public static Result provider(String provider) {
         if(provider.equals("EUCL")){
                return ok(eucl.render(provider));
            }


        return ok("Unknown service");
    }

}
