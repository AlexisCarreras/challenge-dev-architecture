export const mockArticles = [
  {
    _id: 'ZNJ67CCHJNAEBE6IUETWOXMNFM',
    display_date: '2019-12-06T17:50:17.735Z',
    headlines: { basic: 'Arroz con Leche' },
    promo_items: {
      basic: {
        resized_urls: [
          {
            option: { media: '(min-width: 64em)' },
            resizedUrl: 'http://demo.com/image1.jpg',
          },
          {
            option: { media: '(min-width: 48em)' },
            resizedUrl: 'http://demo.com/image2.jpg',
          },
        ],
        subtitle: 'Gentileza: Malcriado-Entre fuegos y vinos',
        type: 'image',
        url: 'http://demo.com/main_image.jpg',
      },
    },
    subtype: '7',
    taxonomy: {
      tags: [{ slug: 'leche-tid47244', text: 'Leche' }],
    },
    website_url: '/recetas/postres/arroz-con-leche-nid29102019-6/',
  },
  {
    _id: 'ABC123',
    display_date: '2020-01-01T12:00:00.000Z',
    headlines: { basic: 'Flan Casero' },
    promo_items: {
      basic: {
        resized_urls: [
          {
            option: { media: '(min-width: 64em)' },
            resizedUrl: 'http://demo.com/flan.jpg',
          },
        ],
        subtitle: 'Foto de Flan',
        type: 'image',
        url: 'http://demo.com/main_flan.jpg',
      },
    },
    subtype: '8',
    taxonomy: {
      tags: [{ slug: 'flan-tid12345', text: 'Flan' }],
    },
    website_url: '/recetas/postres/flan-casero-nid01012020-1/',
  },
];
