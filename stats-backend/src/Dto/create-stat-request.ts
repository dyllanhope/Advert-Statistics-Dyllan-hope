import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate } from "class-validator";

export class CreateStatRequest {
    @ApiProperty({
        description: 'Date of statistic',
        default: "2020-01-01"
    })
    @Type(() => Date)
    @IsDate()
    date: Date;

    @ApiProperty({
        description: 'Number of views',
        minimum: 1,
        default: 1
    })
    views?: number;

    @ApiProperty({
        description: 'Number of clicks',
        minimum: 1,
        default: 1
    })
    clicks?: number;

    @ApiProperty({
        description: 'Total cost paid out for the advertisement',
        minimum: 1,
        default: 1
    })
    cost?: number;
}