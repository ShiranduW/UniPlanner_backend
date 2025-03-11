import schedules from "../insfastructure/schemas/schedule.js";

export const saveSchedule = async (req, res, next) => {
    try {
      await schedules.create(req.body);
      res
        .status(201)
        .json({ message: "Form submitted successfully!", data: req.body });
    } catch (error) {
      next(error);
    }
  };

  export const deleteSchedule = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      // Find and delete the schedule
      const deletedSchedule = await schedules.findByIdAndDelete(id);
      
      if (!deletedSchedule) {
        return res.status(404).json({ message: "Schedule not found" });
      }
  
      res.status(200).json({
        message: "Schedule deleted successfully",
        deletedSchedule,
      });
    } catch (error) {
      next(error);
    }
  };

  // Add this controller function
export const updateSchedule = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Convert date string to Date object
    if (updateData.scheduleDate) {
      updateData.scheduleDate = new Date(updateData.scheduleDate);
    }

    const updatedSchedule = await schedules.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedSchedule) {
      return res.status(404).json({ message: "Schedule not found" });
    }

    res.status(200).json({
      message: "Schedule updated successfully",
      schedule: updatedSchedule
    });
  } catch (error) {
    next(error);
  }
};