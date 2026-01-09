import React, { useState } from "react";
import { useGetTasksQuery } from "../services/crud";
import CardTask from "./CardTask";
import { Plus } from "lucide-react";
import AddDialog from "./addDialog";
import imageLogo from "@/assets/logo_ru.png";
import Loading from "./Loading";

const TaskList = () => {
  const { data: taskData, isLoading } = useGetTasksQuery();
  console.log(taskData);
  const [open, setOpen] = useState(false);

  return (
    <div className="xl:w-[50%] w-full xl:px-[70px] py-[50px] flex flex-col">
      <div className="xl:hidden flex justify-center">
        <img src={imageLogo} alt="" />
      </div>
      <div className="flex justify-between px-[20px] xl:px-0">
        <h1 className=" text-[30px] font-bold py-[10px]">Tasks List</h1>
        <AddDialog open={open} setOpen={setOpen} />
      </div>
      <div className="flex-1 overflow-y-auto py-[30px] gap-[15px] flex flex-col items-center">
        {taskData?.length < 1 ? (
          <p className="mt-[200px] font-bold text-2xl text-[#ff8000]">Айни Хол Task надоред !</p>
        ) : (
          taskData?.map((task) => <CardTask key={task.id} task={task} />)
        )}

        {isLoading && <Loading />}
      </div>
    </div>
  );
};

export default TaskList;
