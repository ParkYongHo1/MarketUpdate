package com.market.market.chatting.repository;

import com.market.market.chatting.entity.Chat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ChatRepository extends JpaRepository<Chat,Long> {
    List<Chat> findByChatroom_ChatroomId(Long chatroomId);

    @Query(value = "SELECT * FROM chat WHERE chatroom_id = :roomId ORDER BY chat_id DESC LIMIT 1", nativeQuery = true)
    Chat findLatestChatByRoomId(@Param("roomId") Long roomId);

}
