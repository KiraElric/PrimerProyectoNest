import { Body, Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

//Anotación o decorador que permite definir la ruta de ingreso hasta este controlador, la cual seria localhost:3000/tasks
@Controller('tasks')
export class TasksController {
    //Para poder injectar el modulo del service y acceder a sus metodos debo crear el constructor con su atributo privado
    constructor(private taskService: TasksService){}

    //Anotacion que me permitira crear la ruta para acceder al comportamiento deseado
    //No es necesario adicionar el / antes del nombre de la ruta deseada
    @Get("all")
    //Nombre del metodo
    getAllTask(){
        //Redireccionamiento hacia el metodo deseado definido en el service
        return this.taskService.getAllTask();
    }

    @Post("new")
    //Request body que se envia los datos hacia el servidor, este debe ser guardado en un valor
    createTask(@Body() newTask: CreateTaskDto){
        return this.taskService.createTask(newTask.title, newTask.description);
    }

    //De esta forma puedo indicar que el id sera un parametro por URL 
    @Delete(':id')
    //Anotacion que permite obtener el parametro deseado de la URL por su nombre
    deleteTask(@Param('id') id: string){
        return this.taskService.deleteTask(id)
    }

    @Patch(":id")
    updateTask(@Param("id") id: string, @Body() updatedFiles : UpdateTaskDto){
        this.taskService.updateTask(id, updatedFiles)
    }
}
