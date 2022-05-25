"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
const CreateCourseService_1 = __importDefault(require("./CreateCourseService"));
function createCourse(req, res) {
    CreateCourseService_1.default.execute({
        name: "NodeJS",
        duration: 10,
        educator: "Dani",
    }); // name, durations, educator => of Course Interface
    CreateCourseService_1.default.execute({
        name: "React.js",
        educator: "Diego",
        released_at: "21/05/2022",
    });
    return res.send();
}
exports.createCourse = createCourse;
