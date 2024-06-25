function clickButton(click) {
  const clickElement = document.getElementById('clicks');
  const sumValue = parseInt(clickElement.innerText) + click;
  
  if (sumValue < 0) {
      clickElement.innerText = 1;
  } else {
      clickElement.innerText = sumValue;
  }
  
  const sumValueEvent = new CustomEvent('sumValueChanged', { detail: sumValue });
  document.dispatchEvent(sumValueEvent);
}

document.addEventListener('sumValueChanged', function(event) {
  const sumValue = event.detail;
  console.log('sumValue changed:', sumValue);

  function page(sumValue) {
      switch (sumValue) {
          case 1:
              return 1000;
          case 2:
              return 2000;
          case 3:
              return 3000;
          case 4:
              return 4000;
          case 5:
              return 5000;
          case 6:
              return 6000;
          case 7:
            return 7000;
          case 8:
              return 8000;
          case 9:
              return 9000;
          case 10:
              return 10000;
          case 11:
              return 10276;
          default:
              return 100;
      }
  }
  
  const pages = page(sumValue);
  console.log(pages); // Output the corresponding page value
  const paget = pages - 1000;
  const container = document.getElementById("container")

  for(let i = paget; i <=pages  ;i++){
    console.log("for: " +i)
    
    let url = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${i}`
fetch(url)
  .then(res => res.json()) // Convert response to JSON
  .then(data => {
    
    let type = data.types[0].type.name;
    let pic = data.sprites.back_default
    
   
    container.innerHTML += `<div>
    <img src ="${pic}"
    <p>${data.name}</p>
    <p>${data.id}</p>
    <p>${type}</p>
    <div>
    <p>${data.stats[0].stat.name}:${data.stats[0].base_stat}<p>
     <p>${data.stats[1].stat.name}:${data.stats[1].base_stat}<p>
      <p>${data.stats[2].stat.name}:${data.stats[2].base_stat}<p>
       <p>${data.stats[3].stat.name}:${data.stats[3].base_stat}<p>
        <p>${data.stats[4].stat.name}:${data.stats[4].base_stat}<p>
        <p>${data.stats[5].stat.name}:${data.stats[5].base_stat}<p>
    </di>
    </div>`
    
   
  })
  .catch(error => console.error("Error fetching data:", error))
  }
});
