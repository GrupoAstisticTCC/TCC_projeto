function enviar()
{
   let mensagem = document.getElementById("message").value;
   let post = document.getElementById("post");
   
   post.innerText = mensagem;
}