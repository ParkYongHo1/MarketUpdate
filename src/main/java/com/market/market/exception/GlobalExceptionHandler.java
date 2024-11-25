package com.market.market.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(JwtCustomException.class)
    public ResponseEntity<Map<String,Object>> handleJwtException(JwtCustomException ex){
        Map<String,Object> responseMap = new HashMap<>();
        responseMap.put("status","400");
        responseMap.put("message",ex.getMessage());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseMap);
    }
}
