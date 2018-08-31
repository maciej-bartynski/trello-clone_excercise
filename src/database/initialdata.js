var initialData = [
    {
        column: 'To do',
        cards: [
            {
                title: 'Learn latin',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis lobortis odio id interdum. Morbi nec lacinia odio. Suspendisse placerat maximus mauris vitae convallis. Aliquam fringilla sapien mauris, id sollicitudin velit rutrum faucibus. Praesent ornare velit quam, ullamcorper pharetra tellus consequat in. Nam feugiat ante sit amet elit feugiat volutpat. Fusce imperdiet enim magna, eu dignissim nisi pulvinar sagittis. ',
                date: '2018-09-01',
            },
            {
                title: 'Keeping calm and git push',
                description: 'Hello from Poland',
                date: '2019-01-01',
            },
            {
                title: 'Title of the third one',
                description: 'Adipiscing elit. Sed facilisis lobortis odio id interdum. Morbi nec lacinia odio. Suspendisse placerat maximus mauris vitae convallis. Aliquam fringilla sapien mauris, id sollicitudin velit rutrum faucibus. Praesent ornare velit quam, ullamcorper pharetra tellus consequat in. Nam feugiat ante sit amet elit feugiat volutpat.',
                date: '2018-08-31',
            }
        ]
    },
    {
        column: 'Processing...',
        cards: [{
                title: 'Nothing',
                description: 'Consectetur adipiscing elit. Sed facilisis lobortis odio id interdum. Morbi nec lacinia odio. Suspendisse placerat maximus mauris vitae convallis. Aliquam fringilla sapien mauris, id sollicitudin velit rutrum faucibus. Praesent ornare velit quam, ullamcorper pharetra tellus consequat in. Nam feugiat ante sit amet elit feugiat volutpat. Fusce imperdiet enim magna, eu dignissim nisi pulvinar sagittis.',
                date: '2018-08-30',
            },
            {
                title: 'To understand Tolkien better',
                description: '\"I can\'t recall the taste of food, nor the sound of water.I\'m naked in the dark. There\'s nothing… no veil between me and the wheel of fire.\"',
                date: '2016-08-21',
            }
        ]
    },
    {
        column: 'Done',
        cards: [{
                title: 'Lorem ipsum muspi merol',
                description: 'How much wood would a woodchuck chuck if a woodchuck could chuck wood?',
                date: '2018-08-31',
            }
        ]
    }
]
if (JSON.parse(localStorage.getItem('initialData'))===null){
    localStorage.setItem('initialData', JSON.stringify(initialData));
}