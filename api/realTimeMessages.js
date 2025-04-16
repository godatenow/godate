// messagesService.js
import { sendMessageToFirestore, getMessagesFromFirestore } from './firestore';

export async function sendMessage(message, senderId, recipientId) {
  try {
    await sendMessageToFirestore({ message, senderId, recipientId, timestamp: Date.now() });
    return { success: true };
  } catch (error) {
    console.error("שגיאה בשליחת הודעה:", error);
    return { success: false, error };
  }
}

export async function fetchMessages(conversationId) {
  try {
    const messages = await getMessagesFromFirestore(conversationId);
    return messages;
  } catch (error) {
    console.error("שגיאה בטעינת הודעות:", error);
    return [];
  }
}
