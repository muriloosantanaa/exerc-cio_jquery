
$(document).ready(function() {
    // Mostrar o formulário ao clicar no botão do header
    $('header button').click(function() {
        $('form').slideDown();  
    });
});

$('#botao-limpar').click(function() {
    $('form').slideUp();
})

$('form').on('submit', function(e) {
    e.preventDefault();
    
    // Captura o valor da nova tarefa
    var novaTarefa = $('#nova-Tarefa').val();
    if (novaTarefa) {
// Alterna a classe 'completed' ao clicar em uma tarefa
$('.listaAdd').on('click', 'li', function() {
    $(this).toggleClass('completed');
});
        // Adiciona a nova tarefa à lista "Hoje"
        $('.listaAdd').append('<li>' + novaTarefa + '</li>');
        
        // Limpa o campo de entrada
        $('#nova-Tarefa').val('');
    }
});