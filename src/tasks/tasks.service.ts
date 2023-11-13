import { Injectable } from '@nestjs/common';
import { TaskStatus, Tasks } from './tasks.entity';
//Libreria que permite crear identificadores unicos de tipo string
import { v4 } from 'uuid';

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

    updateTask(){}

    deleteTask(){}

    getTask(){}
}
