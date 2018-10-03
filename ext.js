function createTodo(t){
    html = `
                            <div class="uk-margin uk-card uk-card-primary uk-card-hover uk-light uk-padding">
                                <div class="uk-body">`;
    html += t;
    html += `<br><br>
                                    <button class="uk-button uk-button-secondary">delete</button>
                                </div>
                            </div>
                        </div>
                   `;
    return html;
}

function addTodo(){
    var todo = $('#input').attr('placeholder');
    $('#container').append(createTodo(todo));
}

$('document').ready(function() {
        
        
    
    }
);