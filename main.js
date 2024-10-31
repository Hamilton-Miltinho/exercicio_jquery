$(document).ready(function(){
    $('form').on('submit',function(e){
        e.preventDefault();

        const novaTarefa = $('#nome-tarefa').val();
        const novoItem = $(`<p class="overlay" style="display: none;">${novaTarefa}</p>`);
        $(novoItem).appendTo('div');
        $(novoItem).fadeIn(1000);
        $('#nome-tarefa').val('');
        
        $('.overlay').click(function(){
            $(this).toggleClass('line-through');
        })
    })
})