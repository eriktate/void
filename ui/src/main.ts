import { theVoid } from "./void";

const mount = document.getElementById("void");
if (mount == null) {
  throw new Error("no mount found");
}

theVoid(mount);
