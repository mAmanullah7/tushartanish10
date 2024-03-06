// Sample data - replace with actual data or fetch from server
let users = [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" },
    { username: "amir12@gmail.com", password: "Sakina"},
    { username: "tushar12@gmail.com", password: "harmita"}

];

let posts = [
    {title:"Post 1", content:"Counter Strike", photo: "Photos/counter-strike-2-3840x2160-4k-25111.jpeg"},
    {title:"Post 2", content:"Counter Strike", photo: "Photos/counter-strike-2-3840x2160-4k-25112.jpeg"},

]

let currentUser = null; // To track logged-in user

function login(event) {
    event.preventDefault(); // Prevent form submission
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let user = users.find(u => u.username === username && u.password === password);
    if (user) {
        currentUser = user;
        showPosts();
    } else {
        alert("Invalid username or password");
    }
}

function showPosts() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("postSection").style.display = "block";
    displayPosts();
}

function displayPosts() {
    let postsContainer = document.getElementById("posts");
    postsContainer.innerHTML = "";
    posts.forEach(post => {
        let postElement = document.createElement("div");
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <img src="${post.photo}" alt="${post.title}">
            <p>${post.content}</p>`;
        postsContainer.appendChild(postElement);
    });
}

function submitComment() {
    let commentText = document.getElementById("commentText").value;
    if (currentUser) {
        // You can handle commenting logic here (e.g., send comment to server)
        console.log(`Comment submitted by ${currentUser.username}: ${commentText}`);
    } else {
        alert("Please login to comment");
    }
}

document.getElementById("loginForm").addEventListener("submit", login);
