
export interface IEmployee {
  id?: number;
  firstName?: string;
  lastName?: string;
  emailId?: string;
}
export class Employee implements IEmployee {
  constructor(
    public id?: number,
    public firstName?: string,
    public lastName?: string,
    public emailId?: string,
  ) {}
}  
