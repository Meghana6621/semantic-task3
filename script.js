const users = [
    "John",
    "Alice",
    "David",
    "Emma",
    "Sophia"
];

const button = document.getElementById("showUsers");
const userList = document.getElementById("userList");

button.addEventListener("click", () => {
    userList.innerHTML = "";

    users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = user;
        userList.appendChild(li);
    });
});