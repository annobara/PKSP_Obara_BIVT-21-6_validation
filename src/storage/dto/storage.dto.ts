import { IsNumber, Min } from "class-validator";

export class CreateStorageDto {
    @IsNumber()
    @Min(1)
    book: number;
    
    @IsNumber()
    @Min(1)
    amount: number;
}