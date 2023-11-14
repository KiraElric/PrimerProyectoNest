import { TaskStatus } from "../tasks.entity";

//DTO que permite identificar los campos que seran recibidos desde el cliente
export class CreateTaskDto{
    title: string;
    description: string;

}

//DTO para actualizar
export class UpdateTaskDto{
    //? -> permite indicarle a TS que algunos datos pueden ser indefinidos, ya que indica que estos son opcionales al momento de la entrega del request
    title?: string;
    description?: string;
    status?: TaskStatus; 
}