import { v4 as uuidv4 } from 'uuid';

export interface User {
  isNew: boolean;
  id: string;
  firstName: string;
  lastName: string;
}

export class UserImpl implements User {
  isNew: boolean = true;
  id: string = '';
  private _firstName: string = '';
  lastName: string = '';

  constructor(isNew: boolean, id: number, firstName: string, lastName: string) {
    this.isNew = isNew;
    this.id = uuidv4();
    this._firstName = firstName;
    this.lastName = lastName;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    if (value.length < 2) {
      throw new Error('First name must be at least 2 characters long');
    }
    this._firstName = value;
  }
}

