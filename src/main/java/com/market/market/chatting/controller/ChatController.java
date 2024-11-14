package com.market.market.chatting.controller;


import com.market.market.chatting.dto.ChatDto;
import com.market.market.chatting.entity.ChatRoom;
import com.market.market.chatting.service.ChatService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/chat")
public class ChatController {

    @Autowired
    ChatService chatService;

    private final SimpMessagingTemplate messagingTemplate;

    Map<String,Object> responseMap = new HashMap<>();

    @PostMapping("/startChat")
    public Map<String,Object> makeChatRoom(@RequestBody Map<String,Object> body)
    {
        Long chatRoomId = chatService.findChatRoom(body);

        if (chatRoomId != null)
        {
            responseMap = chatService.selectChatList(chatRoomId);
        }
        else
        {
            responseMap = chatService.makeChatRoom(body);
        }

        return responseMap;
    }

    @MessageMapping("/chat.sendMessage")
    public void sendMessage(@Payload ChatDto chatDto)
    {
        messagingTemplate.convertAndSend("/topic/public/"+chatDto.getChatroomId(),chatDto);
    }

    @MessageMapping("chat.addUser")
    @SendTo("/topic/public")
    public ChatDto addUser(ChatDto chatDto, SimpMessageHeaderAccessor headerAccessor)
    {
        headerAccessor.getSessionAttributes().put("username",chatDto.getSenderName());
        return chatDto;
    }

    @GetMapping("/selectChatRoomList")
    public Map<String,Object> selectChatRoom(@RequestBody Map<String,Object> body)
    {
        return chatService.selectChatRoomList(body);
    }

}
