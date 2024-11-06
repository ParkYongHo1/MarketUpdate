package com.market.market.chatting.service;


import com.market.market.chatting.repository.ChatRepository;
import com.market.market.chatting.repository.ChatRoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class ChatService {

    @Autowired
    ChatRepository chatRepository;

    @Autowired
    ChatRoomRepository chatRoomRepository;

    Map<String,Object> responseMap = new HashMap<>();


    public Map<String,Object> makeChatRoom(Map<String,Object> body)
    {
        //여기에 방생성 로직 작성

        return responseMap;
    }

}
