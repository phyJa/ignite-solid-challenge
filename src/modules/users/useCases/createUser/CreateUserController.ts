import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

interface IUserRequest {
  name: string;
  email: string;
}

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, email }: IUserRequest = request.body;

    this.createUserUseCase.execute({
      name,
      email,
    });

    return response.status(201).json({ name, email });
  }
}

export { CreateUserController };
