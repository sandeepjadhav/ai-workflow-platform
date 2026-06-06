import { api } from "./axios";

export async function createConversation({title}: {title: string}) {
  const response =
    await api.post(
      "api/chat/conversations",
      {
        title,
      }
    );

  return response.data;
}

export async function getConversations() {

  const response =
    await api.get(
      "api/chat/conversations",
    );

  return response.data;
}


export async function sendMessage(
  conversationId: string,
  content: string,
) {
  const response =
    await api.post(
      "api/chat/messages",
      {
        conversationId,
        content,
      }
    );

  return response.data;
}

export async function getMessages(
  conversationId: string,
) {
  const response =
    await api.get(
      `api/chat/messages/${conversationId}`
    );

  return response.data;
}