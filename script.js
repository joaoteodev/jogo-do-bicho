const root = document.querySelector("#root");
const h1 = document.createElement("h1");
const currentBalance = document.createElement("h2");
const gameStatus = document.createElement("h3");
const labelNumber = document.createElement("label");
const inputNumber = document.createElement("input");
const button = document.createElement("button");
const animalWrapper = document.createElement("div");
const animalName = document.createElement("h2");
const animalImage = document.createElement("img");
const animalNumber = document.createElement("h3");
const footer = document.createElement("h3");
const inputMoney = document.createElement("input");
const labelMoney = document.createElement("label");

h1.setAttribute("class", "title");
h1.textContent = "Jogo do bicho 😜";

let balance = 100;
currentBalance.setAttribute("class", "balance");
currentBalance.textContent = `Saldo atual: R$ ${balance.toFixed(2)}`;

inputMoney.setAttribute("type", "number");
inputMoney.classList.add("input", "inputMoney");
inputMoney.setAttribute("name", "moneyNumber");
labelMoney.setAttribute("for", "moneyNumber");
labelMoney.setAttribute("style", "font-size: 1rem");
labelMoney.textContent = "Insira um valor R$";

gameStatus.textContent = "Status: aguardando jogada...";

inputNumber.setAttribute("type", "number");
inputNumber.setAttribute("class", "input");
inputNumber.setAttribute("name", "animalNumber");
labelNumber.setAttribute("for", "animalNumber");
labelNumber.setAttribute("style", "font-size: 1rem");
labelNumber.textContent = "Digite um número entre 1 e 25";

button.setAttribute("class", "button");
button.textContent = "GIRAR";

animalWrapper.setAttribute("class", "animal-wrapper");
animalImage.setAttribute("class", "img");
animalImage.setAttribute(
  "src",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCt2etsHo7ReHcHf-FZE7EXAKTEvhqicSdCw&usqp=CAU"
);

footer.textContent = `Created by João Pedro 💙`;

const animals = [
  {
    name: "avestruz",
    number: 1,
    url: "https://i0.wp.com/files.agro20.com.br/uploads/2019/06/avestruz.jpg?resize=600%2C338&ssl=1"
  },
  {
    name: "águia",
    number: 2,
    url: "https://www.infoescola.com/wp-content/uploads/2008/07/%C3%A1guia_263456444.jpg"
  },
  {
    name: "burro",
    number: 3,
    url: "https://slm-assets.secondlife.com/assets/6451208/lightbox/Burro_Shrek_2_.jpg?1350515443"
  },
  {
    name: "borboleta",
    number: 4,
    url: "https://www.dicaspetz.com.br/?attachment_id=2442695"
  },
  {
    name: "cachorro",
    number: 5,
    url: "https://media.gazetadopovo.com.br/viver-bem/2018/11/dog3-600x459-0e01be20.jpg"
  },
  {
    name: "cabra",
    number: 6,
    url: "https://blog.dramei.com.br/wp-content/uploads/2017/10/aussergewohnliche-haustiere-zwergziege-620x420.jpg"
  },
  {
    name: "carneiro",
    number: 7,
    url: "https://tudovet.com.br/blog/wp-content/uploads/2020/04/to%CC%81pico-1.2-1024x682.jpg"
  },
  {
    name: "camelo",
    number: 8,
    url: "https://s4.static.brasilescola.uol.com.br/be/2021/05/camelo.jpg"
  },
  {
    name: "cobra",
    number: 9,
    url: "https://aventurasnahistoria.uol.com.br/media/_versions/hard_news/cobranaja_widelg.jpg"
  },
  {
    name: "coelho",
    number: 10,
    url: "https://static.escolakids.uol.com.br/2021/11/coelho.jpg"
  },
  {
    name: "cavalo",
    number: 11,
    url: "https://i2.wp.com/files.agro20.com.br/uploads/2019/11/Pre%C3%A7o-do-cavalo-2.jpg?fit=1024%2C610&ssl=1"
  },
  {
    name: "elefante",
    number: 12,
    url: "https://www.infoescola.com/wp-content/uploads/2016/12/elefante-asiatico-198685685.jpg"
  },
  {
    name: "galo",
    number: 13,
    url: "https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3053455:1614524322/Galo.jpg?f=16x9&h=720&q=0.8&w=1280&$p$f$h$q$w=b60d1c7"
  },
  {
    name: "gato",
    number: 14,
    url: "https://www.dicaspetz.com.br/wp-content/uploads/2019/04/quantos-anos-vive-um-gato.jpg"
  },
  {
    name: "jacaré",
    number: 15,
    url: "https://static.biologianet.com/2020/05/jacare-do-papo-amarelo.jpg"
  },
  {
    name: "leão",
    number: 16,
    url: "https://www.infoescola.com/wp-content/uploads/2017/04/leao-126767138.jpg"
  },
  {
    name: "macaco",
    number: 17,
    url: "https://imagens.ebc.com.br/jXBp2aTEBSQbfbl4law7lgW5cxE=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/_macaco-prego-do-peito-amarelo_bioparque-rio1111202706.jpg?itok=QrBY-f_j"
  },
  {
    name: "porco",
    number: 18,
    url: "https://s2.glbimg.com/DJ9TJliDtmrx3Mm52bPXPo7NIIs=/e.glbimg.com/og/ed/f/original/2021/01/06/pexels-barbara-barbosa-4636980.jpg"
  },
  {
    name: "pavão",
    number: 19,
    url: "https://imagens.mfrural.com.br/mfrural-produtos-us/354535-358291-1951147-casal-de-pavao-.jpg"
  },
  {
    name: "peru",
    number: 20,
    url: "https://www.agroolhar.com.br/sys/corteimg.asp?img=criacao-de-peru.jpg&sys=noticias&cut=1&w1=600&h1=600"
  },
  {
    name: "touro",
    number: 21,
    url: "https://s2.glbimg.com/fifp0t1g3CJ2VPVB7q1BtHJlzKY=/780x440/e.glbimg.com/og/ed/f/original/2021/06/16/original.jpg"
  },
  {
    name: "tigre",
    number: 22,
    url: "https://s2.glbimg.com/VWN9jgQan1rIbagrxyeooiJ0FPo=/0x0:1920x1280/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_7d5b9b5029304d27b7ef8a7f28b4d70f/internal_photos/bs/2021/E/9/Bj5UBcSh2zvjLrbSULIA/tiger-gd1ff713a9-1920.jpg"
  },
  {
    name: "urso",
    number: 23,
    url: "https://s2.glbimg.com/dgW_NN1AnuA1KwbUuBFVpm82Hvo=/0x0:1024x682/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/8/Y/xICwabTPOlLrrDTH9IGg/ap21125534338996.jpg"
  },
  {
    name: "veado",
    number: 24,
    url: "https://animalbusiness.com.br/wp-content/uploads/2017/12/4_macho.jpg"
  },
  {
    name: "vaca",
    number: 25,
    url: "https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3131837:1630774623/vaca.jpg?f=16x9&h=720&q=0.8&w=1280&$p$f$h$q$w=a0b0813"
  }
];

