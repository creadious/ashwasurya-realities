import { addDoc, collection } from "firebase/firestore";
import { textDB } from "../firebase/firebase.config";

const useFireStore = async (data) => {
  const { name, email, phone, projectName } = data;

  const valueRef = collection(textDB, import.meta.env.VITE_FIRESTORE_DOC_NAME);
  const date = new Date();
  try {
    const res = await addDoc(valueRef, {
      name,
      email,
      phone: phone + "",
      projectName: projectName || null,
      date: date.toLocaleTimeString() + ", " + date.toLocaleDateString("en-GB"),
      createAt: date,
    });

    // After successfully adding the document, hit the API
    const apiResponse = await fetch(
      "https://connect.leadrat.com/api/v1/integration/Website",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "API-Key": import.meta.env.VITE_form_api_key, // API Key
        },
        body: JSON.stringify([
          {
            name: name,
            email: email,
            mobile: phone,
            project: projectName,
          },
        ]),
      }
    );

    if (!apiResponse.ok) {
      console.error("Failed to send data to the API:", apiResponse.statusText);
    } else {
      console.log("Data successfully sent to the API");
    }

    return res;
  } catch (err) {
    console.error(err);
  }
};

export default useFireStore;
