import { z } from "zod";

export const taskSchema = z.object({
  tittle: z
    .string({ required_error: "Tittle ро пур кунед!" })
    .min(1, "Tittle ро пур кунед!"),

  description: z
    .string({ required_error: "Description ро пур кунед!" })
    .min(1, "Description ро пур кунед!"),

  time: z.string().min(1, "Date ро интихоб кунед"),
});
