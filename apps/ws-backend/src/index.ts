import { WebSocketServer } from "ws";
import { prisma } from "@repo/db";

const wss = new WebSocketServer({ port: 3002 });

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    ws.send("pong");
  });
});
