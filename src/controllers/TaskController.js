const database = require('../database/connection')

class TaskController {
    newTask(request, response) {
        const { tarefa, descricao, responsavel } = request.body
        console.log(tarefa, descricao, responsavel)

        database.insert({ tarefa, descricao, responsavel }).table("tasks").then(data => {
            console.log(data);
            response.json({ message: "Task created successfully." })
        }).catch(error => {
            console.log(error);
        });
    }

    listAllTasks(request, response) {
        database.select("*").table("tasks").then(tasks => {
            response.json(tasks);
        }).catch(error => {
            console.log(error)
        })
    }

    listTask(request, response) {
        const { id } = request.params

        database.select("*").table("tasks").where({ id: id }).then(task => {
            response.json(task);

        }).catch(error => {
            console.log(error)
        })
    }
}

module.exports = new TaskController