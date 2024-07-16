async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById("api-data");

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            console.log("Network response problem");
        }

        const users = await response.json();
        dataContainer.innerHTML = "";

        const userList = document.createElement("ul");
        Array.from(users).forEach(user => {
            const listElement = document.createElement("li");
            listElement.textContent = user.name;
            userList.append(listElement);
        });
        dataContainer.append(userList);

    } catch (error) {
        dataContainer.innerHTML = "";
        dataContainer.textContent = "Failed to load user data";
        console.error("There was a issue with fetching the data!", error);
    }
}

document.addEventListener("DOMContentLoaded", fetchUserData);