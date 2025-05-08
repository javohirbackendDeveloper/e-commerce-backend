import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { RmqContext, RmqOptions, Transport } from "@nestjs/microservices";

@Injectable()
export class RmqService {
  constructor(private readonly configService: ConfigService) {}

  getOptions(queue: string, noAck: boolean = false): RmqOptions {
    const url = this.configService.get<string>("RABBIT_MQ_URI");
    if (!url) {
      throw new Error("RABBIT_MQ_URI is not defined in config");
    }

    return {
      transport: Transport.RMQ,
      options: {
        urls: [url],
        queue: this.configService.get<string>(`RABBIT_MQ_${queue}_QUEUE`),
        noAck,
        persistent: true,
      },
    };
  }

  ack(context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();
    channel.ack(originalMessage);
  }
}
