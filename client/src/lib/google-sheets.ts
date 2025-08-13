
const url = "https://script.google.com/macros/s/AKfycbzh90pLmURmxq64mdXxDq1k53pdPN9c7eTomSdMVXFuyiNG_mOHfW12ouEjKntDIADi/exec";

const deployment_id =  "AKfycbzh90pLmURmxq64mdXxDq1k53pdPN9c7eTomSdMVXFuyiNG_mOHfW12ouEjKntDIADi";

export async function submitToGoogleSheets(formData: {
  name: string;
  email: string;
  phone: string;
  school: string;
  message: string;
}) {
  // Replace this with your Apps Script Web App URL
  const scriptURL = "https://script.google.com/macros/s/AKfycbzh90pLmURmxq64mdXxDq1k53pdPN9c7eTomSdMVXFuyiNG_mOHfW12ouEjKntDIADi/exec";

  const response = await fetch(scriptURL, {
    method: "POST",
    mode: "no-cors", // Prevents CORS errors
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  return response;
}
