import users from "../insfastructure/schemas/user.js";

//Save User data
export const saveUser = async (req, res, next) => {
  try {
    await users.create(req.body);
    res
      .status(201)
      .json({ message: "Form submitted successfully!", data: req.body });
  } catch (error) {
    next(error);
  }
};

export const userAuth = async (req, res, next) => {
  const { studentId, registerNumber } = req.body;
  try {
    const user = await users.findOne({ studentId, registerNumber });

    if (!user) {
      res.status(404).json({
        message: "Incorrect username password",
      });
    } else {
      res.status(201).json({
        message: "Login successfull",
        userType: user.userType,
        name: user.name,
        degreeProgram: user.degreeProgram,
      });
    }
  } catch (error) {
    next(error);
  }
};

export const UserList = async (req, res, next) => {
  try {
    const userList = await users.find();
    res.status(200).json(userList);
    //console.log(userList);
  } catch (error) {
    next(error);
    console.log("This is backend errror");
  }
};
