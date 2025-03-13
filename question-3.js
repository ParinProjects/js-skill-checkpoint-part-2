// เริ่มเขียนโค้ดตรงนี้

async function getUsers() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await response.json();
    //   console.log(users)
    //   console.log(users[1].name)
      const userNames = users.map(user => user.name);

      const longNames = userNames.filter(name => name.length > 17);
  
      console.log(longNames);
    } catch (error) {
      console.error("Error ครับ:", error);
    }
  }
  
  
  getUsers();
  