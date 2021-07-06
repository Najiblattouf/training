fetch('http://najib-vlava.herokuapp.com/server')
  .then(response => response.json())
  .then(json => {
var services = document.getElementById('services')
var content = `<div>
                <div class="icon"><i class="bi bi-briefcase"></i></div>
                <h4 class="title"><a href="">Lorem Ipsum</a></h4>
                <p class="description">Voluptatum</p>
                </div>`

                for (let i = 0; i < json.length; i++) {
                    var specificContent = content.replace("Lorem Ipsum",json[i].Services);
                    specificContent = specificContent.replace('Voluptatum',json[i].Description);
                    var singleservice = document.createElement('div')
                    singleservice.className = "col-lg-4 col-md-6 icon-box";
                    singleservice.innerHTML = specificContent;
                    services.appendChild(singleservice);
                }



  })