 
 const taskContainer= document.querySelector("task__container");

 
 
 const saveChanges = () => {
    const taskData = {
        id : `${Date.now()}`,
        ImageUrl: document.getElementById("imageurl").value ,
        taskTitle: document.getElementById("tasktitle").value ,
        taskType: document.getElementById("tasktype").value,
        taskDescription: document.getElementById("taskdescription").value,


    };
    const newCard = `
    <div class="col-md-6 col-ld-4 id=${taskData.id}">
                <div class="card text-center">
                    <div class="card-header d-flex justify-content-end gap-2">
                        <button type="button" class="btn btn-success"><i class="fas fa-pencil-alt"></i></button>
                        <button type="button" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
                    </div>
                    <div class="card-body">
                        <img src= ${taskData.imageUrl}
                            class="card-img-top" alt="...">

                        <h5 class="card-title">${taskData.taskTitle}</h5>
                        <p class="card-text">${taskData.taskDescription}</p>
                        <a href="#" class="btn btn-primary">${taskData.taskType}</a>
                    </div>
                    <div class="card-footer text-muted">
                        <button type="button" class="btn btn-outline-primary float-end">Open Task</button>
                    </div>
                </div>
            </div>`;
            taskContainer.insertAdjacentHTML("beforeend", newCard)

};