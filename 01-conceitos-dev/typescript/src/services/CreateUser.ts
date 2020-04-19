interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string; // optional
  email: string;
  password: string;
  techs: Array<string | TechObject>; // fixo - string[]
}

export default function createUser({
  name = "",
  email,
  password,
}: CreateUserData) {
  const user = {
    name,
    email,
    password,
  };

  return user;
}
