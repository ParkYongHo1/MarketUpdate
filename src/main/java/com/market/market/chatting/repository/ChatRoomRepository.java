package com.market.market.chatting.repository;

import com.market.market.chatting.entity.ChatRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ChatRoomRepository extends JpaRepository<ChatRoom,Long> {

    @Query("SELECT c.chatroomId " +
            "FROM ChatRoom c " +
            "WHERE c.product.productSeq = :productSeq AND c.participantEmail = :participantEmail")
    Long findChatroomIdByProductSeqAndParticipantEmail(@Param("productSeq") Long productSeq,
                                                    @Param("participantEmail") String participantEmail);

    @Query("SELECT c " +
            "FROM ChatRoom c " +
            "WHERE c.masterEmail = :email OR c.participantEmail = :email")
    List<ChatRoom> findChatroomByMasterEmailOrPaticipantEmail(@Param("email") String email);

}
