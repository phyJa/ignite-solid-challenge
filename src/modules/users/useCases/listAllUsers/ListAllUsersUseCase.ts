import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userThatMakesTheRequest = this.usersRepository.findById(user_id);

    if (!userThatMakesTheRequest) {
      throw new Error(
        "Error: Hmmm, strange... The user that is making the request does not exist..."
      );
    } else if (!userThatMakesTheRequest.admin) {
      throw new Error(
        "Error: The user is not an admin... The list cannot be shown"
      );
    } else {
      return this.usersRepository.list();
    }
  }
}

export { ListAllUsersUseCase };
