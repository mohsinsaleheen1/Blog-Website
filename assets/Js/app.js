const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

// sinupForm
let username = document.getElementById("user");
let userArray = JSON.parse(localStorage.getItem("users")) || [];
function sinupbtn(e) {
  e.preventDefault();
  let signName = document.getElementById("sname").value;
  let signEmail = document.getElementById("semail").value;
  let signPass = document.getElementById("spass").value;
  if (signName === "" && signEmail === "" && signPass === "") {
    alert("Please fill input details");
  } else {
    for (let i = 0; i < userArray.length; i++) {
      if (userArray[i].useremail === signEmail) {
        alert("User Email Is Already Exist");
        return;
      }
    }
    let signupDetail = {
      userName: signName,
      useremail: signEmail,
      userpass: signPass,
    };
    userArray.push(signupDetail);
    localStorage.setItem("users", JSON.stringify(userArray));
    alert("Signup Successfully");
  }
}
function signInbtn(e) {
    e.preventDefault();
  let loginEmail = document.getElementById("loname").value;
  let loginPass = document.getElementById("lopass").value;
  let isFound = false;
  if (loginEmail === "" && loginPass === "") {
    alert("Please fill input details");
  } else {
    for (let i = 0; i < userArray.length; i++) {
      if (
        userArray[i].useremail === loginEmail &&
        userArray[i].userpass === loginPass
      ) {
        isFound=true;
        break;
      } 
    }
    if(isFound){
        console.log("el",username);
        window.location.href="./data.html"
    }else {
        alert("Login Failed");
      }
  }
}

// Blog Section Functionality
function closebtn() {
  let closeButton = document.getElementById("blog");
  closeButton.classList.remove("model");
  closeButton.classList.add("hide");
  console.log(closeButton);
}
function createBlog() {
  let blog = document.getElementById("blog");
  blog.classList.add("model");
  blog.classList.remove("hide");
}
// View Blogs
function viewBlogs() {
  let card = document.getElementById("Cards");
  let viewBlogs = document.getElementById("Vblog");
  let blogs = JSON.parse(localStorage.getItem("blog"));
  // Display Blog Detail in FrontEnd
  for (let i = 0; i < blogs.length; i++) {
    card.innerHTML += `<div class="card">
    <div class="iamge">
          <img src="./assets/Images/screenshot.jpg" alt="">
        </div>
        <div class="title">
          <h1>${blogs[i].title.slice(0, 30)}</h1>
        </div>
        <div class="content">
          <p>${blogs[i].Content.slice(0, 200)}</p>
        </div>
        <div class="author">
          <i class="fa-solid fa-circle-user"></i>
          <p><b>Author:</b><span>${blogs[i].author}</span></p>
        </div>
    </div>`;
  }
  viewBlogs.disabled = true;
}
// Create Blog
function submitBlog(e) {
  e.preventDefault();
  let blogTitle = document.getElementById("title").value;
  let blogContent = document.getElementById("content").value;
  let authorName = document.getElementById("author").value;
  let blogImage = document.getElementById("image").value;
  let closeButton = document.getElementById("blog");
  let blogButton = document.getElementById("Cblog");
  let viewBlogs = document.getElementById("Vblog");
  // SubmitBlogs In LocalStorage
  let BlogArray = JSON.parse(localStorage.getItem("blog")) || [];
  if (
    blogTitle === "" &&
    blogContent === "" &&
    authorName === "" &&
    blogImage === ""
  ) {
    alert("Please fill input details");
  } else {
    // Hide the blog modal
    closeButton.classList.remove("model");
    closeButton.classList.add("hide");
    // Hide the blog button
    blogButton.classList.remove("blogbtn");
    blogButton.classList.add("hide");
    // Create a new blog object
    let BlogDetail = {
      title: blogTitle,
      Content: blogContent,
      author: authorName,
    };
    BlogArray.push(BlogDetail);
    localStorage.setItem("blog", JSON.stringify(BlogArray));
  }
  console.log("Hello", viewBlogs());
}
// LogOut
function logOut() {
  window.location.href = "./index.html";
}
