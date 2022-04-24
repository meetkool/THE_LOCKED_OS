function NewTab() {
    window.open(
      "https://ae7f-103-218-228-2.in.ngrok.io/vnc_auto.html", "_blank");
}
document.getElementById("btn").addEventListener("click",function (e){
    e.preventDefault();
    const val=document.getElementById("text").value;
    console.log(val);
    NewTab();
})
