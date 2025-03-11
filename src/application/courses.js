import courses from "../insfastructure/schemas/course.js";

//Save Course data
export const saveCourse = async (req, res, next) => {
  try {
    await courses.create(req.body);
    res
      .status(201)
      .json({ message: "Course added successfully!", data: req.body });
  } catch (error) {
    next(error);
  }
};

export const CourseList = async (req, res, next) => {
  try {
    const CourseList = await courses.find();
    res.status(200).json(CourseList);
    //console.log(userList);
  } catch (error) {
    next(error);
    console.log("This is backend errror");
  }
};
