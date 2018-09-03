//initialData[number]['cards'][number]['sets']: [difficulty(0-2),importance(0-2),icon(0-9)]
var initialData = [
    {
        column: 'To do',
        cards: [
            {
                title: 'Learn latin',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis lobortis odio id interdum. Morbi nec lacinia odio. Suspendisse placerat maximus mauris vitae convallis. Aliquam fringilla sapien mauris, id sollicitudin velit rutrum faucibus. Praesent ornare velit quam, ullamcorper pharetra tellus consequat in. Nam feugiat ante sit amet elit feugiat volutpat. Fusce imperdiet enim magna, eu dignissim nisi pulvinar sagittis. ',
                date: '2018-09-05',
                sets: [0, 2, 9, true]
            },
            {
                title: 'Keeping calm and git push',
                description: 'Hello from Poland',
                date: '2019-01-01',
                sets: [1, 1, 9, true]
            },
            {
                title: 'Title of the third one',
                description: 'Adipiscing elit. Sed facilisis lobortis odio id interdum. Morbi nec lacinia odio. Suspendisse placerat maximus mauris vitae convallis. Aliquam fringilla sapien mauris, id sollicitudin velit rutrum faucibus. Praesent ornare velit quam, ullamcorper pharetra tellus consequat in. Nam feugiat ante sit amet elit feugiat volutpat.',
                date: '2018-08-31',
                sets: [0, 0, 0, true]
            }
        ]
    },
    {
        column: 'Processing...',
        cards: [{
                title: 'Nothing',
                description: 'Consectetur adipiscing elit. Sed facilisis lobortis odio id interdum. Morbi nec lacinia odio. Suspendisse placerat maximus mauris vitae convallis. Aliquam fringilla sapien mauris, id sollicitudin velit rutrum faucibus. Praesent ornare velit quam, ullamcorper pharetra tellus consequat in. Nam feugiat ante sit amet elit feugiat volutpat. Fusce imperdiet enim magna, eu dignissim nisi pulvinar sagittis.',
                date: '2018-09-30',
                sets: [2, 2, 3, true]
            },
            {
                title: 'To understand Tolkien better',
                description: '\"I can\'t recall the taste of food, nor the sound of water.I\'m naked in the dark. There\'s nothing… no veil between me and the wheel of fire.\"',
                date: '2016-09-04',
                sets: [2, 1, 4, true]
            }
        ]
    },
    {
        column: 'Done',
        cards: [{
                title: 'Lorem ipsum muspi merol',
                description: 'How much wood would a woodchuck chuck if a woodchuck could chuck wood?',
                date: '2018-08-31',
                sets: [2, 0, 1, true]
            }
        ]
    }
]
if (JSON.parse(localStorage.getItem('initialData'))===null){
    localStorage.setItem('initialData', JSON.stringify(initialData));
}