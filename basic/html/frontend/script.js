async function getEmployees() {
  try {
    const res = await fetch('http://localhost:5000/user');
    const result = await res.json();
    const data = result.data;

    const employeeListDiv = document.getElementById('employeeList');
    employeeListDiv.innerHTML = ''; // Clear previous cards

    // data.forEach((item) => {
    //   createCard(item, employeeListDiv); // Pass parent div
    // });

    data.map(item => createCard(item, employeeListDiv));

  } catch (error) {
    console.error('Failed to load data:', error);
  }
}

getEmployees();


function createCard(item, container) {
  const card = document.createElement('div');
  card.className = 'relative mb-4 p-4 border rounded shadow bg-white';

  card.innerHTML = `
    <a href="/?id=${item.id}">
      <div class="text-lg font-semibold">Product: ${item.product_name}</div>
      <div class="text-sm text-gray-600">Category: ${item.category}</div>
      <div class="text-sm text-gray-600">Price: ₹${item.price}</div>
      <div class="text-sm text-gray-600">Detail: ${item.detail}</div>
      <div class="text-sm text-gray-600">Dis: ${item.Discount}</div>

    </a>
  `;

  const delBtn = document.createElement('div');
  delBtn.innerText = '×';
  delBtn.className = 'absolute px-1 w-min bg-black text-white text-2xl top-2 right-2 rounded-bl-full cursor-pointer';
  delBtn.addEventListener('click', () => {
    deleteProduct(item.id);
  });

  card.appendChild(delBtn);
  container.appendChild(card); // Append card to the list
}






async function deleteProduct(id) {
  if (!confirm(`Are you sure you want to delete product ${id}?`)) return;

  try {
    const res = await fetch(`http://localhost:5000/user/${id}`, {
      method: 'DELETE',
    });

    const result = await res.json();
    alert(result.message || 'Deleted successfully');

    // Optionally reload UI
    employeeListDiv.innerHTML = '';
    getEmployees();

  } catch (err) {
    console.error('Delete failed:', err);
  }
}
