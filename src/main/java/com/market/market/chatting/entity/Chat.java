package com.market.market.chatting.entity;

import com.market.market.chatting.dto.ChatDto;
import com.market.market.member.entity.Member;
import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Getter
@Entity
@Table(name="chat")
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Chat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "chat_id")
    private Long chatId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "chatroom_id")
    private ChatRoom chatroom;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "member_id")
    private Member member;

    @Column(name="sender_name",length = 20, unique = true)
    private String senderName;

    @Column(name="send_time")
    private Date sendTime;

    public static Chat toEntity(ChatDto dto)
    {
        ChatRoom joinChatRoom = ChatRoom.builder().chatroomId(dto.getChatroomId()).build();
        Member joinMember = Member.builder().id(dto.getMemberId()).build();

        return Chat.builder()
                .chatId(dto.getChatId())
                .chatroom(joinChatRoom)
                .member(joinMember)
                .senderName(dto.getSenderName())
                .sendTime(dto.getSendTime())
                .build();
    }

}
