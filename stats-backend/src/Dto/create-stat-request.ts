import { ApiProperty } from "@nestjs/swagger";

export class CreateStatRequest {
    @ApiProperty()
    date: String;

    @ApiProperty()
    views?: number;

    @ApiProperty()
    clicks?: number;

    @ApiProperty()
    cost?: number;
}