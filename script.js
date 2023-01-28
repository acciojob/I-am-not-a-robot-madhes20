
//heading content creation

let heading=document.createElement("h3");
heading.setAttribute("id","h");
heading.innerHTML="Please click on the identical tiles to verify that you are not a robot.";
document.body.appendChild(heading);

//creating a div for the button section
let btn_div=document.createElement("div")
document.body.appendChild(btn_div);

// reset button creation
let res_btn=document.createElement("button");
res_btn.setAttribute("id", "reset");
res_btn.innerHTML="reset";
res_btn.style.backgroundColor="red";
// btn_div.appendChild(res_btn);

//Verify button creation
let ver_btn=document.createElement("button");
ver_btn.setAttribute("id", "verify");
ver_btn.innerHTML="verify";
ver_btn.style.backgroundColor="blue";
// btn_div.appendChild(ver_btn);


//Passing all the classes in an array
let image_sources=["img1","img2","img3","img4","img5"];


////----------generating 6th  image from the 5 images
let random_index=Math.floor(Math.random(image_sources)*5);
random_image=image_sources[random_index];
image_sources.push(random_image);


//randomly generate the images when reload
let arr=[];
// let random_index2 =Math.floor(Math.random()*image_sources.length);
let k=0;
while(k<image_sources.length)
{
    let random_index2 =Math.floor(Math.random()*image_sources.length);
    if(arr[random_index2]==undefined)
    {
        arr[random_index2]=image_sources[k];
        k++;
    }
    else
    {
        continue;
    }
}

//.selecting all images and to show in the webpage
let images=document.getElementsByTagName("img");
console.log(images);


//setting class name to all the images using a for ;loop
for(let i=0;i<arr.length;i++)
{
    images[i].setAttribute("class",arr[i] );
    images[i].setAttribute("id",i);
}

//
for(let i of images)
{
    i.addEventListener("click",clicking);
}


//clicking function is used to know the which element is clicked and how many times it is being clicked.

let count=0;
click_count=0;
let prevImgId="";
function clicking(e)
{
    click_count++;
    if(click_count==1)
    {
        heading.remove();
    }
    btn_div.appendChild(res_btn);
    let currImgId=e.target.id;


    //Highlighting the image when clicked
    images[currImgId].classList.add("selected");
    
    
    //comparing image ids to verify different images are clicked
    if(currImgId!=prevImgId)
    {
        images[currImgId].classList.add("selected");
        count++;
        prevImgId=currImgId;
        if(count==2)
        {
            btn_div.appendChild(ver_btn);
        }
    }


    //adding event listener to Reset button
    res_btn.addEventListener("click",()=>{
        res_btn.remove();
        ver_btn.remove();
        para.innerHTML="";
        for(let i=0;i<6;i++)
        {
            document.getElementById(i).classList.remove("selected");
        }
        count=0;
    })


    //adding event listener to Reset button
    let para=document.getElementById("result");
    ver_btn.addEventListener("click", ()=>{
        let selectedimages=document.getElementsByClassName("selected");
        let class1=selectedimages[0].className;
        let class2=selectedimages[1].className;
        if(class1==class2)
        {
            ver_btn.remove();
            para.innerHTML="You are a human. Congratulations!";
          
        }
        else
        {

            para.innerHTML="We can't verify you as a human. You selected the non-identical tiles";
           
        }
      

    })
}


//the below function selecting is used to highlight the selected item with css
function selecting(e)
{
    let a=e.id;
    let b=document.getElementById(a).classList.add("selected");
}
