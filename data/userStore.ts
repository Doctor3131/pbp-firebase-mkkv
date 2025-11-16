export interface User {
  name: string;
  nim: string;
  password: string;
}

const users = new Map<string, User>();

export const loginUser = (name: string, password: string): User | undefined => {
  const user = users.get(name);

  if (user && user.password === password) {
    console.log('Login successful for:', name);

    return user;
  }

  console.log('Login failed fro', name);

  return undefined;
};

export const registerUser = (name: string, nim: string, password: string): User | undefined => {
  if (users.has(name)) {
    console.log('Registration failed');

    return undefined;
  }

  const newUser: User = {
    name: name,
    nim: nim,
    password: password,
  };

  users.set(nim, newUser);

};

export const getAllUsers = () => {
  return Array.from(users.values());
};
