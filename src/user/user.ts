export interface IUser {
  get_name(): string,
  get_age(): number,
  get_salary():number, 
}

export function NewUser(name: string, age:number): IUser {
  return new User(name, age);
}

class User implements IUser {
  name: string;
  age: number;

  constructor(name: string, age:number) {
    this.age = age;
    this.name = name;
  }

  get_name(): string {
    return this.name;
  }

  get_age(): number {
    return this.age;
  }

  get_salary(): number {
    return 100;
  }
}

