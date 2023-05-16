const $userList = $('#userList');
let $userListValue = 5;
const $ul = $('.user-list'); 

apiAnswer();

$userList.on('input', event => {
    
    $userListValue = $userList.val();
    
    $ul.children().remove();
    
    apiAnswer();
});


// ==============================

function apiAnswer() {
    $.ajax({
        url: `https://randomuser.me/api/?results=${$userListValue}`,
        dataType: 'json',
        success: function(data) {
            data.results.forEach( (el, index) => {
    
                let $li = $('<li class="user-list-item">' +
                                '<div class="card">' +
                                    `<img src="${data.results[index].picture.large}" alt="${index}">` +
                                    `<span class="card-name">${data.results[index].name.last} ${data.results[index].name.first}</span>` +
                                '</div>' +
                            '</li>');

                $ul.append($li);
            });
        }
    });
}

