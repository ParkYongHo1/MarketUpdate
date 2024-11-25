package com.market.market.exception;

public class JwtCustomException extends RuntimeException{

    private final String message;

    public JwtCustomException(String message)
    {
        super(message);
        this.message = message;
    }

    public String getMessage()
    {
        return message;
    }
}
