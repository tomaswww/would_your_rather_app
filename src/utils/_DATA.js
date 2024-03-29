// The only thing you need to edit in the ` _DATA.js` file is the value of `avatarURL`. Each user should have an avatar, so you’ll need to add the path to each user’s avatar.
export let users = {
  raphael: {
    id: 'raphael',
    name: 'Raphael Ninja',
    avatarURL: 'https://www.vectorkhazana.com/assets/images/products/Ninja-Turtles-Face.jpg',
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionOne',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  leonardo: {
    id: 'leonardo',
    name: 'Leonardo Ninja',
    avatarURL: 'https://www.vectorkhazana.com/assets/images/products/Ninja-Turtles-Face-2.jpg',
    answers: {
      "vthrdm985a262al8qx3do": 'optionOne',
      "xj352vofupe1dqz9emx13r": 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  donatello: {
    id: 'donatello',
    name: 'Donatello Ninja',
    avatarURL: 'https://www.vectorkhazana.com/assets/images/products/Ninja-Turtles-Face-3.jpg',
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionOne'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  },
  michelangelo: {
    id: 'michelangelo',
    name: 'Michelangelo Ninja',
    avatarURL: 'https://cf3.s3.souqcdn.com/item/2017/08/10/23/76/04/63/item_L_23760463_34310998.jpg',
    answers: {},
    questions: [],
  }
}

export let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'raphael',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['raphael'],
      text: 'have horrible short term memory',
    },
    optionTwo: {
      votes: [],
      text: 'have horrible long term memory'
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'donatello',
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'become a superhero',
    },
    optionTwo: {
      votes: ['johndoe', 'raphael'],
      text: 'become a supervillian'
    }
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'raphael',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'be telekinetic',
    },
    optionTwo: {
      votes: ['raphael'],
      text: 'be telepathic'
    }
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'leonardo',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'be a front-end developer',
    },
    optionTwo: {
      votes: ['raphael'],
      text: 'be a back-end developer'
    }
  },
  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    author: 'leonardo',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['leonardo'],
      text: 'find $50 yourself',
    },
    optionTwo: {
      votes: ['donatello'],
      text: 'have your best friend find $500'
    }
  },
  "xj352vofupe1dqz9emx13r": {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'donatello',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['donatello'],
      text: 'write JavaScript',
    },
    optionTwo: {
      votes: ['leonardo'],
      text: 'write Swift'
    }
  },
}
