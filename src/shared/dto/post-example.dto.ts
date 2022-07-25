import { ApiProperty } from "@nestjs/swagger";

// * This is just created for Swagger to display an input field for the BODY
// User can still pass any shape of object into the request body
export class PostExample {
    @ApiProperty()
    example: unknown;
}