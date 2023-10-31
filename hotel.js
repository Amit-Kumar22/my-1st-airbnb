const info=JSON.parse(localStorage.getItem("user"))
console.log(info);

const citi=document.getElementById("place");
const date=document.getElementById("check-in");
const guest=document.getElementById("guests");
const hero=document.querySelector(".hero-section");
const detail=document.querySelector(".detail");
const detail2=document.querySelector(".detail2");
const left=document.querySelector(".left-hero");
const right=document.querySelector(".right-hero");

citi.innerHTML=info.location;
date.innerHTML=info.checkin;
guest.innerHTML=info.guest+" guests";



async function air(){
    const url = `https://airbnb13.p.rapidapi.com/search-location?location=${info.location}&checkin=${info.checkin}&checkout=${info.checkout}&adults=1&children=0&infants=0&pets=0&page=1&currency=USD`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '652b3eb743msh77869b34921f101p1a0a97jsn1221088a8b4b',
		'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
	}
};
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        let arr=result.results;
        left.innerHTML=`<p id="list-count">${arr.length}+ stays in ${info.location}</p>`
        right.innerHTML=`<iframe id="map" src="https://maps.google.com/maps?q=${arr.lat},      
        ${arr.lng}&&output=embed" width="660" height="670" frameborder="0" 
        style="border:0"></iframe>`
           for(let i=0; i<arr.length; i++){
            left.innerHTML+=`
            <div class="detail">
            <div class="image">
            <a href="${arr[i].deeplink}">
                <img id="romm-img" src="${arr[i].images[i]}"></a>
            </div>
            <div class="details">
                <div class="details1">
                    <div class="place-name">
                        <p class="entire">Entire home in ${arr[i].city}</p>
                        <p class="place">${arr[i].name}</p>
                    </div>
                    <img src="./images/like.png">
                    </div>
                    <div class="details2">
                        <p id="provide">${info.guest} guests · ${arr[i].type} · ${arr[i].beds} beds · ${arr[i].bathrooms} bath Wifi · Kitchen · Free Parking</p>
                    </div>
                    <div class="details3">
                        <p class="rating"><span id="rate">${arr[i].rating}</span> <span><img src="./images/star.png"></span> <span class="review">313 reviews</span></p>
                        <div class="rate">$${arr[i].reviewsCount} /night</div>
                    </div>
                </div>
        </div>
    `
        }
       // detail.append(detail2)
       
    //    for(let i=0; i<arr.length; i++){
    //     const image=document.getElementById("romm-img")
    // image.addEventListener("click", (e)=>{
    //     window.open(arr[i].deeplink, "_blank");
    // })

        
    } catch (error) {
        console.error(error);
    } 
} 

// function func(item){
//     item.forEach(elem => {
        
        
//     });
// }
air();

