enum TaskStatus{
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN PROGRESS',
    DONE = 'DONE',
}

//Permiten detallar como luce un dato a traves de una clase.
//A traves de esta clase se podria generar la tabla de la BD a traves de un ORM
export class Tasks{
    id : BigInteger;
    title : string;
    description : string;
    status : TaskStatus.PENDING;
}
