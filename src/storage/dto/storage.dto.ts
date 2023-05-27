import { IsInt, Min } from "class-validator";

export class CreateStorageDto {
    @Min(1)
    @IsInt()
    book: number;
    
    @Min(1)
    @IsInt()
    amount: number;
}