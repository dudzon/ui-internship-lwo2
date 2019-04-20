const contactList = [
  {
    firstName: 'Kristian',
    lastName: 'Vos',
  },
  {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    likes: ['Intriguing Cases', 'Violin'],
  },
  {
    firstName: 'Harry',
    lastName: 'Kane',
    likes: ['Tottenham', 'Scoring goals against Chelsea'],
  },
  {
    firstName: 'Akira',
    lastName: 'Kurosawa',
    likes: ['Shooting movies', 'Playing Shogun Total Empire', 'Cutting heads'],
  },
];


export const lookupProfile = (firstname, prop) =>{
  for (let i = 0; i < contactList.length; i++) {
    if (contactList[i]['firstName'] === firstname) {
      if (contactList[i].hasOwnProperty(prop)) {
        return contactList[i][prop];
      }
      return 'No such property';
    }
  }
  return 'No such contact';
};
