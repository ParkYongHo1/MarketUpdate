package com.market.market.pagination.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.market.market.pagination.service.PaginationService;

@RestController
@RequestMapping(value = "/pagination")
public class PaginationController {

    @Autowired
    PaginationService paginationService;

    Map<String, Object> responseMap = new HashMap<>();

    @GetMapping("/page")
    public Map<String, Object> mainPagination(@RequestParam() String filter, @RequestParam() String category, @RequestParam() int page, @RequestParam() int offset){
        responseMap = paginationService.getPagination(filter, category,page,offset);

        return responseMap;
    }

}
