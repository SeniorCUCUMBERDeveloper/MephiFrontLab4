interface Point {
    x: number;
    y: number;
}

function distance(x1: number, y1: number, x2: number, y2: number): number;
function distance(p1: Point, p2: Point): number;

function distance(
    a: number | Point,
    b: number | Point,
    c?: number,
    d?: number
): number {
    if (typeof a === 'number' && typeof b === 'number' && c !== undefined && d !== undefined) {
        const dx = a - c;
        const dy = b - d;
        return Math.sqrt(dx * dx + dy * dy);
    } else if (typeof a === 'object' && typeof b === 'object') {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.sqrt(dx * dx + dy * dy);
    } else {
        throw new Error('Неверные аргументы: ожидалось 4 числа или 2 объекта Point');
    }
}

console.log(distance(0, 0, 3, 4));

const p1: Point = { x: 0, y: 0 };
const p2: Point = { x: 3, y: 4 };
console.log(distance(p1, p2));