import { IsNotEmpty, Length } from "class-validator";

export class CreateQuixDto {

    @IsNotEmpty({ message: "The title should not be empty" })
    @Length(3, 255)
    title: string;

    @IsNotEmpty({ message: "The description should not be empty" })
    @Length(3, 500)
    description: string;


}