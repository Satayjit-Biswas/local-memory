const showLocalData = () => {
    const data = GetCard();
    const keys= Object.keys(data);
    keys.forEach(name => {
        DisplayProduct(name);
    });
}
const AddItem = () => {
    const card_id = document.getElementById('card_id');
    const input_valus = card_id.value;
    DisplayProduct(input_valus);
    AddStore(input_valus)
    card_id.value = '';
}
const DisplayProduct = name =>{
    const ul = document.getElementById('ul');
    const li = document.createElement('li');
    if(name.length>0){
        li.innerText = name; 
        ul.appendChild(li)
    } 
}
const GetCard = () =>{
    const card = localStorage.getItem('card');
    let cardObj;
    if (card){
        cardObj = JSON.parse(card);
    }
    else{
        cardObj = {};
    }
    return cardObj;
}
const AddStore = name => {
    const card = GetCard();
    card[name] = 1;
    const cardStringified = JSON.stringify(card);
    localStorage.setItem('card',cardStringified);
}
showLocalData();
const PlaceOrder = ()=>{
    const ul = document.getElementById('ul');
    ul.innerHTML='';
    localStorage.removeItem('card')
}