import { createWriteStream, mkdirSync, WriteStream } from 'fs';
import { join } from 'path';

export const openFile = (name: string) : WriteStream => {
    mkdirSync('out', { recursive: true });
    const filePath = join('out', name + '.txt');
    return createWriteStream(filePath, { flags: 'a' });
}

export const addLine = (stream: WriteStream, line: string) => {
    stream.write(line + '\n');
}

export const closeFile = (stream: WriteStream) => {
    stream.end();
}
