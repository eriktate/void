import type { Shout } from "./things/shout";

async function delay<T>(value: T): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), 500);
  })
}

export async function getShouts() {
  return delay([
    {
      id: 1,
      author: "drunk_pepper",
      content: "I just had the best soda of my life today. Seriously, I didn't realize they made sodas this tasty. Sooooo gooooooood....",
      responseCount: 12,
      createdAt: new Date(),
    },
    {
      id: 2,
      author: "dank_goat",
      content: "They don't make anything like they used to.",
      responseCount: 7,
      createdAt: new Date(),
    }
  ]);
}

export async function getComments(shoutId: number): Promise<Shout[]> {
  console.log("fetching comments for ", shoutId);
  return delay([{
    id: 3,
    author: "chilly_lemur",
    content: "Bro that soda isn't even good, what are you talking about?",
    responseCount: 12,
    createdAt: new Date(),
  }]);
}
