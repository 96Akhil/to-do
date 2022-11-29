let countArray = [];


let countCheck = new Promise(function (resolve, reject,value) {
  countArray.length == 5 && resolve(true);
  countArray.length >= 5 && reject(false);
});


let registercount = async (id) => {
    countArray.push(id);
    await countCheck()
    .then(res=>alert("Task completed"))
    .catch(flag=>alert("Task not completed"));
  };

  
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((x) => {
    console.log(x);
    return x;
  })
  .then((response) => response.json())
  .then((data) => {
    let temp = "";
    data.forEach((itemData) => {
      temp += "<tr>";
      temp += "<td>" + itemData.id + "</td>";
      temp += "<td>" + itemData.title + "</td>";
      temp += `<td><input id=\checkbox-${itemData.id}\ type=\"checkbox\" onclick = \"registercount(${itemData.id})"\ /></td>`;
      //temp += "<td>" + itemData.completed + "</td>";
      // temp += "<td>" + itemData.userId + "</td>";
    });
    document.getElementById("tableBody").innerHTML = temp;
    data.forEach((itemData) => {
      const idName = `checkbox-${itemData.id}`;
      document.getElementById(idName).checked = itemData.completed;
    });
  });
console.log(temp);


