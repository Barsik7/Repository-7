function doFetch(URL, callback) {
    fetch(URL)
        .then(response => {
        return response.json();
        }
      )
      .then(data => {
        callback();
      })
    }
    
    let fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json();
        }
      )
      .then(data => {
        data.forEach((el, i) => {
          const li = document.createElement('li');
          li.classList.add('list-item');
          const list = document.querySelector('ul');
          li.setAttribute('id', el.id);
          li.textContent = el.name;
          list.append(li);
        });
      });
      
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('list-item')) {
        let fetchUser = fetch('https://jsonplaceholder.typicode.com/users/'+event.target.id)
            .then(response => {
                return response.json();
            }
        )
        .then(data => {
          const p = document.createElement('p');
          const div = document.querySelector('div');
          p.textContent = `${data.name} ${data.email} ${data.phone} ${data.website}`;
          div.append(p);
        })
            }
       })

function removeEl() {
    const div = document.querySelector('div');
    const p = document.querySelector('p');
    div.removeChild(p);

}

const list = document.querySelector('ul');
list.onclick = removeEl;

        


