package com.market.market.chatting.controller;


import com.market.market.chatting.service.ChatService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/chat")
public class ChatController {

    @Autowired
    ChatService chatService;

    Map<String,Object> responseMap = new HashMap<>();

    @PostMapping("/startChat")
    public Map<String,Object> makeChatRoom(@RequestBody Map<String,Object> body)
    {
        Long chatRoomId = chatService.findChatRoom(body);

        if (chatRoomId != null)
        {
            responseMap = chatService.selectChatRoom(chatRoomId);
        }
        else
        {
            responseMap = chatService.makeChatRoom(body);
        }

        return responseMap;
    }

}
