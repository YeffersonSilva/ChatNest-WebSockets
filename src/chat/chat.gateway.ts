import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
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

      // socket.emit('welcome-message', 'Welcome to the chat!')

      this.server.emit('on-clients-changed', this.chatService.getClients());

      socket.on('disconnect', () => {
        this.chatService.onClientDisconnect(socket.id);
        this.server.emit('on-clients-changed', this.chatService.getClients());
      });
    });
  }

  @SubscribeMessage('send-message')
  handleMessages(
    @MessageBody() message: string,
    @ConnectedSocket() client: Socket,
  ) {
    const { name, token } = client.handshake.auth;

    if (!message) {
      return;
    }

    this.server.emit('on-message', {
      userId: client.id,
      message: message,
      name: name,
    });
  }
}
