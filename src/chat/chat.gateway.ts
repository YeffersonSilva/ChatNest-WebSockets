import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { OnModuleInit } from '@nestjs/common';
import { Server, Socket } from 'socket.io';

import { ChatService } from './chat.service';

@WebSocketGateway()
export class ChatGateway implements OnModuleInit {
  @WebSocketServer()
  public server: Server;

  constructor(private readonly chatService: ChatService) {}

  onModuleInit() {
    this.server.on('connection', (socket: Socket) => {
      const { name, token } = socket.handshake.auth;
      if (!name) {
        socket.disconnect();
        return;
      }

      this.chatService.onClientConnect({
        id: socket.id,
        name,
      });

      socket.emit('welcome-message','Welcome to the chat!')

      socket.on('disconnect', () => {
        this.chatService.onClientDisconnect(socket.id);
      });
    });
  }
}
