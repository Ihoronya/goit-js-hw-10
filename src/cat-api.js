import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function fetchBreeds() {
  const loader = document.getElementById("loader");
  loader.style.display = "block"; // Показати лоадер

  return fetch('https://api.thecatapi.com/v1/breeds', {
    headers: {
      Authorization: 'x-api-key: live_q7W8CY86BdsefrNUjX8MnZOhXFKNU2Lj1gg4UUEe3r8UDw4FFpsChZCIbavag9rG',
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .finally(() => {
      loader.style.display = "none"; // Приховати лоадер
    });
}

export function fetchCatByBreed(breedId) {
  const loader = document.getElementById("loader");
  loader.style.display = "block"; // Показати лоадер

  return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`, {
    headers: {
      Authorization: 'x-api-key: live_q7W8CY86BdsefrNUjX8MnZOhXFKNU2Lj1gg4UUEe3r8UDw4FFpsChZCIbavag9rG',
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .finally(() => {
      loader.style.display = "none"; // Приховати лоадер
    });
}

