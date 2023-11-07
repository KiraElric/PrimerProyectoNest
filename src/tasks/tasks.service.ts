import { Injectable } from '@nestjs/common';

//Anotacion que permite inyectar esta clase en otras partes de la aplicacion para su uso
@Injectable()
export class TasksService {
    //Metodos CRUDL
    getAllTask(){
        return [{
            id: 1,
            title: "first task",
            description: "some task"
        }]
    }

    createTask(){}

    updateTask(){}

    deleteTask(){}

    getTask(){}
}
