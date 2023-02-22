import { GameService } from './services/game.service';
import { GameController } from './controlers/game.controller';
import { WebSocketGateway } from '@nestjs/websockets';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './entities/Game';

@Module({
    imports: [TypeOrmModule.forFeature([Game])],
    controllers: [],
    providers: [GameService, GameController]
})
export class GameModule { }
