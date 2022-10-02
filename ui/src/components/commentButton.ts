import { div, span, button } from "../dom";

export function commentButton(count: number, handler: () => void) {
  const commentButton = button({ classes: [ "icon" ] });

  const icon = span({
    classes: [ "material-symbols-rounded" ],
    text: "chat_bubble",
  });

  commentButton.append(icon, span({text: count.toString()}));
  commentButton.onclick = handler;
  return commentButton;
}
