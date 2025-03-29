// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getProductsData() {
  const product_list = document.getElementById("product-list");
  const querySnapshot = await getDocs(collection(db, "products"));

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    console.log(data);

    product_list.innerHTML += `
    <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
      <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div class="my-3 p-3">
          <h2 class="display-5">Name -> ${data.name}</h2>
          <p class="lead">Type -> ${data.type} Quantity -> ${data.quantity}</p>
          <p class="lead">Quantity -> ${data.quantity}</p>
        </div>
      </div>      
    </div>
    `;
  });
}

getProductsData();