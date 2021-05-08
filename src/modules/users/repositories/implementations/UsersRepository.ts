import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const newUser = new User();

    Object.assign(newUser, {
      created_at: new Date(),
      email,
      name,
      updated_at: new Date(),
    });

    this.users.push(newUser);

    return newUser;
  }

  findById(id: string): User | undefined {
    return this.users.find((aUser) => aUser.id === id);
  }

  findByEmail(email: string): User | undefined {
    return this.users.find((aUser) => aUser.email === email);
  }

  turnAdmin(receivedUser: User): User {
    const newAdminUser = receivedUser;
    Object.assign(newAdminUser, { admin: true, updated_at: new Date() });
    return newAdminUser;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
