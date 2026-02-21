// 1st Class
class Task{
    #status = "To Do" || "In Progress" || "Review"|| "Done"
    constructor(title,assignee){
        this.title=title,
        this.assignee=assignee
    }
    
    getStatus(){
        return this.#status
    }

    setStatus(state){
        if(this.state!=this.#status){
            console.error("Enter the Valid Status",error);
            
        }
    }

    getDetails(){
        return `Task:${this.title} | Assigned to: ${this.assignee} | Status: ${this.#status}`
    }
}


// 2nd Class
class BugTicket extends Task{
    severity= ["Low", "Medium", "Critical"]
    constructor(title,assignee,severity){
        super(title,assignee)
        this.severity=severity
    }
    
    getDetails(){
       if(this.severity=="Critical"){
        return `URGENT Bug:${this.title} | Assigne ${this.assignee} | Fix Immediately!`
       } else{
        return `Everything Going to be Normal ${this.severity}`
       }
    }
}

// 3rd Class
class ProjectBoard{
    taskList=[]
    constructor(taskList){
        this.taskList=taskList
    }
    
    addTicket(ticket){
        this.taskList.push(ticket)
    }
    
    getTicketsByStatus(searchStatus){
            
        filtered =this.taskList.filter(this.taskList.length) 
        if(filtered==searchStatus){
            return filtered
        }
        
    }

    static getCriticalCount(boardInstance){
        
    }
    }