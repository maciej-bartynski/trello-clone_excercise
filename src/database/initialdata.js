var initialData = [
    {
        column: 'To do',
        cards: [
            {
                title: 'title of the first one',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis lobortis odio id interdum. Morbi nec lacinia odio. Suspendisse placerat maximus mauris vitae convallis. Aliquam fringilla sapien mauris, id sollicitudin velit rutrum faucibus. Praesent ornare velit quam, ullamcorper pharetra tellus consequat in. Nam feugiat ante sit amet elit feugiat volutpat. Fusce imperdiet enim magna, eu dignissim nisi pulvinar sagittis. ',
                date: '2018-09-01',
                color: 'rgba(255, 255, 0, 0.7)'
            },
            {
                title: 'title of the second one',
                description: 'Hello from Russia',
                date: '2019-08-21',
                color: 'rgba(0,255,0,0.4)'
            },
            {
                title: 'title of the third one',
                description: 'Adipiscing elit. Sed facilisis lobortis odio id interdum. Morbi nec lacinia odio. Suspendisse placerat maximus mauris vitae convallis. Aliquam fringilla sapien mauris, id sollicitudin velit rutrum faucibus. Praesent ornare velit quam, ullamcorper pharetra tellus consequat in. Nam feugiat ante sit amet elit feugiat volutpat.',
                date: '2019-08-21',
                color: 'rgba(0,255,0,0.4)'
            }
        ]
    },
    {
        column: 'In progress',
        cards: [{
                title: 'title of the first one',
                description: 'Consectetur adipiscing elit. Sed facilisis lobortis odio id interdum. Morbi nec lacinia odio. Suspendisse placerat maximus mauris vitae convallis. Aliquam fringilla sapien mauris, id sollicitudin velit rutrum faucibus. Praesent ornare velit quam, ullamcorper pharetra tellus consequat in. Nam feugiat ante sit amet elit feugiat volutpat. Fusce imperdiet enim magna, eu dignissim nisi pulvinar sagittis.',
                date: '2019-08-21',
                color: 'rgba(0,255,0,0.4)'
            },
            {
                title: 'title of the second one',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis lobortis odio id interdum. Morbi nec lacinia odio. Suspendisse placerat maximus mauris vitae convallis. Aliquam fringilla sapien mauris, id sollicitudin velit rutrum faucibus. Praesent ornare velit quam, ullamcorper pharetra tellus consequat in. Nam feugiat ante sit amet elit feugiat volutpat. Fusce imperdiet enim magna, eu dignissim nisi pulvinar sagittis. ',
                date: '2019-08-21',
                color: 'rgba(0,255,0,0.4)'
            }
        ]
    },
    {
        column: 'done',
        cards: [{
                title: 'title of the first one',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis lobortis odio id interdum. Morbi nec lacinia odio. Suspendisse placerat maximus mauris vitae convallis. Aliquam fringilla sapien mauris, id sollicitudin velit rutrum faucibus. Praesent ornare velit quam, ullamcorper pharetra tellus consequat in. Nam feugiat ante sit amet elit feugiat volutpat. Fusce imperdiet enim magna, eu dignissim nisi pulvinar sagittis.',
                date: '2018-08-21',
                color: 'rgba(255,0,0,0.4)'
            }
        ]
    }
]
if (JSON.parse(localStorage.getItem('initialData'))===null){
    localStorage.setItem('initialData', JSON.stringify(initialData));
}