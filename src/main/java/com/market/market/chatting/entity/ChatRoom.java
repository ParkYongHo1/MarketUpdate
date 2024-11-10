package com.market.market.chatting.entity;

import com.market.market.chatting.dto.ChatRoomDto;
import com.market.market.member.entity.Member;
import com.market.market.product.dto.ProductDto;
import com.market.market.product.entity.Product;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

@Getter
@Entity
@Table(name="chat_room")
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ChatRoom {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="chatroom_id")
    private Long chatroomId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="product_seq",nullable=false)
    private Product product;

    @Column(name="master_id",length = 100)
    private String masterId;

    @Column(name="participant_id",length = 100)
    private String participantId;

    @Column
    Date createTime;

    public static ChatRoom toEntity(ChatRoomDto dto){

        Product joinProduct = Product.builder().productSeq(dto.getProductSeq()).build();

        return ChatRoom.builder()
                .chatroomId(dto.getChatroomId())
                .product(joinProduct)
                .createTime(dto.getCreateTime())
                .masterId(dto.getMasterId())
                .participantId(dto.getParticipantId())
                .build();
    }

}
