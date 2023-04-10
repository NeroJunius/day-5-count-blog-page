function getData(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value
    // validation
    if(name == "") {
        return alert("Nama Harus Di Isi")
    } else if(email == "") {
        return alert("Email Harus Di Isi")
    } else if(phone == "") {
        return alert("No Telpon Harus Di Isi")
    } else if(subject == "") {
        return alert("Subject Harus Dipilih")
    } else if(message == ""){
        return alert("Pesan Harus Di Isi")
    }

    const destination = "neroachmad002@gmail.com"
    let a = document.createElement("a")
    a.setAttribute('href', `mailto:${destination}?subject=${subject}&body= Hallo nama saya ${name} , saya ingin ${message}, bisakah anda menghubungi saya di ${phone}`)

    a.click()

    let data = {
        nama: name,
        email: email,
        telp: phone,
        subject: subject,
        pesan: message,
    }
    

    console.log(data)
}

let blogs = []

function getBlog(event){
    event.preventDefault()

    let title = document.getElementById("input-blog-project-name").value
    let content = document.getElementById("input-blog-start-date").value
    let image = document.getElementById("input-blog-image").files

    image = URL.createObjectURL(image[0])

    let blog = {
        title,
        content,
        image,
        author: "Nafiisan N. Achmad",
        postedAt: new Date()
    }

    blogs.push(blog)    
    console.log(blogs)
    renderBlog()
}

function renderBlog(){
  for(let i = 0; i < blogs.length; i++) {
    document.getElementById("contents").innerHTML += `
    <div class="blog-list-item">
          <div class="blog-image">
            <img src="assets/images/blog img.png" alt="blog-img"/>
          </div>
          <div class="blog-content">
            <div class="btn-group">
              <button class="btn-edit">Edit Post</button>
              <button class="btn-post">Post Blog</button>
            </div>
            <h1>
              <a href="blog.detail.html" target="_blank"
                >Pasar Coding di Indonesia Dinilai Masih Menjanjikan</a>
            </h1>
            <div class="detail-blog-content">
              12 Jul 2021 22:30 WIB | Nafiisan N. Achmad
            </div>
            <p>
            
              Ketimpangan sumber daya manusia (SDM) di sektor digital masih
              menjadi isu yang belum terpecahkan. Berdasarkan penelitian
              ManpowerGroup, ketimpangan SDM global, termasuk Indonesia,
              meningkat dua kali lipat dalam satu dekade terakhir. Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Quam, molestiae
              numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta,
              eligendi debitis?
            </p>

            <div style="float:right; margin: 10px">
              <p style="font-size: 15px; color:grey">1 minutes ago</p>
            </div>
          </div>
        </div>
    `
    
}


  }



