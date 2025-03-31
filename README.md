# ✈️ Flight Booking UI – Frontend Demo Project

This is a **responsive flight booking interface** built with HTML, CSS, JavaScript, and Bootstrap. It demonstrates:

- 🔍 Autocomplete origin & destination input with keyboard support  
- 📅 Bootstrap datepicker with calendar icon  
- 💻 Fully responsive layout (mobile-first)  
- ⚙️ Fake flight search with dynamic results  
- 🧠 Perfect for internships, portfolios, and learning frontend skills

---

## 📸 Preview

<img src="https://github.com/jananitkt/flight-booking-ui/blob/main/preview.png" alt="Flight Booking UI Screenshot" width="100%" />

---

## 🚀 Features

| Feature                          | Description                                                                 |
|----------------------------------|-----------------------------------------------------------------------------|
| 🔤 Autocomplete Inputs           | Type origin/destination – shows matching cities with arrow + enter support |
| ⌨️ Keyboard Accessibility        | Navigate suggestions using ↑ ↓ Enter, Escape                               |
| 🗓️ Fancy Date Picker             | Calendar icon, Bootstrap datepicker, no past dates                         |
| 📱 Responsive Layout             | Mobile, tablet, and desktop support using Bootstrap grid                   |
| 💡 Fake API Integration          | Simulates flight data dynamically using JavaScript                         |
| 🎨 Clean UI                      | Bootstrap 5 + custom styling                                               |

---

## 🛠️ Tech Stack

- **HTML5 + CSS3**  
- **JavaScript (Vanilla)**  
- **[Bootstrap 5](https://getbootstrap.com/)**  
- **[Bootstrap Icons](https://icons.getbootstrap.com/)**  
- **[Bootstrap Datepicker](https://bootstrap-datepicker.readthedocs.io/)**

---

## 🧪 How to Run Locally

```bash
git clone https://github.com/your-username/flight-booking-ui.git
cd flight-booking-ui
open index.html
```

> ✅ No build tools required. Just open in your browser.

---

## 📁 Folder Structure

```
flight-booking-ui/
│
├── index.html          → Main UI
├── style.css           → Custom styles
├── script.js           → JS logic (autocomplete, search, datepicker)
├── countries.js        → List of airports with IATA code & name
└── README.md           → Project documentation
```

---

## 🌍 Example Country List (autocomplete)

```js
{ code: "DOH", name: "Doha, Hamad International Airport" }
{ code: "DEL", name: "Delhi, Indira Gandhi International Airport" }
{ code: "CDG", name: "Paris, Charles de Gaulle Airport" }
```

---

## 🔥 Customizations

| You Can...                     | How?                                                                 |
|-------------------------------|----------------------------------------------------------------------|
| Add real APIs                 | Replace `simulateApiCall()` in `script.js`                           |
| Add price filters             | Use input range or dropdown + filter flight array                    |
| Add more airports             | Edit `countries.js`                                                  |
| Add form validation           | Use Bootstrap validation classes or JS checks                        |

---

## 👩‍💻 Ideal For

- B.Tech / CS Students
- Frontend Dev Learners
- UI/UX Portfolio Projects
- Airline or Travel Tech Demos

---

## 📬 Contributing

Found a bug or want to contribute? Pull requests are welcome!  
You can also [open an issue](https://github.com/jananitkt/flight-booking-ui/issues) with ideas or suggestions.

---

## 🧠 License

This project is open-sourced under the MIT license.  
Feel free to reuse, modify, and learn from it!
