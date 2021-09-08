/* 
৮. সিরিয়াস প্রাকটিস --- the meal db এর খালতো ভাই the sports db থেকে কিছু জিনিস এনে দেখাবে। একজাক্টলি কি দেখাতে হবে। সেটা আমি বলে দিবো না। তুমি ওদের ওয়েবসাইট এ যাও। সেখানে কি কি লেখা আছে সেগুলা পড়ো। api গুলা এর ছোট করে কি কি করে বলা আছে। সেগুলা দেখো। তারপর কিছু ডাটা লোড করো। সেই ডাটাগুলো দেখাও। এইখানে সার্চ ফাংশনালিটি ইমপ্লিমেন্ট করো। অনেকটা mealdb এর মতো। আবার কোন একটাতে ক্লিক করলে সেটার ডিটেল দেখাবে। 

৯. চ্যালেঞ্জ --- দেখো sports db এর জন্য যে ওয়েবসাইট বানাবে সেখানে একটা লোডিং স্পিনার যোগ করতে পারো কিনা। জিনিসটা একটু কঠিন মনে হতে পারে। তাও দেখানোর চেষ্টা করো। এইটা আমরা এক সময় দেখিয়ে দেব। তবে তার আগে তুমি দেখো গুগলে সার্চ দিয়ে কিছু বের করতে পারো কিনা।
*/

// Loading Spinner 
const loadingSpinner = document.getElementById('loading-spinner');

// Search Button Event Handler
document.getElementById('search-btn').addEventListener('click', async () => {
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value;

    // Spinner
    loadingSpinner.classList.remove('d-none');

    // Load Data From Server with API
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchValue}`;
    const res = await fetch(url);
    const data = await res.json();
    displayData(data.teams);

    // Clear Input
    searchField.value = '';
});

// Display all data in Cards Grid
const displayData = teams => {
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.textContent = '';

    // Spinner
    loadingSpinner.classList.add('d-none');

    teams.forEach(team => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div onclick="singleCard(${team.idTeam})" class="card">
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
            </div>`;
        cardsContainer.appendChild(div);
    });
};

// Fetching Data for Single Card Show
const singleCard = async id => {

    // Spinner
    loadingSpinner.classList.remove('d-none');

    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
    const res = await fetch(url);
    const data = await res.json();
    singleCardDisplay(data.teams[0]);
};

// Display the Data after Click
const displayContainer = document.getElementById('display-container');
const singleCardDisplay = team => {
    // Spinner
    loadingSpinner.classList.add('d-none');

    displayContainer.textContent = '';
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
            <div onclick="singleCard(${team.idLeague})" class="card">
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
    displayContainer.appendChild(div);
};