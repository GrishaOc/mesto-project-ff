import { cardsTemplate} from "./base.js";
import { likeDelet, likeCardApi } from "./api.js";


export function createCard(
  cardData,
  deleteCard,
  openingIMG,
  likeCard,
  profileId
) {
  const cardElement = cardsTemplate.querySelector(".card").cloneNode(true);
  cardElement.dataset.id = cardData._id;

  const delBtn = cardElement.querySelector(".card__delete-button");
  const likeBtn = cardElement.querySelector(".card__like-button");

  const sumLike = cardElement.querySelector(".card__sum-like");

  const cardTitle = cardElement.querySelector(".card__title");

  cardTitle.textContent = cardData.name;

  sumLike.textContent = cardData.likes.length;

  const cardImage = cardElement.querySelector(".card__image");

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;

  likeBtn.addEventListener("click", likeCard);
  cardImage.addEventListener("click", openingIMG);

  if (profileId != cardData.owner._id) {
    delBtn.remove();
  } else {
    delBtn.addEventListener("click", deleteCard);
  }

  if (cardData.likes.some((element) => element._id === profileId)) {
    likeBtn.classList.add("card__like-button_is-active");
  }

  return cardElement;
}
// @todo: Функция удаления карточки

//LIKE
export function likeCard(evt) {
  const cardId = evt.target.closest(".card").dataset.id;
  const likeMethod = evt.target.classList.contains(
    "card__like-button_is-active"
  )
    ? likeDelet
    : likeCardApi;
  likeMethod(cardId)
    .then((data) => {
      evt.target.nextElementSibling.textContent = data.likes.length;
      evt.target.classList.toggle("card__like-button_is-active");
    })
    .catch((err) => console.log(err));
}
