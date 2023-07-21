
//pcA0xmfmxYz3bnoZSVrm6DZmspuUSUiwVQAJ_fcQakY
const imageContainer=document.getElementById("image-container")
const myLoader=document.getElementById("loader")

function controlloader(){
    myLoader.hidden=false
}
controlloader()
async function getImages(){
    const response = await fetch("https://api.unsplash.com/photos/?client_id=pcA0xmfmxYz3bnoZSVrm6DZmspuUSUiwVQAJ_fcQakY")
    const imagesdata=await response.json()
    imagesdata.map(function(i){
        let imageUrl=i.urls.full
        const myImageElement=document.createElement("img")
        myImageElement.setAttribute("src",imageUrl)
        //console.log(myImageElement)
        imageContainer.append(myImageElement)
    })
}
//getImages()
setTimeout(function(){
    getImages()
    myLoader.hidden =true
},1000)

window.addEventListener("scroll",function(){
    let myClientHeight = document.documentElement.clientHeight
    let myScrollHeight = document.documentElement.scrollHeight
    let myScrollTop = document.documentElement.scrollTop

    if(myClientHeight + myScrollTop >= myScrollHeight){
        getImages()

    }


})