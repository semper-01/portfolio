
  
    //removing and adding active class to the about tab

    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){
      for(tablink of tablinks){
        tablink.classList.remove("active-link");
      }
      for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
      }
      event.currentTarget.classList.add("active-link");
      document.getElementById(tabname).classList.add("active-tab");

    }
    //closing and opening menu
    var sidemenu = document.getElementById("sidemenu");
    function openmenu(){
      sidemenu.style.right = "0";
    }
    function closemenu(){
      sidemenu.style.right = "-200px";
    }
// saving form data to google sheet using google apps script
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxriG2M3IT93NYW-I-IpbyTf63qrYxN_uwCqrTrnrKDsWYmP1y1yiaDQf_7VkWKC81A/exec';
  const form = document.forms['submit-to-google-sheet'];
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message Sent Successfully"
        setTimeout(function(){
          msg.innerHTML = ""
        }, 5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
