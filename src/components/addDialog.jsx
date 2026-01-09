import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchema } from "@/schemas/taskSchema";
import { useCreatTaskMutation } from "@/services/crud";
import { Plus, X } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { toast } from "react-toastify";

const AddDialog = ({ open, setOpen }) => {
  const [creatTask] = useCreatTaskMutation();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(taskSchema),
  });

  const onSubmit = async (data) => {
    try {
      await creatTask({
        ...data,
        time: new Date(data.time).getTime(),
        status: false,
      });
      setOpen(false);
      toast.success("Task илова карда шуд !");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Аз нав кушиш кунед Task кабул нашуд");
    }
  };

  return (
    <>
      <Dialog open={open}>
        <DialogTrigger className="xl:hidden" onClick={() => setOpen(true)}>
          <Plus />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col items-center gap-5 w-full"
            >
              <div className="w-[100%] max-w-md bg-white rounded-[20px] p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h1 className="text-[25px] font-bold text-center">
                    Add New Task
                  </h1>
                  <X
                    onClick={() => {
                      setOpen(false);
                      reset();
                    }}
                  />
                </div>

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
                    <p className="text-red-500 text-sm mt-1">
                      {errors.time.message}
                    </p>
                  )}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-4 pt-3">
                  <button
                    type="button"
                    onClick={() => {
                      reset();
                      setOpen(false);
                    }}
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
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddDialog;
