import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { QuizServices } from './quiz.service';

@Module({
    imports: [],
    controllers: [QuizController],
    providers: [QuizServices]
})
export class QuizModule { }
