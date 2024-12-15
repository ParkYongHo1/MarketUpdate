package com.market.market.chatting.service;


import com.market.market.chatting.dto.ChatDto;
import com.market.market.chatting.dto.ChatRoomDto;
import com.market.market.chatting.entity.Chat;
import com.market.market.chatting.entity.ChatRoom;
import com.market.market.chatting.repository.ChatRepository;
import com.market.market.chatting.repository.ChatRoomRepository;
import com.market.market.member.repository.MemberRepository;
import com.market.market.product.entity.Product;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
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

    @Autowired
    MemberRepository memberRepository;

    Map<String,Object> responseMap = new HashMap<>();

    public Long findChatRoom(Map<String,Object> body)
    {
        int productSeq = (int)body.get("productSeq");
        String participantEmail = body.get("participantEmail").toString();

        return chatRoomRepository.findChatroomIdByProductSeqAndParticipantEmail(Long.valueOf(productSeq),participantEmail);
    }

    public Map<String,Object> selectChatList(Long chatRoomId)
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
            log.info("Error Message : "+e.getMessage());
        }
        return responseMap;
    }

    public Map<String,Object> makeChatRoom(Map<String,Object> body)
    {
        int productSeq = (int)body.get("productSeq");
        LocalDateTime localDateTime = LocalDateTime.now();
        Date now = Date.from(localDateTime.atZone(ZoneId.systemDefault()).toInstant());
        String masterEmail = "";
        String participantEmail = "";
        responseMap.clear();
        try{
            if(body.containsKey("masterEmail"))
            {
                masterEmail = body.get("masterEmail").toString();
            }
            if(body.containsKey("participantEmail"))
            {
                participantEmail = body.get("participantEmail").toString();
            }

            Product product = Product.builder().productSeq(Long.valueOf(productSeq)).build();
            ChatRoom chatRoom = ChatRoom.builder()
                    .product(product)
                    .createTime(now)
                    .masterEmail(masterEmail)
                    .participantEmail(participantEmail)
                    .build();

            chatRoomRepository.save(chatRoom);
            log.info("=========채팅방 생성 성공==========");
            responseMap.put("status","200");

        }catch (Exception e)
        {
            log.info("=========채팅방 생성 실패==========");
            log.info("Error Message : "+e.getMessage());
            responseMap.put("status","400");

        }
        return responseMap;
    }

    public Map<String,Object> selectChatRoomList(String email)
    {
        Map<String,Object> responseMap = new HashMap<>();
        try{
            List<ChatRoom> chatRoomList = chatRoomRepository.findChatroomByMasterEmailOrPaticipantEmail(email);
            List<Map<String,Object>> chatList = new ArrayList<>();
            SimpleDateFormat notTodayformatter = new SimpleDateFormat("yyyy-MM-dd HH:mm");
            SimpleDateFormat todayformatter = new SimpleDateFormat("MM-dd HH:mm");
            Calendar now = Calendar.getInstance();
            Calendar calendar = Calendar.getInstance();

            for(ChatRoom chatRoom : chatRoomList)
            {
                Map<String, Object> chatData = new HashMap<>();
                chatData.put("product_image","");
                chatData.put("chatroomId",chatRoom.getChatroomId());
                chatData.put("productSeq", chatRoom.getProduct().getProductSeq());
                Chat chat = chatRepository.findLatestChatByRoomId(chatRoom.getChatroomId());
                if(chatRoom.getMasterEmail() != email)
                {
                    chatData.put("chatMember",memberRepository.getNickname(chatRoom.getMasterEmail()));
                }
                if(chatRoom.getParticipantEmail() != email)
                {
                    chatData.put("chatMember",memberRepository.getNickname(chatRoom.getParticipantEmail()));
                }

                if(chat != null)
                {
                    chatData.put("lastetContent",chat.getChatContent());
                    calendar.setTime(chat.getSendTime());

                    if (now.get(Calendar.YEAR) == calendar.get(Calendar.YEAR) &&
                            now.get(Calendar.MONTH) == calendar.get(Calendar.MONTH) &&
                            now.get(Calendar.DAY_OF_MONTH) == calendar.get(Calendar.DAY_OF_MONTH)) {
                        chatData.put("lastetSendTime",todayformatter.format(chat.getSendTime()));
                    } else {
                        chatData.put("lastetSendTime",notTodayformatter.format(chat.getSendTime()));
                    }
                }
                chatList.add(chatData);
            }

            responseMap.put("status","200");
            responseMap.put("chatRoomList",chatList);

        } catch (Exception e)
        {
            responseMap.put("status","400");
            log.info("Error Message : "+e.getMessage());
        }
        return responseMap;
    }


    public Map<String,Object> selectChatData(Long chatroomId)
    {
        Map<String,Object> responseMap = new HashMap<>();


        return responseMap;
    }

    public void insertChat(ChatDto chatDto)
    {
        chatRepository.save(Chat.toEntity(chatDto));
    }

}
