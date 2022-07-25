import { BadRequestException } from "@nestjs/common";

const m = Math;
const d = Date;
const h = 16;
const x = (n: number) => m.floor(n).toString(h);
const t = (n: number) => x(n / 1000);
const u = (n: number) => ' '.repeat(n).replace(/./g, () => x(m.random() * h));

export const ObjectID = (n: number = d.now()) => `${t(n)}${u(h)}`;

export const IsObjectIdValid = (value: string) => {
    if (value.match(/^[0-9a-fA-F]{24}$/)) {
        return value;
    } else {
        throw new BadRequestException('id must be a valid objectId');
    }
};