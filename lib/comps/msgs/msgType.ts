type MessageDtoType = {
  chatRoomId: string;
  message: string;
  imageUrl?: string;
  agentId: string;
  messageType: string;
  timeSent: Date;
};

export default MessageDtoType;
