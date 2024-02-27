const config = {
    baseUrl: "https://mesto.nomoreparties.co/v1/wff-cohort-7",
    headers: {
      authorization: "5424707d-84d7-4446-89fa-6c1c06535f54",
      "Content-Type": "application/json",
    },
  }
    
  const checkResponse = (res) => {
    if(res.ok){
      return res.json();
    }
  
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  
  export const getInitialCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
      method: 'GET',
      headers: config.headers
    })
    .then((res) => checkResponse(res))
  }
  export const getUserData = () => {
    return fetch(`${config.baseUrl}/users/me`, {
      method: "GET",
      headers: config.headers,
    })
    .then(res => checkResponse(res));
  };
  export const uppUserData = (data) =>{
    return fetch(`${config.baseUrl}/users/me`, {
      method: "PATCH",
      headers: config.headers,
      body: JSON.stringify(data),
    })
    .then(res => checkResponse(res));
  };
  export const uppInitialCards = (data) =>{
    return fetch(`${config.baseUrl}/cards`, {
      method: "POST",
      headers: config.headers,
      body: JSON.stringify(data),
    })
    .then(res => checkResponse(res));
  };
  export const uninstallCard = (cardId) => {
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: config.headers,
    }).then((res) => checkResponse(res));
  };
  export const likeCardApi = (cardId) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: config.headers,
    })
    .then(res => checkResponse(res));
  };
  
  export const likeDelet = (cardId) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: config.headers,
    })
    .then(res => checkResponse(res));
  };
  export const editProfileAvatar = (link) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: config.headers,
      body: JSON.stringify({
        avatar: link
      })
    })
    .then((res) => checkResponse(res))
  }