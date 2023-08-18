

/***
 * 
 * fetch data api
 */
const user = document.querySelector(".user-list");
const single_modal = document.querySelector(".single-modal");

// get a function 
 const getUsers = async () => {
     await fetch("https://api.github.com/users")
     .then(res => res.json())
     .then( res => {
      let content = "";

         res.map((item, index) => {
          content += `
          <div class="col-md-3 my-3">
            <div class="card">
                <img src="${item.avatar_url}" alt="">
             <div class="card-body">
                <h2>${item.login} </h2>
                <button onclick="single_data_view('${item.id}')" class="btn btn-sm btn-success" data-bs-toggle="modal" data-bs-target="#single_view"> view </button>
             </div>
           </div>
         </div>
          `
         })
         user.innerHTML = content;
     })
     .catch(error => {
       console.log(error);
     })
 }

 getUsers();

// single view 

 
const single_data_view = async (id) => {
    await fetch(`https://api.github.com/users/${id}`)
    .then(res => res.json())
    .then(res => {
      single_modal.innerHTML = `
            <div class="row">
            <div class="col-md-6">
              <img class="w-100" src="${res.avatar_url}" alt="">
            </div>
            <div class="col-md-6">
              <h2>${res.name}</h2>
              <p>${res.location}</p>
            </div>
          </div>
      
      `
    })
    .catch(error => {
      console.log(error);
    })
}












