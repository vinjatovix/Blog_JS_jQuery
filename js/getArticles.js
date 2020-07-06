

function getArticles() {
    return [
        {
            title: 'Artículo de prueba 1',
            date: moment().format('LLLL'),
            content: 'Aliquam feugiat cursus odio non ultricies. Suspendisse in lorem vitae orci finibus tincidunt. Suspendisse purus ligula, dignissim rhoncus rhoncus nec, laoreet ut elit.'
        },
        {
            title: 'Artículo de prueba 2',
            date: moment().format('LLLL'),
            content: 'In suscipit vitae turpis sit amet convallis. Curabitur tincidunt est lectus, sed varius sapien pellentesque finibus. Donec interdum, nulla ac placerat rhoncus, felis erat posuere est, a ullamcorper nunc lectus ac magna. Quisque lacinia egestas venenatis.'
        },
        {
            title: 'Artículo de prueba 3',
            date: moment().format('LLLL'),
            content: 'Praesent gravida pretium malesuada. Quisque ullamcorper risus eget nibh convallis, et posuere augue ultricies. Vestibulum leo ante, placerat ut convallis viverra, vehicula a orci. Morbi enim erat, aliquet vel leo vel, malesuada vulputate magna. Etiam urna nulla, scelerisque in ligula at, iaculis dictum est.'
        },
        {
            title: 'Artículo de prueba 4',
            date: moment().format('LLLL'),
            content: 'Aliquam vestibulum feugiat elit vel scelerisque. Aenean vitae est orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque vitae lacinia magna.'
        },
    ];
};

function printArticles(item) {
    let article = `                
            <article class="article">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>${item.content}</p>
                <a href="#" class="button-more">Leer más</a>
            </article>
            <div class="clearfix"></div>
            `;


    jQuery(document).ready(function () {
        $('#articles').append(article);
    });
};

