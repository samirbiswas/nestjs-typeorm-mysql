import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateQuixDto } from './dto/createQuiz.dto';
import { QuizServices } from './quiz.service';

@Controller('/quiz')
export class QuizController {
    constructor(private quizService: QuizServices) { }
    @Get('/')
    getAllQuiz(): string[] {
        return this.quizService.getAllQuiz()
    }

    @Post('/')
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    createQuiz(@Body() quizData: CreateQuixDto) {

        return { data: quizData }

    }


}
