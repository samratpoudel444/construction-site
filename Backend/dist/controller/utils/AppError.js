export class AppError extends Error {
    code;
    constructor(message, code) {
        super(message);
        this.code = code;
        this.name = 'AppError';
    }
}
