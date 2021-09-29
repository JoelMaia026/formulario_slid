/*variaveis*/
var slid = 0;
var div_alerta = document.querySelector("#mensagem");
var mensagem = document.querySelector("#mensagem h4");
/* inicializando dados*/
div_alerta.style.display = "none";
var op = document.querySelectorAll(".slid");
info_2();
document.querySelector(".footer").style.display = "none";

for (var x = 0; x < op.length; x++) {
    op[x].style.display = "none";
}
op[0].style.display = "";

/*===========paginação top cont*/
var pagina = document.querySelectorAll(".paginacao>a");
pagina[0].className = "active";

function count_Pagina(num) {
    for (var x = 0; x < pagina.length; x++) {
        pagina[x].classList.remove("active")
    }
    pagina[num].classList.add("active")
}
/*========== esconder e mostrar slid*/

function mostrar_slid(slid) {
    for (var x = 0; x < op.length; x++) {
        op[x].style.display = "none";
    }
    op[slid].style.display = "";
}
/* footer (voltar e próximo)*/
function proximo() {
    div_alerta.style.display = "none";
    if (slid >= 3) { return false } else {
        //filtrando os dados do segundo slid
        if (dados_2()) {
            slid += 1;
            count_Pagina(slid)
            mostrar_slid(slid)
                //ocultará o botão próximo quando chegar o ultimo slid
            if (slid == 3) {
                document.querySelector(".btn-p").style.display = "none"
            }
        } else {
            mensagem_alerta("Selecione no mínimo 1 projectos")
        }

    }
}

function voltar() {
    div_alerta.style.display = "none";
    if (slid <= 0) { return false } else {
        slid -= 1
        if (slid == 0) {
            document.querySelector(".footer").style.display = "none";
        }
        count_Pagina(slid)
        mostrar_slid(slid)
        if (slid == 2) { document.querySelector(".btn-p").style.display = "" }
    }

}

/*================= primeira opção*/
var colecao1 = document.querySelectorAll(".slid_1>a")
for (var x = 0; x < colecao1.length; x++) {
    colecao1[x].onclick = function() { info_1(this) }
}

function info_1(e) {
    slid = 1
    var corporativa = e.innerHTML;
    console.log(corporativa)
    count_Pagina(slid)
    mostrar_slid(slid)
    document.querySelector(".footer").style.display = "";

}
/*==================segundo menu*/
function info_2() {
    //buscando por todas as opções do segundo slid
    var colecao2 = document.querySelectorAll(".slid_2>a");
    for (var x = 0; x < colecao2.length; x++) {
        // adicionando a acção de clickar
        colecao2[x].onclick = function() { click_info_2(this) }
    }
}

function click_info_2(e) {
    //adicionando e removendo classe de elementos
    if (e.classList == "opclick") {
        e.classList.remove("opclick");
    } else {
        e.classList.add("opclick")
    }
}

function dados_2() {
    var dados = [];
    var info = document.querySelectorAll("a.opclick");
    if (info.length == 0) {
        return false
    } else {
        for (var x = 0; x < info.length; x++) {
            dados[x] = info[x].innerHTML;
        }
        return dados
    }

}
/*=====================terceira opção*/
var textarea = document.querySelector("textarea").value;
/*quarta opção*/
var dados_cliente = [];
var dados_formulario = document.forms["dados_cliente"]
    //validandos os dados do segundo slid
function dados() {
    if (dados_formulario["nome"].value == "" || dados_formulario["email"].value == "" || dados_formulario["responsavel"].value == "" || dados_formulario["telefone"].value == "") {
        mensagem_alerta("precisas preencher todos os campos!")
    } else {
        for (var x = 0; x < dados_formulario.length; x++) {
            dados_cliente[x] = dados_formulario[x].value;
        }
    }
}

function mensagem_alerta(sms) {
    div_alerta.style.display = "";
    mensagem.innerHTML = sms;
}