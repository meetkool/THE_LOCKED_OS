function NewTab() {
    window.open(
      "https://www.google.com", "_blank");
}
document.getElementById("btn").addEventListener("click",function (e){
    e.preventDefault();
    const val=document.getElementById("text").value;
    console.log(val);
    NewTab();
})