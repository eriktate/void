import type { Shout } from "./things/shout";
import { div, p, li, row } from "./dom";
import { commentButton } from "./components/commentButton";
import { getComments } from "./api";

export function makeShout(shout: Shout) {
  const root = li();

  // generate top row
  const topRow = row({ classes: [ "right" ] });
  const postedDate = div({ text: `Posted on ${shout.createdAt.toDateString()}`, classes: [ "posted-date" ] });
  topRow.append(postedDate);

  // generate middle row
  const content = p({ text: shout.content, classes: [ "content" ] });

  // generate bottom row
  const bottomRow = row();
  const responses = commentButton(shout.responseCount, async () => {
    const comments = await getComments(shout.id);
    comments.forEach((comment) => {
      const inner = row();
      inner.appendChild(makeShout(comment));
      root.appendChild(inner);
    });
  });

  const author = div({ text: `- ${shout.author}`, classes: [ "author" ] });
  bottomRow.append(responses, author);

  // pull it all together
  root.append(topRow, content, bottomRow);
  return root;
}
