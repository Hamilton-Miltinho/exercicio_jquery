$(document).ready(function(){
    $('form').on('submit',function(e){
        e.preventDefault();

        const novaTarefa = $('#nome-tarefa').val();
        const novoItem = $(`<li style="display: none;">${novaTarefa}</li>`);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#nome-tarefa').val('');
        
        $('li').click(function(event) {
        // $('.overlay').click(function(event) {
            $(this).toggleClass('line-through');
            console.log(`A classe 'line-through' foi ${$(this).hasClass('line-through') ? 'adicionada' : 'removida'}`);
            // console.log(this);
            // $(this).addClass('line-through');
            event.stopPropagation();
        })
    })
})