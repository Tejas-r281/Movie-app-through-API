const keys="https://api.themoviedb.org/3/movie/popular?api_key=7b34dacdf4309d45bcfe6b218078bbc5";
const container= document.querySelector('.container');
const store= document.querySelector('.store')
const cross= document.querySelector('.cross');
const upper=document.querySelector('.upper');
const detail= document.querySelector('.detail');
const body = document.body;
upper.style.top=0 +'px';
// const details= document.querySelector('.details');
cross.addEventListener('click',()=>{
   detail.innerHTML='';
    upper.classList.add('hidden');
    body.style.overflow='auto'
})
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
//  var controls=true;


const getresult= Result();
  getresult.then((e)=>{
//    console.log(e);
    e.results.forEach(element1 => {
        const path=(element1.poster_path);
        const realpath= IMGPATH+path;
        
        const inside =document.createElement('div');
        inside.setAttribute('class','inside');
        const html=`
        <img  class="image" src="${realpath}">
        <div class="content">
            <h1>${element1.original_title}</h1>
            <span >9</span>
        </div>`
        inside.innerHTML=html;
          store.insertAdjacentElement('beforeend',inside);
        //  var control= true;
        const image= document.querySelectorAll('.image');
        // console.log("outer");
        image.forEach(element => {
                // console.log(control);
              element.addEventListener('click',(e)=>{
            //   controls=true;
                const X= e.offsetX;
                const Y=e.offsetY;
                // console.log(`${X} ${Y}`);
                const ripple= document.createElement('span');
                // controls=false;
                // console.log(inside.contains('span'));
                const fre= document.querySelector('.ripple')
                if(fre==null)
                {
                inside.appendChild(ripple);
                
                }
                
                ripple.style.left=X +"px";
                ripple.style.top=Y +"px";
                
                ripple.setAttribute('class','ripple');
                setTimeout(() => {
                    ripple.remove();
                }, 1000);
                // control=false;
                //  console.log("inside");
                //  console.log(control);
                //  controls=true;
            
              
            })
        // console.log("outer");
        element.addEventListener('click',(e)=>{
            // console.log(element1);
            setTimeout(() => {
                showdetails(element1);
            }, 1000);
           
        })
        });
        // control =control+1;
      
    }
      
    );
    
  })
  
function showdetails(imge_path)
{
    // console.log("inside the dive");
    // console.log(imge_path);
    const detailss= document.querySelector('.details');
    if(detailss==null)
    {
    const details= document.createElement('div');
    details.setAttribute('class','details');
    detail.innerHTML='';
    const html=`
                     <img src=${IMGPATH+imge_path.poster_path}>
                     <h1 class="overview">Overview</h1>
      <h4>${imge_path.overview}</h4>`
      details.innerHTML=html;
      detail.insertAdjacentElement('beforeend',details);
      upper.classList.remove('hidden');
    //   console.log(document.body);
//   body.style.top=0+'px';
   upper.style.top= window.scrollY +'px';
    body.style.overflow='hidden';
    }
}

  
