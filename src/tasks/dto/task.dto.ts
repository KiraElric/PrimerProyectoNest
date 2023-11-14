import { IsNotEmpty, IsOptional, IsString, MinLength, IsIn } from "class-validator";
import { TaskStatus } from "../tasks.entity";

//DTO que permite identificar los campos que seran recibidos desde el cliente
export class CreateTaskDto{
    //Decoradores que permiten validar el tipo de dato que esta ingresando desde el request a traves del uso de la libreria class-validator de nest
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string;
    @IsString()
    description: string;

}

//DTO para actualizar
export class UpdateTaskDto{
    //? -> permite indicarle a TS que algunos datos pueden ser indefinidos, ya que indica que estos son opcionales al momento de la entrega del request
    @IsString()
    @IsOptional()
    title?: string;
    @IsString()
    @IsOptional()
    description?: string;
    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.IN_PROGRESS, TaskStatus.PENDING, TaskStatus.DONE])
    status?: TaskStatus; 
}