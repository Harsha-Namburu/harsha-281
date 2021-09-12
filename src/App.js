import './App.css';

function App() {
  function displayData() {
    let input = document.querySelector(".input").value;
    let card = document.querySelector(".card");
    let card_img = document.querySelector(".card-img-top");
    let card_title = document.querySelector(".card-title");
    let card_subtitle = document.querySelector(".card-subtitle");
    let card_text = document.querySelector(".card-text");
    document.querySelector(".input").value = "";
    const query = input.charAt(0).toUpperCase() + input.slice(1);
    const apiKey = "890592b234f66fd368995b006601db88";
    const unit = "metric";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${unit}`;
  
    if (input !== "") {
      card.classList.remove("d-none");
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          const temp = data.main.temp;
          const weatherDesc = data.weather[0].description;
          const icon = data.weather[0].icon;
          const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  
          card_title.innerHTML = query;
          card_subtitle.innerHTML = temp + "&#8451;";
          card_text.innerHTML = "The weather is currently " + weatherDesc;
          card_img.src = imageURL;
        });
    }
  }
  
  return (
      <div className="container">
          <h1 className="heading text-center mt-5 mb-2">Weather App</h1>
          <div className="form-group">
            <input
              className="form-control input mt-3 mb-3 w-50 mx-auto"
              type="text"
              placeholder="Enter the city name"
              autocomplete="off"
            />
            <button
              className="btn btn-dark btn-lg btn-block w-50 mx-auto"
              onClick={() => {displayData();}}
            >
              Search
            </button>
            <hr />
          </div>

          <div className="card mt-5 mb-5 mx-auto d-none" style={{width: '20rem'}}>
            <img className="card-img-top" src="" alt="Card image cap" />
            <div className="card-body">
              <h1 className="card-title font-weight-bold"></h1>
              <h3 className="card-subtitle mb-2 font-weight-bold"></h3>
              <p className="card-text"></p>
            </div>
        </div>
      </div>
  );
}

export default App;
