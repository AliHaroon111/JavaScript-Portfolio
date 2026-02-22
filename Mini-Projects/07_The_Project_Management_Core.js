// 1st Class
class Task{
    #status="To Do"
    // "To Do" || "In Progress" || "Review"|| "Done"
    constructor(title,assignee){
        this.title=title,
        this.assignee=assignee
    }
    
    get status(){
        return this.#status
    }

    set status(state) {
        const validStatuses = ["To Do", "In Progress", "Review", "Done"];
        if (validStatuses.includes(state)) {
            this.#status = state;
        } else {
            // Requirement: Throw an Error if status is invalid
            throw new Error(`Invalid Status: ${state}. Use "To Do", "In Progress", "Review", or "Done".`);
        }
    }

    getDetails(){
        return `Task:${this.title} | Assigned to: ${this.assignee} | Status: ${this.#status}`
    }
}


// 2nd Class
class BugTicket extends Task{
    severity
    // ["Low", "Medium", "Critical"]
    constructor(title,assignee,severity){
        super(title,assignee)
        this.severity=severity
    }
    
    getDetails(){
       if(this.severity==="Critical"){
        return `URGENT Bug:${this.title} | Assigne ${this.assignee} | Fix Immediately!`
       } else{
        return `Everything Going to be Normal ${this.severity}`
       }
    }
}

// 3rd Class
class ProjectBoard{
    taskList=[]
    // constructor(taskList){
       
    // }
    
    addTicket(ticket){
        this.taskList.push(ticket)
    }
    
    getTicketsByStatus(searchStatus){
        return this.taskList.filter(ticket => ticket.status === searchStatus);  
    }

    static getCriticalCount(boardInstance) {
        let count = 0;
        for (const ticket of boardInstance.taskList) {

            if (ticket instanceof BugTicket && ticket.severity === "Critical") {
                count++;
            }
        }
        return count;
    }
    }

// Initialize the board
const myBoard = new ProjectBoard();

const task1 = new Task("Setup Database","Ali")
const task2 = new Task("Create Login API","Haroon")
const bug1 = new BugTicket("Server Crash on Login", "Ali", "Critical");
const bug2 = new BugTicket("Typo on Homepage", "Haroon", "Low");

// 3.Add to Board
myBoard.addTicket(task1);
myBoard.addTicket(task2);
myBoard.addTicket(bug1);
myBoard.addTicket(bug2);

// 4 Update Statuses (Test your Setter validation!)
task1.status = "In Progress";
// task2.status = "Testing"; // <--- Uncommenting this SHOULD throw your custom error

// 5 Output Tests
console.log(bug1.getDetails()); // Should show the URGENT override
console.log("--- In Progress Tickets ---");
console.log(myBoard.getTicketsByStatus("In Progress"));

// 6 Test the Static Utility
console.log(`Total Critical Bugs: ${ProjectBoard.getCriticalCount(myBoard)}`);