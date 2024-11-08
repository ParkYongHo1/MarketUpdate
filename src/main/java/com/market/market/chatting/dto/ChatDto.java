package com.market.market.chatting.dto;


import com.market.market.chatting.entity.Chat;
import com.market.market.chatting.entity.ChatRoom;
import com.market.market.member.entity.Member;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ChatDto {

    Long chatId;
    Long chatroomId;
    String memberId;
    String senderName;
    Date sendTime;
    String chatContent;

    public static ChatDto toDto(Chat entity)
    {
        return ChatDto.builder()
                .chatId(entity.getChatId())
                .chatroomId(entity.getChatroom().getChatroomId())
                .memberId(entity.getMember().getId())
                .senderName(entity.getSenderName())
                .sendTime(entity.getSendTime())
                .chatContent(entity.getChatContent())
                .build();
    }

}
