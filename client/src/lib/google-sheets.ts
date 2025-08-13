// interface ContactFormData {
//   name: string;
//   email: string;
//   phone: string;
//   school: string;
//   message: string;
// }

// export async function submitToGoogleSheets(data: ContactFormData): Promise<void> {
//   const GOOGLE_SHEETS_URL = process.env.GOOGLE_SHEETS_URL || import.meta.env.VITE_GOOGLE_SHEETS_URL;
  
//   if (!GOOGLE_SHEETS_URL) {
//     console.warn("Google Sheets URL not configured. Form data would be submitted to:", data);
//     // For demo purposes, simulate successful submission
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     return;
//   }

//   const formData = new FormData();
//   formData.append('name', data.name);
//   formData.append('email', data.email);
//   formData.append('phone', data.phone);
//   formData.append('school', data.school);
//   formData.append('message', data.message);
//   formData.append('timestamp', new Date().toISOString());

//   try {
//     const response = await fetch(GOOGLE_SHEETS_URL, {
//       method: 'POST',
//       body: formData,
//       mode: 'no-cors'
//     });

//     // Note: due to no-cors mode, we can't check response status
//     // but the form submission will work with proper Google Apps Script setup
//     console.log('Form submitted successfully');
//   } catch (error) {
//     console.error('Error submitting form:', error);
//     throw new Error('Failed to submit form');
//   }
// }

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
