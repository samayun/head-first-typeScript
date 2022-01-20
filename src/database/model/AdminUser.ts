import IUser from "@/interface/user";

export class AdminUser implements IUser {
  constructor(public firstName: string, public lastName: string) {}

  getName(): string {
    return this.firstName + " " + this.lastName;
  }
  getFirstName() {
    return this.firstName;
  }

  protected getRole(): string {
    return "admin";
  }
}
