const user={
    id:1,
    name:"Abu Al Shahriar Rifat",
    job:"Software Engineer"
}
const sitringfied=JSON.stringify(user);
console.log(sitringfied)

const Parsing=JSON.parse(sitringfied);
console.log(Parsing)

const shop={
    ower:"Rifat",
    address:{
        street:"737/wwt",
        city:"Rifat",
        country:"Bangladesh"
    },
    products:[
        "Laptop",
        "mic",
        "monitor",
        "keyboard"
    ],
    revenue:45000,
    isOpen:true,
    isNan:false
}
console.log(shop);

const stringJSON=JSON.stringify(shop);
console.log(stringJSON);

  function loadData(){
    const url=`https://jsonplaceholder.typicode.com/posts`
   fetch(url)
  .then((response) => response.json())
  .then((data)=>dataDisPlay(data))
  }
  function dataDisPlay(data){
   console.log(data);
  }

  function loadUsers_2(){
    console.log("Button handler")
    const url=`https://jsonplaceholder.typicode.com/users`
    fetch(url).then((res)=>{
        return res.json()
    }).then((value) => {
        disPlayUser_2(value);
    })
  }
 
  function disPlayUser_2(data){
    const ul=document.getElementById('user-list');
    for(let user of data){
        const li=document.createElement('li');
        li.textContent=user.name;
        ul.appendChild(li);
    }
  }

  //loading post

  function loadPost(){
   const url=`https://jsonplaceholder.typicode.com/posts`;
   fetch(url)
   .then((response)=>{
     return response.json();
   }).then((data)=>{
    loadingPsostdata(data)
   })
  }

   function loadingPsostdata(data){
    const mainDiv=document.getElementById('post-container')
     for (let post of data){
         const div=document.createElement("div")
         div.innerHTML=
         `
         <h4>User :${post.userId}</h4>
         <h5>Post:Title :${post.title}</h5>
         <p>Post description: ${post.body}</p>
         `
        mainDiv.appendChild(div);
        div.classList.add('post')
     }
   }
  loadPost();



