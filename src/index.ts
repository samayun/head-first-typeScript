import { User } from "@/model/User.model";
const root = document.getElementById("root");
const user = new User(root, "SAMU", "CHOWDHURY");

user.render();
