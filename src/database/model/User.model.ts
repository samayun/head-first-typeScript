import IUser from '@/interface/user';

export class User implements IUser {
  constructor(public parent: Element, public firstName: string, public lastName: string) {}

  getName(): string {
    return this.firstName + ' ' + this.lastName;
  }
  getFirstName() {
    return this.firstName;
  }
  template() {
    return `<div>
        <div> User Name: ${this.getName()} </div>
    </div>`;
  }
  render() {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    if (!this.parent) this.parent = document.body;

    this.parent.append(templateElement.content);
  }
}
