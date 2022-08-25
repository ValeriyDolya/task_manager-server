let taskList
 = []


export const getAll = (req, res) => {
    res.status(200).json(taskList
        )
}

export const create = (req, res) => {
    const newServer = {
        id: Date.now().toString(),
        ...req.body
    }
    taskList
    .push(newServer)
    res.status(201).json({taskList
    })
}

export const remove = (req, res) => {
    taskList= taskList.filter(s => s.id !== req.params.id)
    res.json({taskList}) 
}

export const modify = (req, res) => {
    
    let id = req.params.id;

    taskList = taskList.map((task) => {
        if (task.id === id) {
            return {
                ...task, status: req.body.status,
                completed: req.body.completed,
                notification: req.body.time,
                file: req.body.file
            }
        }    
    });
    res.json({taskList}) 
}
