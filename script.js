function setupAutocomplete(inputId, listId, nextFocusId = null) {
  const input = document.getElementById(inputId);
  const list = document.getElementById(listId);
  let currentIndex = -1;

  input.addEventListener("input", () => {
    const value = input.value.toLowerCase();
    list.innerHTML = "";
    currentIndex = -1;

    if (!value) {
      list.style.display = "none";
      return;
    }

    const filtered = countries.filter(c => c.name.toLowerCase().includes(value));
    if (filtered.length === 0) {
      list.style.display = "none";
      return;
    }

    filtered.forEach((c, index) => {
      const li = document.createElement("li");
      li.textContent = `${c.name} (${c.code})`;
      li.tabIndex = 0;
      li.setAttribute("role", "option");
      li.dataset.index = index;

      li.addEventListener("click", () => {
        input.value = `${c.name} (${c.code})`;
        list.innerHTML = "";
        list.style.display = "none";
        if (nextFocusId) document.getElementById(nextFocusId).focus();
      });

      list.appendChild(li);
    });

    list.style.display = "block";
  });

  input.addEventListener("keydown", (e) => {
    const items = list.querySelectorAll("li");

    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (currentIndex < items.length - 1) {
        if (currentIndex >= 0) items[currentIndex].classList.remove("active");
        currentIndex++;
        items[currentIndex].classList.add("active");
        items[currentIndex].focus();
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (currentIndex > 0) {
        items[currentIndex].classList.remove("active");
        currentIndex--;
        items[currentIndex].classList.add("active");
        items[currentIndex].focus();
      }
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (currentIndex >= 0) {
        items[currentIndex].click();
      } else if (items.length > 0) {
        items[0].click();
      }
    } else if (e.key === "Escape") {
      list.innerHTML = "";
      list.style.display = "none";
    }
  });

  document.addEventListener("click", e => {
    if (!list.contains(e.target) && e.target !== input) {
      list.innerHTML = "";
      list.style.display = "none";
    }
  });
}

function simulateApiCall(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        flights: [
          { airline: "Qatar Airways", price: "QAR 2100", time: "08:00 - 16:30" },
          { airline: "Gulf Air", price: "QAR 1900", time: "09:00 - 17:15" },
          { airline: "Air India", price: "QAR 1500", time: "11:30 - 20:45" }
        ]
      });
    }, 1000);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupAutocomplete("from", "from-list", "to");
  setupAutocomplete("to", "to-list", "date");

  // Init Bootstrap datepicker
  $('#date').datepicker({
    format: 'yyyy-mm-dd',
    startDate: new Date(),
    autoclose: true,
    todayHighlight: true
  });

  // Click on calendar icon opens datepicker
  $('.input-group-text').on('click', () => {
    $('#date').datepicker('show');
  });

  // Handle form submit
  const form = document.getElementById("flightForm");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "<p>🔍 Searching flights...</p>";

    const data = {
      from: document.getElementById("from").value,
      to: document.getElementById("to").value,
      date: document.getElementById("date").value,
      passengers: document.getElementById("passengers").value
    };

    const response = await simulateApiCall(data);

    resultsDiv.innerHTML = '<div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3">';
    response.flights.forEach(flight => {
      resultsDiv.innerHTML += `
        <div class="col">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">${flight.airline}</h5>
              <p class="card-text">🕒 ${flight.time}</p>
              <p class="card-text fw-bold">💰 ${flight.price}</p>
            </div>
          </div>
        </div>`;
    });
    resultsDiv.innerHTML += '</div>';
  });
});
