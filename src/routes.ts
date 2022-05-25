import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(req: Request, res: Response) {
  CreateCourseService.execute({
    name: "NodeJS",
    duration: 10,
    educator: "Dani",
  }); // name, durations, educator => of Course Interface

  CreateCourseService.execute({
    name: "React.js",
    educator: "Diego",
    released_at: "21/05/2022",
  });

  return res.send();
}
