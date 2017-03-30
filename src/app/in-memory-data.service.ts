import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let users = [
      {user_id: 1, location: 'nyc, new york, usa', age: 'NULL'},
      {user_id: 2, location: 'stockton, california, usa',age: 18},
      {user_id: 3, location: 'moscow, yukon territory, russia',age: 'NULL'},
      {user_id: 4, location: 'porto, v.n.gaia, portugal',age: 17},
      {user_id: 5, location: 'farnborough, hants, united kingdom',age: 'NULL'},
      {user_id: 6, location: 'santa monica, california, usa',age: 61}
    ];

    let books = [
      {id: 1, isbn : '1231231', book_title : 'The Way Things Work: An Illustrated Encyclopedia of Technology', book_author : 'Simon &amp; Schuster', year_of_publication: 1967, publisher : 'asdhad', image_url_s : 'http://images.amazon.com/images/P/000104687X.01.LZZZZZZZ.jpg', image_url_m : 'http://images.amazon.com/images/P/000104687X.01.LZZZZZZZ.jpg', image_url_l : 'http://images.amazon.com/images/P/000104687X.01.LZZZZZZZ.jpg'},
      {id: 2, isbn : '12311', book_title : 'The Way Things Work: An Illustrated Encyclopedia of Technology', book_author : 'Simon &amp; Schuster', year_of_publication: 1900, publisher : 'asdhad', image_url_s : 'http://images.amazon.com/images/P/000104687X.01.LZZZZZZZ.jpg', image_url_m : 'http://images.amazon.com/images/P/000104687X.01.LZZZZZZZ.jpg', image_url_l : 'http://images.amazon.com/images/P/000104687X.01.LZZZZZZZ.jpg'},
      {id: 3, isbn : '1231', book_title : 'The Way Things Work: An Illustrated Encyclopedia of Technology', book_author : 'Simon &amp; Schuster', year_of_publication: 1967, publisher : 'asdhad', image_url_s : 'http://images.amazon.com/images/P/000104687X.01.LZZZZZZZ.jpg', image_url_m : 'http://images.amazon.com/images/P/000104687X.01.LZZZZZZZ.jpg', image_url_l : 'http://images.amazon.com/images/P/000104687X.01.LZZZZZZZ.jpg'}
    ];

    let ratings = [
      {user_id: 1, isbn: '131223', book_rating: 8}
    ];

    let recomendations = [
      {UserID: 1, ISBN: '131223', score: 0.02777, rank: 1},
      {UserID: 1, ISBN: '12311', score: 0.02777, rank: 1},
      {UserID: 1, ISBN: '1231', score: 0.02777, rank: 1}
    ];

    let models = [
      { id: 1,
        precision: [0.00536343860176, 0.00411634536044, 0.00327557322531, 0.00280361563274, 0.00246043057535, 0.00222226389618, 0.00199052691364, 0.00182844497787, 0.00170029755207, 0.00159215362688],
        recall: [0.00139171248069, 0.00198643797587, 0.00240509428392, 0.00273204802253, 0.00290278651834, 0.00302665020549, 0.00312348261]
      },
      { id: 2,
        precision: [0.00536343860176, 0.00411634536044, 0.00327557322531, 0.00280361563274, 0.00246043057535, 0.00222226389618, 0.00199052691364, 0.00182844497787, 0.00170029755207, 0.00159215362688],
        recall: [0.00139171248069, 0.00198643797587, 0.00240509428392, 0.00273204802253, 0.00290278651834, 0.00302665020549, 0.00312348261]
      },
      { id: 3,
        precision: [0.00536343860176, 0.00411634536044, 0.00327557322531, 0.00280361563274, 0.00246043057535, 0.00222226389618, 0.00199052691364, 0.00182844497787, 0.00170029755207, 0.00159215362688],
        recall: [0.00139171248069, 0.00198643797587, 0.00240509428392, 0.00273204802253, 0.00290278651834, 0.00302665020549, 0.00312348261]
      },
      { id: 4,
        precision: [0.00536343860176, 0.00411634536044, 0.00327557322531, 0.00280361563274, 0.00246043057535, 0.00222226389618, 0.00199052691364, 0.00182844497787, 0.00170029755207, 0.00159215362688],
        recall: [0.00139171248069, 0.00198643797587, 0.00240509428392, 0.00273204802253, 0.00290278651834, 0.00302665020549, 0.00312348261]
      },
      { id: 5,
        precision: [0.00536343860176, 0.00411634536044, 0.00327557322531, 0.00280361563274, 0.00246043057535, 0.00222226389618, 0.00199052691364, 0.00182844497787, 0.00170029755207, 0.00159215362688],
        recall: [0.00139171248069, 0.00198643797587, 0.00240509428392, 0.00273204802253, 0.00290278651834, 0.00302665020549, 0.00312348261]
      },
      { id: 6,
        precision: [0.00536343860176, 0.00411634536044, 0.00327557322531, 0.00280361563274, 0.00246043057535, 0.00222226389618, 0.00199052691364, 0.00182844497787, 0.00170029755207, 0.00159215362688],
        recall: [0.00139171248069, 0.00198643797587, 0.00240509428392, 0.00273204802253, 0.00290278651834, 0.00302665020549, 0.00312348261]
      }
    ];
    return {users, books, ratings, recomendations, models};
  }
}