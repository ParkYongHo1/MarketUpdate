package com.market.market.chatting.dto;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.market.market.chatting.entity.ChatRoom;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ChatRoomDto {

    Long chatroomId;
    Long productSeq;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm", timezone = "Asia/Seoul")
    Date createTime;

    private String masterId;

    private String participantId;

    public static ChatRoomDto toDto(ChatRoom entity)
    {
        return ChatRoomDto.builder()
                .chatroomId(entity.getChatroomId())
                .productSeq(entity.getProduct().getProductSeq())
                .createTime(entity.getCreateTime())
                .masterId(entity.getMasterId())
                .participantId(entity.getParticipantId())
                .build();
    }

}
