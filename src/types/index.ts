export interface userInterface {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  ssn: string;
  birthDate: string;
  image: string;
}
export interface LoginFormInputs {
  username: string;
  password: string;
}
export interface AddUserIntarface {
  firstname: string;
  lastName: string;
  email: string;
  age: string;
  phone: string;
  birthDate: string;
}

export interface contextType {
  user: userInterface | undefined;
  setUser?: React.Dispatch<React.SetStateAction<userInterface | undefined>>;
  setUserData: () => void;
}
