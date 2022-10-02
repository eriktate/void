import { makeShout } from './shout';
import { getShouts } from './api';
import { text } from './dom';

export async function theVoid(mount: HTMLElement) {
  const loading = text("Collecting shouts...");
  mount.appendChild(loading);

  const shouts = await getShouts();
  loading.remove();
  const shoutNodes = shouts.map(makeShout);
  mount.append(...shoutNodes);
}
