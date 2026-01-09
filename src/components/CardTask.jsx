import { useChangeTaskStatusMutation } from "@/services/crud";
import { CircleCheck, CircleX } from "lucide-react";
import { toast } from "react-toastify";

const CardTask = ({ task }) => {
  const [changeTaskStatus] = useChangeTaskStatusMutation();

  const changeStatusFunc = async () => {
    if (!task.status) {
      await changeTaskStatus(task.id);
      toast.success("Task ичро карда шуд !");
    }
    if (task.status) {
      toast.error("Task аллакай ичро ичро шудааст !");
    }
  };

  return (
    <div className="border-2 border-[#ff8000] rounded-[10px] flex flex-col gap-[10px] p-[20px] xl:w-[600px] w-[90%]">
      <div className="flex items-center gap-[20px]">
        <button className="cursor-pointer" onClick={changeStatusFunc}>
          {task.status ? (
            <CircleCheck size={40} className="text-green-600" />
          ) : (
            <CircleX size={40} className="text-red-600" />
          )}
        </button>
        <p className="font-bold">{task.tittle}</p>
      </div>

      <aside className="w-full flex flex-col gap-[5px]">
        <p className="xl:w-full w-full wrap-break-word">{task.description}</p>
        <p className="text-sm text-gray-500">
          {new Date(task.time).toLocaleDateString("ru-RU")}
        </p>
      </aside>
    </div>
  );
};

export default CardTask;
