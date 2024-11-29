import { domain } from "./URLS";


export const showData = async (METHOD, TOKEN, API) => {
    try {
      let myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${TOKEN}`);
      myHeaders.append("Content-Type", "application/json");
      let requestOptions = {
        method: METHOD,
        headers: myHeaders,
        redirect: "follow",
      };
      const response = await fetch(`${domain}${API}`, requestOptions);
      
      const data = await response.json();
      return data;
    } catch (error) {
      throw error; // Puedes manejar el error aquí o simplemente lanzarlo nuevamente
    }
  };

  export const showDataNoToken = async (METHOD, API) => {
    try {
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      let requestOptions = {
        method: METHOD,
        headers: myHeaders,
        redirect: "follow",
      };
      const response = await fetch(`${domain}${API}`, requestOptions);
      const data = await response.json();
      return data;
    } catch (error) {
      throw error; // Puedes manejar el error aquí o simplemente lanzarlo nuevamente
    }
  };
  