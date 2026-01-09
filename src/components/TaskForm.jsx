import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { DatePiceker } from "./DatePicker";
import "react-day-picker/dist/style.css";
import { taskSchema } from "@/schemas/taskSchema";
import { useCreatTaskMutation } from "@/services/crud";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import imageLogo from "@/assets/logo_ru.png";

const TaskForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(taskSchema),
  });

  const [creatTask] = useCreatTaskMutation();

  const onSubmit = async (data) => {
    try {
      await creatTask({
        ...data,
        time: new Date(data.time).getTime(),
        status: false,
      });
      toast.success("Task илова карда шуд !");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Аз нав кушиш кунед Task кабул нашуд");
    }
  };

  return (
    <div className="xl:flex hidden fixed right-0  flex-col justify-center items-center bg-[#ff8000] xl:w-1/2 w-full min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-5 w-full"
      >
        <img src={imageLogo} alt="" />
        <div className="xl:w-[65%] w-[80%] max-w-md bg-white rounded-[20px] p-6 flex flex-col gap-4">
          <h1 className="text-[25px] font-bold text-center">Add New Task</h1>

          {/* TITLE */}
          <div>
            <Input
              {...register("tittle")}
              placeholder="Tittle"
              className="w-full font-bold"
            />
            {errors.tittle && (
              <p className="text-red-500 text-sm mt-1">
                {errors.tittle.message}
              </p>
            )}
          </div>

          {/* DESCRIPTION */}
          <div>
            <Textarea
              {...register("description")}
              placeholder="Description"
              className="w-full font-bold resize-none"
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* DATE */}
          <div>
            <Input
              type="date"
              {...register("time")}
              className="w-[90%] font-bold xl:w-full"
            />
            {errors.time && (
              <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
            )}
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 pt-3">
            <button
              type="button"
              onClick={() => reset()}
              className="w-1/2 h-[40px] border-2 border-[#ff8000] text-[#ff8000] font-bold rounded-[10px] hover:bg-[#ff8000] hover:text-white transition-all"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="w-1/2 h-[40px] bg-[#ff8000] text-white font-bold rounded-[10px] hover:bg-white hover:text-[#ff8000] hover:border-2 hover:border-[#ff8000] transition-all"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
