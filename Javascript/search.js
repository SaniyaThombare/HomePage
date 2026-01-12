<script>
    const donors = [
    {
    "name" : "Rahul Patil",
    "bloodGroup": "O+",
    "medicine": "Paracetamol",
    "distance": 2.5,
    "availability": "available"
    },

    {
    "name": "Sonal Deshmukh",
    "bloodGroup": "A+",
    "medicine": "Insulin",
    "distance": 5,
    "availability": "not"
    }
  ];

    function searchDonors() {
    const blood = document.getElementById("bloodGroup").value;
    const med = document.getElementById("medicineName").value;
    const avail = document.getElementById("availability").value;

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

  const filtered = donors.filter(d ={">"} ((blood === "" || d.bloodGroup === blood) && (med === "" || d.medicine.toLowerCase().includes(med)) && (avail === "" || d.availability === avail))
    );

  filtered.forEach(d => {
        resultsDiv.innerHTML += `
      <div class="donor-card">
        <h3>${d.name}</h3>
        <p><strong>Blood Group:</strong> ${d.bloodGroup}</p>
        <p><strong>Medicine:</strong> ${d.medicine}</p>
        <p><strong>Distance:</strong> ${d.distance} km</p>
        <p class="available">${d.availability}</p>
        <button>Contact</button>
      </div>`
});
}
</script>