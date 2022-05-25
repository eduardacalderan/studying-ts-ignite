"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    execute({ duration = 8, name, educator, released_at = "25/05/2022", }) {
        // duration = 8 => if duration doesn't receive any information, then the value will be 8
        console.log(name, duration, educator, released_at);
    }
}
exports.default = new CreateCourseService();
