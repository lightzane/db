import { ApiBodyOptions, ApiOperationOptions } from "@nestjs/swagger";
import { mockCreate } from "../mocks/create-example.mock";
import { mockCreateMultiple } from '../mocks/create-multiple-example.mock';
import { mockUpdate } from "../mocks/update-example.mock";

export const API_OPERATION = {
    get Create(): ApiOperationOptions {
        return {
            summary: 'Push data to collection',
            description: 'Inserts your data object into the specified collection<br>It is preferred to insert a <b>single JSON object</b> or an <b>array of JSON object</b>.<br><em>See examples below</em>'
        };
    },
    get Read(): ApiOperationOptions {
        return {
            summary: 'Retrieve data from collection',
            description: 'Gets the list of data that was pushed in the specified collection'
        };
    },
    get Update(): ApiOperationOptions {
        return {
            summary: 'Modify existing data in collection',
            description: 'Modifies a data existing in the collection based on <b>_id</b> specified'
        };
    },
    get Delete(): ApiOperationOptions {
        return {
            summary: 'Delete existing data in collection',
            description: 'Deletes an existing data from the collection based on <b>_id</b> specified'
        };
    }
};

export const API_BODY = {
    get Create(): ApiBodyOptions {
        return {
            schema: {
                // example: mockCreate()
            },
            examples: {
                single: { value: mockCreate() },
                multiple: { value: mockCreateMultiple() }
            }
        };
    },
    get Update(): ApiBodyOptions {
        return {
            schema: {
                example: mockUpdate()
            }
        };
    }
};