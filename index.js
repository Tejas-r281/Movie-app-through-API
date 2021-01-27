const keys="https://api.themoviedb.org/3/movie/popular?api_key=7b34dacdf4309d45bcfe6b218078bbc5";
const container= document.querySelector('.container');
const store= document.querySelector('.store')
// console.log(store);
// console.log(container);
const IMGPATH= "https://image.tmdb.org/t/p/w1280";
const Result= async()=>{
    try
    {
    const fetchs =await fetch(keys);
    const fetchedata= await fetchs.json();
    // console.log(fetchedata.results);
    return fetchedata;
    }
    catch{
        console.log(" May some problem with your programme");
    }
}
var control=1;

const getresult= Result();
  getresult.then((e)=>{
    //   console.log(e);
    e.results.forEach(element => {
        const path=(element.backdrop_path);
        const realpath= IMGPATH+path;
        // console.log(realpath);
        // const image_div= document.createElement('img');
        // image_div.setAttribute('class','img_class');
        //  image_div.src=realpath;
        //  image_div.alt="sorry image can not available at this time"
        //  console.log(image_div);
        const inside =document.createElement('div');
        inside.setAttribute('class','inside');
        const html=`
        <img  class="image" src="${realpath}">
        <div class="content">
            <h1>${element.original_title}</h1>
            <span >9</span>
        </div>`
        inside.innerHTML=html;
          store.insertAdjacentElement('beforeend',inside);
        //   console.log("raushan kumar");
        const image= document.querySelectorAll('.image');
        if(control)
        {
        image.forEach(element => {
              element.addEventListener('click',(e)=>{
                const X= e.clientX;
                const Y= e.clientY+window.scrollY;
                console.log(`${X} ${Y}`);
                const ripple= document.createElement('span');
                ripple.setAttribute('class','ripple');
                ripple.style.left=X +"px";
                ripple.style.top=Y +"px";
                store.appendChild(ripple);
                // store.style.position="relative";
                
                setTimeout(() => {
                    ripple.remove();
                }, 1000);
                console.log("raushan");
                // console.log(window.scrollY);
            })
            // console.log("rahul");
        });
        control =control+1;
        // console.log(control);
    }

    });
  })
  


  
