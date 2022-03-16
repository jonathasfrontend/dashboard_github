var user = document.querySelectorAll('#box-user')[0];
var bio = document.querySelectorAll('#box-bio')[0];
var contact = document.querySelectorAll('#box-contact')[0];
var boxProjects = document.querySelectorAll('#box-projects')[0];

fetch('https://api.github.com/users/jonathasfrontend').then(response=> response.json()).then(data=>{
    user.innerHTML = `
        <div class="user-img">
            <a href="${data.html_url}"><img src="${data.avatar_url}" alt=""></a>
        </div>
        `;

    user.innerHTML += `
        <div class="user-info">
            <h1>${data.name}</h1>
        </div>
        `

    user.innerHTML += `
        <div class="user-cargo">
            <p>${data.login}</p>
        </div>
        `

    user.innerHTML += `
    <div class="user-people" id="user-people">
        <span>${data.followers} Seguidore -</span> <span>${data.following} Seguindo</span>
    </div>
    `

    bio.innerHTML = `
        <p class="bio-info">${data.bio}</p>
        `;

    contact.innerHTML = `
        <div class="contact-info">
            <span><img class="icon" src="assets/img/briefcase.svg" alt=""> <p>${data.company}</p></span>
            <span><img class="icon" src="assets/img/map-pin.svg" alt=""> <p>${data.location}</p></span>
            <span><img src="assets/img/github.svg" alt=""> <a href="${data.html_url}">${data.login}</a></span>
            <span><img class="icon" src="assets/img/globe.svg" alt=""> <a href="${data.blog}">Site</a></span>
            <span><img class="icon" src="assets/img/mail.svg" alt="">  <a href="${data.email}">Email</a></span></span>
        </div>
        `
    
    boxProjects.innerHTML = `
        <div class="projects-info">
            <h1>Projetos</h1>
            <span>Repositorios <p>${data.public_repos}</p></span>
            <span>Projetos <p>0${data.public_gists}</p></span>
        </div>
    `
})

var boxSkills = document.querySelectorAll('#box-skills')[0];
var descript = document.querySelectorAll('#descript')[0];

fetch('https://api.github.com/users/jonathasfrontend/repos').then(response=> response.json()).then(data=>{
    data.forEach(element => {
        boxSkills.innerHTML += `
            <div class="box-git">
                <span> <img class="avatar" src="${element.owner.avatar_url}" alt=""> <img class="folder" src="assets/img/folder.svg" alt=""> <a href="${element.html_url}">${element.name}</a> <h5>${element.visibility}</h5></span>
                <p id="descript">${element.description}</p>

                <div class="itens-git">
                    <span><img src="assets/img/star.svg" alt=""><h1>${element.stargazers_count}</h1></span>
                    <span><h1>${element.language}</h1></span>
                </div>
            </div>
            
        `
    })
})

var seguidores = document.querySelectorAll('#seguidores')[0];

fetch('https://api.github.com/users/jonathasfrontend/followers').then(response=> response.json()).then(data=>{
    data.forEach(element => {
        seguidores.innerHTML += `
            <div class="content-seguidores">
                <img src="${element.avatar_url}">
                <h1>${element.login}</h1>
            </div>
        `
    })
    
    var userPeople = document.getElementById('user-people');
    var close = document.getElementById('close')
    
    userPeople.addEventListener('click', function(){
        var peopleuser = document.getElementById('peopleuser');
        peopleuser.style.visibility = 'visible';
        peopleuser.style.opacity = '1';
    })
    
    close.addEventListener('click', function(){
        var peopleuser = document.getElementById('peopleuser');
        peopleuser.style.visibility = 'hidden';
        peopleuser.style.opacity = '0';
    })
})

var seguindo = document.getElementById('seguindo');

fetch('https://api.github.com/users/jonathasfrontend/following').then(response=> response.json()).then(data=>{
    data.forEach(element => {
        seguindo.innerHTML += `
            <div class="content-seguindo">
                <img src="${element.avatar_url}">
                <h1>${element.login}</h1>
            </div>
        `
    })
})