function getTextValueById(id){
  let textvalue= document.getElementById(id).innerText;
  let textNum= parseFloat(textvalue);
  return textNum;
}
function getInputValueById(id){
    let inputvalue=document.getElementById(id).value;
    let inpNum= parseFloat(inputvalue);
    return inpNum;
}