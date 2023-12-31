import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error";

export class RequestValidationError extends CustomError {
    statusCode = 500
    constructor(public errors: ValidationError[]) {
        super("Invalid input")
        Object.setPrototypeOf(this, RequestValidationError.prototype)
    }

    serializeErrors() {
        return this.errors.map(err => {
            return {message: err.msg, field: err.type}
        })
    }
}