import { API_BASE_URL, DATA_API_BASE_URL, ACCESS_TOKEN, USER_NAME } from '../constants';
import { useNavigate } from 'react-router-dom';

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    
    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response => 
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            
            localStorage.setItem(USER_NAME, json.name)
            console.log(json.name)
            
            return json;
        })
    );
};

export function getCurrentUser() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/user/me",
        method: 'GET'
    });
}

export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/auth/login",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function signup(signupRequest) {
    return request({
        url: API_BASE_URL + "/auth/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}

export function createCommunity(formData) {    
    fetch("http://localhost:8080/api/community/create", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
    })
    .then((res) => {
          if (res.ok) {
            window.alert("You've successfully created a community!");   
          } else {
              window.alert("Your inputs are wrong");
          }
    })
    .then(data => {
      const communityID = data.id;
      return communityID;
    })
    .catch((error) => { 
        console.error("Error:", error);
        return -1;
    })
}

export function createCommunityRequest(formData) {    

    console.log(555, formData)
    fetch("http://localhost:8080/api/community/createRequest", {
        method: "PUT",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
    })
    .then((res) => {
          if (res.ok) {
            window.alert("You've successfully created a community!");   
          } else {
              window.alert("Your inputs are wrong");
          }
    })
    .then(data => {
        console.log("API createcommunityrequest data",data)
      navigate('/CommunityView',{state:{formData:data}})
    })
    .catch((error) => { 
        console.error("Error:", error);
    })
}
export function addTagsToCommunity(communityID, tags){    
    fetch("http://localhost:8080/api/community/"+communityID+"/tags/"+tags, {
        method: "POST",
        body: JSON.stringify({
            communityID: communityID,
            nameList: tags,
          }),
        headers: {
          "Content-Type": "application/json",
        },
    })
    .then((res) => {
          if (res.ok) {
            console.log("Tags added to community!");   
          } else {
              console.log("tags add to community error");
          }
    })
    .catch((error) => { 
        console.error("Error:", error);
    })
}

export function getAllInitiatives() {
    return request({
        url: DATA_API_BASE_URL + "api/initiative",
        method: 'GET'
    });
}

export function imageDataConvertToUint8(imageData) {
   let pixelArray;
  // Assuming the pixel values are in the form of a JSON string
  try {
    pixelArray = Object.values(JSON.parse(imageData));
  } catch (error) {
    
    console.error('JSON syntax error:', error);
    return null;
  }

  const uint8Array = Uint8Array.from(pixelArray);
    //const encoder = new TextEncoder();
    //const encodedBytes = encoder.encode(imageData.imageData);
    //console.log("uint8-imageData", imageData.imageData)
    //const uint8Array = new Uint8Array(encodedBytes);
    
   /// const uint8Array = JSON.parse(imageData.imageData)
    //console.log("uint8", uint8Array)
  

    const blob = new Blob([uint8Array], { type: 'image/png' });
    const imageUrl = URL.createObjectURL(blob);
    console.log("url", imageUrl);
    return imageUrl;
}