// ----------------------------------------------------------------------------
// Socket Event Handlers
// ----------------------------------------------------------------------------
const socket = io();

const parent = document.getElementById('onlineUsers');

socket.on('UserList', function (onlineUsers) {
    onlineUsers.sort((a, b) => a.name.localeCompare(b.name));

    parent.querySelectorAll('li').forEach(li => li.style.display = 'none');

    for (let u of onlineUsers) {
        let li = document.getElementById(u.id);
        if(!li){
            li = document.createElement('li');
            li.id = u.id;
            li.textContent = u.name;
        }
        li.style.display = 'inline-block';
        li.style.visibility = u.hidden ? 'hidden' : 'visible';
        parent.appendChild(li);
    }
});

socket.on('NoOpinions', hideName);

socket.on('ShowName', showName);

function hideName(u){
    const li = document.getElementById(u.id);
    li.style.visibility = 'hidden';  
}

function showName(u){
    const li = document.getElementById(u.id);
    li.style.visibility = 'visible';
}