function handleBalance(balance) {
  currentBalance.textContent = `Saldo atual: R$ ${balance.toFixed(2)}`;
  inputMoney.value = "";
}

function getRandomAnimal() {
  const randomNumber = Math.floor(Math.random() * 26);
  return animals[randomNumber];
}

function winOrLose(animlNumber, playerNumber) {
  if (animlNumber === playerNumber) {
    // alert('You win. Congratulations!')
    gameStatus.textContent = "Status: Você ganhou!! 🥳";
    gameStatus.style.color = "green";
    inputNumber.value = "";
    return true;
  } else {
    // alert('Oh no. You lose... Sorry.')
    gameStatus.textContent = "Status: Hoje não... Tente novamente! 😝";
    gameStatus.style.color = "red";
    inputNumber.value = "";
    return false;
  }
}

function switchAnimal() {
  const playerNumber = Number(inputNumber.value);
  const moneyNumber = Number(inputMoney.value);

  if (moneyNumber > balance) {
    alert("Valor inserido, maior que o saldo, tente um valor menor.");
    return;
  }

  if (playerNumber < 1 || playerNumber > 25) {
    alert("Digite um numero entre 1 e 25.");
    return;
  }

  if (moneyNumber < 0) {
    alert("Valor inserido não aceito, favor verificar os dados novamente.");
    return;
  }

  const { name, url, number } = getRandomAnimal();
  animalName.textContent =
    "Animal: " + name.charAt(0).toUpperCase() + name.toLowerCase().slice(1);
  animalImage.setAttribute("src", url);
  animalNumber.textContent = "Numero: " + number;

  let isWinner = winOrLose(number, playerNumber);
  if (isWinner) {
    const odd = Math.round(Math.random() * (2 - 1) + 1);
    const moneyWin = moneyNumber * odd;
    balance += moneyWin;
    alert(
      `Você apostou R$ ${moneyNumber.toFixed(2)} no(a) ${
        animals[playerNumber - 1].name
      } e ganhou R$ ${moneyWin}! A ODD: ${odd}`
    );
  } else {
    balance -= moneyNumber;
    alert(
      `Você apostou R$ ${moneyNumber.toFixed(2)} no(a) ${
        animals[playerNumber - 1].name
      } e perdeu!`
    );
  }

  if (balance < 1) {
    alert("Você zerou o seu saldo! Tente novamente.");
    setTimeout(() => {
      location.reload();
    }, 2000);
  }

  handleBalance(balance);
}

button.addEventListener("click", switchAnimal);

root.appendChild(h1);
root.appendChild(currentBalance);
root.appendChild(labelMoney);
root.appendChild(inputMoney);
root.appendChild(gameStatus);
root.appendChild(labelNumber);
root.appendChild(inputNumber);
root.appendChild(button);
root.appendChild(animalWrapper);
animalWrapper.appendChild(animalName);
animalWrapper.appendChild(animalImage);
animalWrapper.appendChild(animalNumber);

animalWrapper.appendChild(footer);
