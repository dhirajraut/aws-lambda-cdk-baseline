package com.github.dhirajraut.aws.lambdas;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;

public class Handler implements RequestHandler<String, String> {

    @Override
    public String handleRequest(String input, Context context) {
        
        printMessage(context, "Hello...");
        return input;
    }
    
    public void printMessage(Context context, String message) {
        if (context != null && context.getLogger() != null) {
            context.getLogger().log(message);
        }
        else {
            System.out.println(message);
        }
    }
}
