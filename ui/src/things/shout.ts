import z from "zod";

const shoutSchema = z.object({
  id: z.number(),
  parentId: z.number().optional(),
  author: z.string(),
  content: z.string(),
  responseCount: z.number(),
  createdAt: z.date(),
});

export type Shout = z.infer<typeof shoutSchema>;
