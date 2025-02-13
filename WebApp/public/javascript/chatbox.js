const chatBody = document.querySelector(".chat-body");
const txtInput = document.querySelector("#txtInput");
const send = document.querySelector(".send");

send.addEventListener("click", () => {
    if(txtInput.value != ""){
        renderUserMessage();
    }
});

txtInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    if(txtInput.value != ""){
        renderUserMessage();
    }
  }
});

const renderUserMessage = () => {
  const userInput = txtInput.value;
  renderMessageEle(userInput, "user");
  txtInput.value = "";
  setTimeout(() => {
    renderChatbotResponse(userInput);
    setScrollPosition();
  }, 600);
};

const renderChatbotResponse = (userInput) => {
  const res = getChatbotResponse(userInput);
  renderMessageEle(res);
};

const renderMessageEle = (txt, type) => {
  let className = "user-message";
  if (type !== "user") {
    className = "chatbot-message";
  }
  const messageEle = document.createElement("div");
  const txtNode = document.createTextNode(txt);
  messageEle.classList.add(className);
  messageEle.append(txtNode);
  chatBody.append(messageEle);
};

const getChatbotResponse = (userInput) => {
  return responseObj[userInput] == undefined
    ? "Please try something else"
    : responseObj[userInput];
};

const setScrollPosition = () => {
  if (chatBody.scrollHeight > 0) {
    chatBody.scrollTop = chatBody.scrollHeight;
  }
};

const openForm = () => {
    if (document.getElementById("chatbox").style.display == "block")
        document.getElementById("chatbox").style.display = "none";
    else if(document.getElementById("chatbox").style.display == "none"
    || document.getElementById("chatbox").style.display == "")
        document.getElementById("chatbox").style.display = "block"
};