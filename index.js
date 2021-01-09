class User {
  constructor(){ 
    this.userList = [
      {id: 1, name: 'Muzammil', age: 27},
      {id: 2, name: 'John', age: 23},
    ]
  }

  createUser(name, age) {
    const user = {
      id: this.userList.length > 0 ? this.userList[this.userList.length - 1].id + 1 : 1,
      name: name,
      age: age
    }
    this.userList.push(user);
    console.log('User added successfully !!');
    this.displayUsers();
  }

  deleteUser(name) {
    if (name) {
      let userToDelete = this.userList.findIndex(function (user) {
          return user.name.toLowerCase() === name.toLowerCase();
      })
      if (userToDelete == -1) {
        console.log('User not found !!!');
      } else {
        this.userList.splice(userToDelete, 1);
        console.log('User is deleted !');
      }
    } else {
      this.userList = [];
      console.log('All User deleted !'); 
    }
    this.displayUsers();   
  } 

  updateUser(oldName, newName) {
    let userToUpdate = this.userList.findIndex(function (user) {
        return user.name.toLowerCase() === oldName.toLowerCase(); 
    })
    if (userToUpdate == -1) {
      console.log('User not found !!!');
    } else {
      this.userList[userToUpdate].name = newName;
      console.log('User is Updated !!!');
    }
    this.displayUsers();
  }

  findUser(name) {
    this.userList.filter(function (user) {
      if (user.name.toLowerCase() === name.toLowerCase()) {
        console.log(`Id: ${user.id} || Name: ${user.name} || Age: ${user.age}`);
      } else {
        console.log('User not found !!!');
      }
    })
  }

  displayUsers() {
    this.userList.forEach(function (user) {
        console.log(`Id: ${user.id} || Name: ${user.name} || Age: ${user.age}`);
    })
  }
}


const userClass = new User();
userClass.createUser("Billy", 28);
userClass.deleteUser("johnnn");
userClass.displayUsers();
userClass.updateUser('john', 'vikas');
userClass.findUser('Billy');
userClass.deleteUser();