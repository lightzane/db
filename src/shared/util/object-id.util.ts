const m = Math;
const d = Date;
const h = 16;
const x = (n: number) => m.floor(n).toString(h);
const t = (n: number) => x(n / 1000);
const u = (n: number) => ' '.repeat(n).replace(/./g, () => x(m.random() * h));

export const ObjectID = (n: number = d.now()) => `${t(n)}${u(h)}`;
