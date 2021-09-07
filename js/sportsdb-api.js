// ৮. সিরিয়াস প্রাকটিস --- the meal db এর খালতো ভাই the sports db থেকে কিছু জিনিস এনে দেখাবে। একজাক্টলি কি দেখাতে হবে। সেটা আমি বলে দিবো না। তুমি ওদের ওয়েবসাইট এ যাও। সেখানে কি কি লেখা আছে সেগুলা পড়ো। api গুলা এর ছোট করে কি কি করে বলা আছে। সেগুলা দেখো। তারপর কিছু ডাটা লোড করো। সেই ডাটাগুলো দেখাও। এইখানে সার্চ ফাংশনালিটি ইমপ্লিমেন্ট করো। অনেকটা mealdb এর মতো। আবার কোন একটাতে ক্লিক করলে সেটার ডিটেল দেখাবে। 

// Search Button Event Handler
document.getElementById('search-btn').addEventListener('click', async () => {
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value;

    // Load Data From Server with API
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchValue}`;
    const res = await fetch(url);
    const data = await res.json();
    displayData(data.teams);

    // Clear Input
    searchField.value = '';
});

const displayData = teams => {
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.textContent = '';
    teams.forEach(team => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div onclick="singleCard()" class="card">
                <img src="${team.strStadiumThumb ? team.strStadiumThumb : `https://www.thesportsdb.com/images/media/team/stadium/qwiwct1612115458.jpg`}" class="card-img-top" alt="${team.strAlternate}">
                <div class="card-body">
                    <h5 class="card-title">${team.strAlternate ? team.strAlternate : `Not Found`}</h5>
                    <p class="card-text">${team.strStadiumDescription ? team.strStadiumDescription.slice(0, 150) : `Not Found`}</p>
                </div>
                <div class="card-footer">
                    <a href="${team.strWebsite ? team.strWebsite : `https://www.facebook.com/ibnumahtab`}"><i class="bi bi-globe2"></i></a>
                    &nbsp;
                    <a href="${team.strFacebook ? team.strFacebook : `https://www.facebook.com/ibnumahtab`}"><i class="bi bi-facebook"></i></a>
                    &nbsp;
                </div>
            </div>
        `;
        cardsContainer.appendChild(div);
    });
};

const singleCard = () => {
    console.log('ok');
}


/* 
৯. চ্যালেঞ্জ

দেখো sports db এর জন্য যে ওয়েবসাইট বানাবে সেখানে একটা লোডিং স্পিনার যোগ করতে পারো কিনা। জিনিসটা একটু কঠিন মনে হতে পারে। তাও দেখানোর চেষ্টা করো। এইটা আমরা এক সময় দেখিয়ে দেব। তবে তার আগে তুমি দেখো গুগলে সার্চ দিয়ে কিছু বের করতে পারো কিনা।  

১০. চ্যালেঞ্জ (আগামীকাল এর চ্যালেঞ্জ। যদিও আজকের ভিডিওতে বলে দিয়েছি)

তুমি নিজে নিজে temperature দেখানোর একটা API ইউজ করে কিছু একটা করার বা শেখার চেষ্টা করে ফেলতে পারো। আমি ভিডিওতে openweathermap এর কথা বলেছি। সেই ওয়েবসাইট ইউজ করার সিস্টেম নিজে নিজে খুঁজে বের করো। সেখানে একটা API KEY লাগবে। সেটা কিভাবে পেতে হয় আমরা বলে দিবো না। তুমি তাদের ওয়েবসাইট ঘেঁটে বের করো। জিনিসটা সিম্পল। তারপরেও নিজে নিজে খুঁজে বের করার চেষ্টা করা অনেক বেশি গুরুত্বপূর্ণ। তারপর এমন একটা ওয়েবসাইট বানিয়ে ফেলো যেখানে কোন শহরের নাম লিখলে সেখানকার তাপমাত্রা কত বলে দিবে। এই রিলেটেড ডিজাইন এর একটা রিপো আছে আমাদের গিটহাব এ। সেই রিপো এর নাম temperature hot তবে তোমাকে সেই ডিজাইন করতেই হবে। এমন কোন কথা নাই। বরং তুমি তোমার মতো করে ডিজাইন করবে। 
*/