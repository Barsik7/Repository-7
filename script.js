const div = document.querySelector('.user-info');

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
          const info = data;
          const infoHTML = `<p>${info.name}</p>
          <p>${info.email}</p>
          <p>${info.phone}</p>
          <p>${info.website}</p>`;
          div.innerHTML = infoHTML;
        })
            }
       });


        
        

    



      
  



        


