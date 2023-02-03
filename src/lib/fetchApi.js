const base_Url =
  "http://ec2-3-122-253-30.eu-central-1.compute.amazonaws.com:5500/api/v1";

export const fetchApi = async (path, options = {}) => {
  
 try {

  const requestOptions = {
   method: options.method || "GET",
   headers: { UserID: "Bermet", "Content-Type": "application/json"},

  }
  if(requestOptions.method !== "GET"){
   requestOptions.body = JSON.stringify(options.body)

  }
  
  const response = await fetch(`${base_Url}/${path}`,requestOptions )
  
 if (!response.ok) {
   throw new Error("wrong");
 }
 const res = await response.json();
 return res;
 }catch (error){
  throw error
 }
};
