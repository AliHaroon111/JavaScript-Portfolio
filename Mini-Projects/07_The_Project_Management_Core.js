class Task{
    #status = "To Do" || "In Progress" || "Review"|| "Done"
    constructor(title,assignee){
        this.title=title,
        this.assignee=assignee
    }

    get Status(){
        return this.#status
    }

    set Status(state){
        if(this.state!=this.#status){
            console.error("Enter the Valid Status",error);
            
        }
    }

    getDetails(){
        return `Task:${this.title} | Assigned to: ${this.assignee} | Status: ${this.#status}`
    }
}


class BugTicket extends Task{
    severity= ["Low", "Medium", "Critical"]
    constructor(title,assignee,severity){
        super(title,assignee)
        this.severity=severity
    }

    getDetails(){
       
    }
}