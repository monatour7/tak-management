class Task {
    constructor(id, title, description, status) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.status = status;
    }
  
    updateTitle(title) {
      this.title = title;
    }
  
    updateDescription(description) {
      this.description = description;
    }
  
    updateStatus(status) {
      this.status = status;
    }
  }
  
  module.exports = Task;
  