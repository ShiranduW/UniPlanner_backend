import courses from "../insfastructure/schemas/course.js";
import schedules from "../insfastructure/schemas/schedule.js";

export const getTimeTable = async (req, res, next) => {
  try {
    const { degreeProgram } = req.params;

    // get all courses for the specific degree program
    const programCourses = await courses.find({ degreeProgram });

    // gets all schedules for those courses
    const courseSchedules = await schedules.find({
      courseID: programCourses.map((course) => course.courseCode),
    });

    // combine course and schedules data using data mapping
    const timeTable = programCourses.map((course) => ({
      ...course.toObject(),
      schedules: courseSchedules.filter(
        (schedule) => schedule.courseID === course.courseCode
      ),
    }));

    res.status(200).json(timeTable);
  } catch (error) {
    next(error);
  }
};
