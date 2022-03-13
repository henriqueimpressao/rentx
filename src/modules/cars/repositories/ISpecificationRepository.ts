import { Specifiction } from "../model/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create({ description, name }: ICreateSpecificationDTO): void;
  findByName(name: string): Specifiction;
}

export { ISpecificationRepository, ICreateSpecificationDTO };