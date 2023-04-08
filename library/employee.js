// Constructor para el objeto Employee
class employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = "employee";
    }
  
    getName() {
      return this.name;
    }
  
    getId() {
      return this.id;
    }
  
    getEmail() {
      return this.email;
    }
  
    getRole() {
      return this.role;
    }
  }

  module.exports = employee;