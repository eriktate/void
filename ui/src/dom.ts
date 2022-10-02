type Options = {
  classes?: string[],
  attrs?: Record<string, string>,
  text?: string,
};

export function make(tag: string, opts?: Options) {
  const el = document.createElement(tag);
  if (opts?.attrs) {
    Object.entries(opts.attrs).forEach(([key, val]) => el.setAttribute(key, val));
  }

  if (opts?.classes) {
    el.className = opts.classes.join(" ");
  }

  if (opts?.text) {
    el.appendChild(text(opts.text));
  }

  return el;
}

export const build = (tag: string) => (opts?: Options) => make(tag, opts);

export const div = build("div");
export const li = build("li");
export const p = build("p");
export const span = build("span");
export const button = build("button");
export const text = (val: string) => document.createTextNode(val);
export function row(opts?: Options) {
  return div({
    ...opts,
    classes: (opts?.classes ?? []).concat("row"),
  });
}
