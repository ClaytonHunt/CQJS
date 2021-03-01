const command = {
  bindEvent: function(event, cmd) { 
    // Binds an existing Command to an Event
    // Command will execute when Event is fired
    // Event target will be passed to Command for processing
  },
};

const query = {
  bindCommand: function(cmd) {
    // Binds a query to existing Command
    // Query will execute when Command finishes
  },
  bindAction: function(action) {
    // Executes action when Query finishes
  }
};

export default const CQJS = {  
  createCommand: function(cmd) {
    // Creates a new Command object from void lambda
    // Command is returned
  },
  createQuery: function(query) { 
    // Creates a new Query object from value lambda
    // Query is returned
  }  
};
