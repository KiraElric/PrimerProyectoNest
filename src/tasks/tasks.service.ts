import { Injectable } from '@nestjs/common';
import { TaskStatus, Tasks } from './tasks.entity';
//Libreria que permite crear identificadores unicos de tipo string
import { v4 } from 'uuid';
import { UpdateTaskDto } from './dto/task.dto';

//Anotacion que permite inyectar esta clase en otras partes de la aplicacion para su uso
@Injectable()
export class TasksService {
    private tasks : Tasks[] = [{
        id: '1',
        title: "first task",
        description: "some task",
        status: TaskStatus.PENDING,
    }]

    //Metodos CRUDL
    getAllTask(){
        return this.tasks;
    }

    createTask(title: string, description: string){
        const task : Tasks = {
            id: v4(),
            title: title,
            description: description,
            status: TaskStatus.PENDING
        };
        this.tasks.push(task);
        return task;
    }

    updateTask(id: string, updatedFields: UpdateTaskDto){
        const task = this.getTaskById(id);
        //Permite combinar dos variables en una sola, si existe algun campo repetido reemplazara el existente con el nuevo
        const newTask = Object.assign(task, updatedFields);
        //Actualizaremos la lista, obteniendo un nuevo arreglo
        this.tasks = this.tasks.map(task => task.id === id? newTask : task);
        return true;
    }

    deleteTask(id: string){
        //Devolvera un nuevo arreglo en donde no se encuentre la tarea con el id entregado en el metodo (filtro)
        this.tasks = this.tasks.filter(task => task.id !== id);
        return true;
    }

    getTaskById(id: string){
        return this.tasks.find(task => task.id === id);
    }
}
