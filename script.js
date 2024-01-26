$(document).ready(function () {
    $('#newsTable').DataTable({
        ajax: {
            url: 'getData.php',
            dataSrc: ''
        },
        columns: [
            { data: 'title' },
            { data: 'description' },
            {
                data: 'link', render: function (data, type, row) {
                    return '<a href="' + data + '" target="_blank">Link</a>';
                }
            },
            { data: 'pubDate' },
            {
                data: 'enclosure', render: function (data, type, row) {
                    return '<img src="' + data['@url'] + '" alt="Image">';
                }
            },
        ],
        paging: true,
        searching: true,
        sorting: true
    });
});
