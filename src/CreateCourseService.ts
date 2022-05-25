interface Course {
  name: string;
  duration?: number;
  educator: string;
  released_at?: string;
}

class CreateCourseService {
  execute({
    duration = 8,
    name,
    educator,
    released_at = "25/05/2022",
  }: Course) {
    // duration = 8 => if duration doesn't receive any information, then the value will be 8
    console.log(name, duration, educator, released_at);
  }
}

export default new CreateCourseService();
