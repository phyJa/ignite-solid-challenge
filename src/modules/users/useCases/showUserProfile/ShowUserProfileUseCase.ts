import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const chosenUser = this.usersRepository.findById(user_id);

    if (!chosenUser) throw new Error("Error: This user does not exist...");

    return chosenUser;
  }
}

export { ShowUserProfileUseCase };
