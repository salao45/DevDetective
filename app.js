const get = (param) => document.getElementById(`${param}`);
const wholeBody = document.querySelector(".wrapper");
const toggle_btn = document.querySelector(".toggle-btn");
const toggle_text = document.querySelector(".toggle-text");
const search_btn = document.querySelector(".search-btn");
const search_field = document.querySelector(".search-field");
const user_name =  document.querySelector(".username");
const locationt = get("location-text");
const twitter = get("twitter-text");
const page = get("linkdin-text");
const company = get("pro-peer-text");
const bio = get("bio");
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let dark_mode = false;


  
 let user = "salao45";
 show_details(user);
 search_btn.addEventListener("click",()=>{
        user = search_field.value;
        
        show_details(user)
 });
 

 function show_us(data){
     document.querySelector(".mera-photu").src =`${data?.avatar_url}`;
     document.querySelector(".naam").textContent = `${data?.name}`;
     user_name.innerText = `${data?.login}`;
     user_name.href = `${data.html_url}`;
     datesegments = data.created_at.split("T").shift().split("-");
     bio.innerText = `${data.bio}`=="null"?"This profile has no bio":`${data.bio}`;
     document.querySelector(".join-date").innerText = `Joined ${datesegments[2]} ${months[datesegments[1] - 1]} ${datesegments[0]}`;
     document.querySelector(".repo-num").textContent = `${data?.public_repos}`;
     document.querySelector(".follower-num").textContent = `${data?.followers}`;
     document.querySelector(".following-num").textContent = `${data?.following}`;
     locationt.innerText = `${data.location}`== "null" ? "Not Available" : `${data.location}`;
     page.innerText = `${data.blog}`==""? "Not Available" : `${data.blog}`;
     page.href = `${data.blog}`=="" ?"#" : `${data.blog}`;
     twitter.innerText =`${data.twitter_username}`=="null" ? "Not Available" : `${data.twitter_username}`;
     twitter.href = `${data.twitter_username}`=="null" ?  "#": `https://twitter.com/${data.twitter_username}`;
     company.innerText = `${data.company}`=="null"?"Not Available":`${data.company}`;
     
 }
  async function show_details(user){
       let response = await fetch(`https://api.github.com/users/${user}`);
       let data = await response.json();
       show_us(data);
       console.log(`${data?.name}`)
      
  }


  