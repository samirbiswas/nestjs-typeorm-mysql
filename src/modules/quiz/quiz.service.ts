import { Injectable } from "@nestjs/common";


@Injectable()
export class QuizServices {
    getAllQuiz(): string[] {

        return ["samir"]
    }

}