interface Logger {
    log(message: string): void;
}

class ConsoleWriter {
    write(text: string): void {
        console.log(text);
    }
}

class ConsoleLoggerAdapter implements Logger {
    private writer: ConsoleWriter;

    constructor(writer: ConsoleWriter) {
        this.writer = writer;
    }

    log(message: string): void {
        this.writer.write(`[LOG] ${message}`);
    }
}

const writer = new ConsoleWriter();
const logger: Logger = new ConsoleLoggerAdapter(writer);
logger.log('Привет, мир!');