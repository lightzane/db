import { applyDecorators } from "@nestjs/common";
import { ApiBody, ApiOperation } from "@nestjs/swagger";
import { API_BODY, API_OPERATION } from "../constants/swagger.constant";

export const SwaggerCreate = () => (
    applyDecorators(
        ApiOperation(API_OPERATION.Create),
        ApiBody(API_BODY.Create)
    )
);

export const SwaggerRead = () => (
    applyDecorators(
        ApiOperation(API_OPERATION.Read)
    )
);

export const SwaggerUpdate = () => (
    applyDecorators(
        ApiOperation(API_OPERATION.Update),
        ApiBody(API_BODY.Update)
    )
);

export const SwaggerDelete = () => (
    applyDecorators(
        ApiOperation(API_OPERATION.Delete)
    )
);