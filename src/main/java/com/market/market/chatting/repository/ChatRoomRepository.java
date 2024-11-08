package com.market.market.chatting.repository;

import com.market.market.chatting.entity.ChatRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ChatRoomRepository extends JpaRepository<ChatRoom,Long> {

    @Query("SELECT c.chatroomId " +
            "FROM ChatRoom c " +
            "WHERE c.product.productSeq = :productSeq AND c.participantId = :participantId")
    Long findChatroomIdByProductSeqAndParticipantId(@Param("productSeq") Long productSeq,
                                                    @Param("participantId") String participantId);
}
