import { PostMessage, messages } from './model'
// 合同返回的最大新消息数
const MESSAGE_LIMIT = 10;


// 添加新消息  call方法
export function addMessage(text: string): void {
    const message = new PostMessage(text)
    messages.push(message)
}

// 查看新消息   view方法
export function getMessages(): PostMessage[] {
    const numMessages = MESSAGE_LIMIT > messages.length ? messages.length : MESSAGE_LIMIT;
    const startIndex = messages.length - numMessages
    const result = new Array<PostMessage>(numMessages)
    for(let i = 0; i < numMessages; i++) {
        result[i] = messages[i + startIndex];
      }
    return result
}

