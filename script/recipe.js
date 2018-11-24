
var sampleRecipe = {
    'name' : 'sampleRecipe',
    'total':50,
    'ingredients':
    {
        'flour':
        {
            'bread-flour': 100
        },
        'salt':1.9,
        'fresh-yeast':0.55,
        'water':65
    }
}

var nestedSampleRecipe = {
    'name' : 'Nested recipe',
    'total':50,
    'ingredients':
    {
        'flour':
        {
            ingredients: 
            {
                'bread-flour': 100
            }
        },
        'salt':1.9,
        'fresh-yeast':0.55,
        'nested':
        {
            'total':50,
            'ingredients':
            {
                'bread-flour':100,
                'salt':1.9,
                'fresh-yeast':0.55,
                'water':65
            }
        },
        'water':65
    }
}