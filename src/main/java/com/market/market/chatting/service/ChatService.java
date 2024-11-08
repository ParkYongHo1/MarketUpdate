package com.market.market.chatting.service;


import com.market.market.chatting.dto.ChatDto;
import com.market.market.chatting.entity.Chat;
import com.market.market.chatting.entity.ChatRoom;
import com.market.market.chatting.repository.ChatRepository;
import com.market.market.chatting.repository.ChatRoomRepository;
import com.market.market.product.entity.Product;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.*;

@Slf4j
@Service
public class ChatService {

    @Autowired
    ChatRepository chatRepository;

    @Autowired
    ChatRoomRepository chatRoomRepository;

    Map<String,Object> responseMap = new HashMap<>();

    public Long findChatRoom(Map<String,Object> body)
    {
        int productSeq = (int)body.get("productSeq");
        String participantId = body.get("participantId").toString();

        return chatRoomRepository.findChatroomIdByProductSeqAndParticipantId(Long.valueOf(productSeq),participantId);
    }

    public Map<String,Object> selectChatRoom(Long chatRoomId)
    {
        responseMap.clear();
        try{
            List<Chat> chatList = chatRepository.findByChatroom_ChatroomId(chatRoomId);
            List<ChatDto> chatDataList = new ArrayList<>();
            log.info("chatroom_id : "+chatRoomId+" 채팅 내역 조회");
            responseMap.put("status","200");
            for(Chat chatData : chatList)
            {
                chatDataList.add(ChatDto.toDto(chatData));
            }

           responseMap.put("chatList",chatDataList);
        } catch (Exception e) {
            responseMap.put("status", "400");
        }
        return responseMap;
    }

    public Map<String,Object> makeChatRoom(Map<String,Object> body)
    {
        int productSeq = (int)body.get("productSeq");
        LocalDateTime localDateTime = LocalDateTime.now();
        Date now = Date.from(localDateTime.atZone(ZoneId.systemDefault()).toInstant());
        String masterId = "";
        String participantId = "";
        responseMap.clear();
        try{
            if(body.containsKey("masterId"))
            {
                masterId = body.get("masterId").toString();
            }
            if(body.containsKey("participantId"))
            {
                participantId = body.get("participantId").toString();
            }

            Product product = Product.builder().productSeq(Long.valueOf(productSeq)).build();
            ChatRoom chatRoom = ChatRoom.builder()
                    .product(product)
                    .createTime(now)
                    .masterId(masterId)
                    .participantId(participantId)
                    .build();

            chatRoomRepository.save(chatRoom);
            log.info("=========채팅방 생성 성공==========");
            responseMap.put("status","200");

        }catch (Exception e)
        {
            log.info("=========채팅방 생성 실패==========");
            responseMap.put("status","400");
        }
        return responseMap;
    }

}
