import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { setSelectedCountry, countriesReducer, fetchCountryData } from '../redux/countries/countriesSlice';

const mockStore = configureMockStore([thunk]);

describe('countries reducer', () => {
  it('should handle setSelectedCountry', () => {
    const initialState = {
      countries: [],
      selectedCountry: null,
      loading: 'idle',
      error: null,
    };

    const newState = countriesReducer(initialState, setSelectedCountry({
      name: {
        common: 'Ecuador',
        official: 'Republic of Ecuador',
        nativeName: {
          spa: {
            official: 'República del Ecuador',
            common: 'Ecuador',
          },
        },
      },
      tld: [
        '.ec',
      ],
      cca2: 'EC',
      ccn3: '218',
      cca3: 'ECU',
      cioc: 'ECU',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        USD: {
          name: 'United States dollar',
          symbol: '$',
        },
      },
      idd: {
        root: '+5',
        suffixes: [
          '93',
        ],
      },
      capital: [
        'Quito',
      ],
      altSpellings: [
        'EC',
        'Republic of Ecuador',
        'República del Ecuador',
      ],
      region: 'Americas',
      subregion: 'South America',
      languages: {
        spa: 'Spanish',
      },
      translations: {
        ara: {
          official: 'جمهورية الإكوادور',
          common: 'الإكوادور',
        },
        bre: {
          official: 'Republik Ecuador',
          common: 'Ecuador',
        },
        ces: {
          official: 'Ekvádorská republika',
          common: 'Ekvádor',
        },
        cym: {
          official: 'Gweriniaeth Ecwador',
          common: 'Ecwador',
        },
        deu: {
          official: 'Republik Ecuador',
          common: 'Ecuador',
        },
        est: {
          official: 'Ecuadori Vabariik',
          common: 'Ecuador',
        },
        fin: {
          official: 'Ecuadorin tasavalta',
          common: 'Ecuador',
        },
        fra: {
          official: "République de l'Équateur",
          common: 'Équateur',
        },
        hrv: {
          official: 'Republika Ekvador',
          common: 'Ekvador',
        },
        hun: {
          official: 'Ecuadori Köztársaság',
          common: 'Ecuador',
        },
        ita: {
          official: "Repubblica dell'Ecuador",
          common: 'Ecuador',
        },
        jpn: {
          official: 'エクアドル共和国',
          common: 'エクアドル',
        },
        kor: {
          official: '에콰도르 공화국',
          common: '에콰도르',
        },
        nld: {
          official: 'Republiek Ecuador',
          common: 'Ecuador',
        },
        per: {
          official: 'جمهوری اکوادور',
          common: 'اکوادور',
        },
        pol: {
          official: 'Ekwador',
          common: 'Ekwador',
        },
        por: {
          official: 'República do Equador',
          common: 'Equador',
        },
        rus: {
          official: 'Республика Эквадор',
          common: 'Эквадор',
        },
        slk: {
          official: 'Ekvádorská republika',
          common: 'Ekvádor',
        },
        spa: {
          official: 'República del Ecuador',
          common: 'Ecuador',
        },
        swe: {
          official: 'Republiken Ecuador',
          common: 'Ecuador',
        },
        urd: {
          official: 'جمہوریہ ایکوڈور',
          common: 'ایکواڈور',
        },
        zho: {
          official: '厄瓜多尔共和国',
          common: '厄瓜多尔',
        },
      },
      latlng: [
        -2,
        -77.5,
      ],
      landlocked: false,
      borders: [
        'COL',
        'PER',
      ],
      area: 276841,
      demonyms: {
        eng: {
          f: 'Ecuadorean',
          m: 'Ecuadorean',
        },
        fra: {
          f: 'Équatorienne',
          m: 'Équatorien',
        },
      },
      flag: '🇪🇨',
      maps: {
        googleMaps: 'https://goo.gl/maps/TbX8hUW4gcbRPZiK7',
        openStreetMaps: 'https://www.openstreetmap.org/relation/108089',
      },
      population: 17643060,
      gini: {
        2019: 45.7,
      },
      fifa: 'ECU',
      car: {
        signs: [
          'EC',
        ],
        side: 'right',
      },
      timezones: [
        'UTC-06:00',
        'UTC-05:00',
      ],
      continents: [
        'South America',
      ],
      flags: [
        'https://flagcdn.com/ec.svg',
        'https://flagcdn.com/w320/ec.png',
      ],
    }));

    expect(newState.selectedCountry).toEqual({
      name: {
        common: 'Ecuador',
        official: 'Republic of Ecuador',
        nativeName: {
          spa: {
            official: 'República del Ecuador',
            common: 'Ecuador',
          },
        },
      },
      tld: [
        '.ec',
      ],
      cca2: 'EC',
      ccn3: '218',
      cca3: 'ECU',
      cioc: 'ECU',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        USD: {
          name: 'United States dollar',
          symbol: '$',
        },
      },
      idd: {
        root: '+5',
        suffixes: [
          '93',
        ],
      },
      capital: [
        'Quito',
      ],
      altSpellings: [
        'EC',
        'Republic of Ecuador',
        'República del Ecuador',
      ],
      region: 'Americas',
      subregion: 'South America',
      languages: {
        spa: 'Spanish',
      },
      translations: {
        ara: {
          official: 'جمهورية الإكوادور',
          common: 'الإكوادور',
        },
        bre: {
          official: 'Republik Ecuador',
          common: 'Ecuador',
        },
        ces: {
          official: 'Ekvádorská republika',
          common: 'Ekvádor',
        },
        cym: {
          official: 'Gweriniaeth Ecwador',
          common: 'Ecwador',
        },
        deu: {
          official: 'Republik Ecuador',
          common: 'Ecuador',
        },
        est: {
          official: 'Ecuadori Vabariik',
          common: 'Ecuador',
        },
        fin: {
          official: 'Ecuadorin tasavalta',
          common: 'Ecuador',
        },
        fra: {
          official: "République de l'Équateur",
          common: 'Équateur',
        },
        hrv: {
          official: 'Republika Ekvador',
          common: 'Ekvador',
        },
        hun: {
          official: 'Ecuadori Köztársaság',
          common: 'Ecuador',
        },
        ita: {
          official: "Repubblica dell'Ecuador",
          common: 'Ecuador',
        },
        jpn: {
          official: 'エクアドル共和国',
          common: 'エクアドル',
        },
        kor: {
          official: '에콰도르 공화국',
          common: '에콰도르',
        },
        nld: {
          official: 'Republiek Ecuador',
          common: 'Ecuador',
        },
        per: {
          official: 'جمهوری اکوادور',
          common: 'اکوادور',
        },
        pol: {
          official: 'Ekwador',
          common: 'Ekwador',
        },
        por: {
          official: 'República do Equador',
          common: 'Equador',
        },
        rus: {
          official: 'Республика Эквадор',
          common: 'Эквадор',
        },
        slk: {
          official: 'Ekvádorská republika',
          common: 'Ekvádor',
        },
        spa: {
          official: 'República del Ecuador',
          common: 'Ecuador',
        },
        swe: {
          official: 'Republiken Ecuador',
          common: 'Ecuador',
        },
        urd: {
          official: 'جمہوریہ ایکوڈور',
          common: 'ایکواڈور',
        },
        zho: {
          official: '厄瓜多尔共和国',
          common: '厄瓜多尔',
        },
      },
      latlng: [
        -2,
        -77.5,
      ],
      landlocked: false,
      borders: [
        'COL',
        'PER',
      ],
      area: 276841,
      demonyms: {
        eng: {
          f: 'Ecuadorean',
          m: 'Ecuadorean',
        },
        fra: {
          f: 'Équatorienne',
          m: 'Équatorien',
        },
      },
      flag: '🇪🇨',
      maps: {
        googleMaps: 'https://goo.gl/maps/TbX8hUW4gcbRPZiK7',
        openStreetMaps: 'https://www.openstreetmap.org/relation/108089',
      },
      population: 17643060,
      gini: {
        2019: 45.7,
      },
      fifa: 'ECU',
      car: {
        signs: [
          'EC',
        ],
        side: 'right',
      },
      timezones: [
        'UTC-06:00',
        'UTC-05:00',
      ],
      continents: [
        'South America',
      ],
      flags: [
        'https://flagcdn.com/ec.svg',
        'https://flagcdn.com/w320/ec.png',
      ],
    });
  });

  it('should not modify other properties when handling setSelectedCountry', () => {
    const initialState = {
      countries: [],
      selectedCountry: null,
      loading: 'idle',
      error: null,
    };

    const newState = countriesReducer(initialState, setSelectedCountry({
      name: {
        common: 'Ecuador',
        official: 'Republic of Ecuador',
        nativeName: {
          spa: {
            official: 'República del Ecuador',
            common: 'Ecuador',
          },
        },
      },
      tld: [
        '.ec',
      ],
      cca2: 'EC',
      ccn3: '218',
      cca3: 'ECU',
      cioc: 'ECU',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: {
        USD: {
          name: 'United States dollar',
          symbol: '$',
        },
      },
      idd: {
        root: '+5',
        suffixes: [
          '93',
        ],
      },
      capital: [
        'Quito',
      ],
      altSpellings: [
        'EC',
        'Republic of Ecuador',
        'República del Ecuador',
      ],
      region: 'Americas',
      subregion: 'South America',
      languages: {
        spa: 'Spanish',
      },
      translations: {
        ara: {
          official: 'جمهورية الإكوادور',
          common: 'الإكوادور',
        },
        bre: {
          official: 'Republik Ecuador',
          common: 'Ecuador',
        },
        ces: {
          official: 'Ekvádorská republika',
          common: 'Ekvádor',
        },
        cym: {
          official: 'Gweriniaeth Ecwador',
          common: 'Ecwador',
        },
        deu: {
          official: 'Republik Ecuador',
          common: 'Ecuador',
        },
        est: {
          official: 'Ecuadori Vabariik',
          common: 'Ecuador',
        },
        fin: {
          official: 'Ecuadorin tasavalta',
          common: 'Ecuador',
        },
        fra: {
          official: "République de l'Équateur",
          common: 'Équateur',
        },
        hrv: {
          official: 'Republika Ekvador',
          common: 'Ekvador',
        },
        hun: {
          official: 'Ecuadori Köztársaság',
          common: 'Ecuador',
        },
        ita: {
          official: "Repubblica dell'Ecuador",
          common: 'Ecuador',
        },
        jpn: {
          official: 'エクアドル共和国',
          common: 'エクアドル',
        },
        kor: {
          official: '에콰도르 공화국',
          common: '에콰도르',
        },
        nld: {
          official: 'Republiek Ecuador',
          common: 'Ecuador',
        },
        per: {
          official: 'جمهوری اکوادور',
          common: 'اکوادور',
        },
        pol: {
          official: 'Ekwador',
          common: 'Ekwador',
        },
        por: {
          official: 'República do Equador',
          common: 'Equador',
        },
        rus: {
          official: 'Республика Эквадор',
          common: 'Эквадор',
        },
        slk: {
          official: 'Ekvádorská republika',
          common: 'Ekvádor',
        },
        spa: {
          official: 'República del Ecuador',
          common: 'Ecuador',
        },
        swe: {
          official: 'Republiken Ecuador',
          common: 'Ecuador',
        },
        urd: {
          official: 'جمہوریہ ایکوڈور',
          common: 'ایکواڈور',
        },
        zho: {
          official: '厄瓜多尔共和国',
          common: '厄瓜多尔',
        },
      },
      latlng: [
        -2,
        -77.5,
      ],
      landlocked: false,
      borders: [
        'COL',
        'PER',
      ],
      area: 276841,
      demonyms: {
        eng: {
          f: 'Ecuadorean',
          m: 'Ecuadorean',
        },
        fra: {
          f: 'Équatorienne',
          m: 'Équatorien',
        },
      },
      flag: '🇪🇨',
      maps: {
        googleMaps: 'https://goo.gl/maps/TbX8hUW4gcbRPZiK7',
        openStreetMaps: 'https://www.openstreetmap.org/relation/108089',
      },
      population: 17643060,
      gini: {
        2019: 45.7,
      },
      fifa: 'ECU',
      car: {
        signs: [
          'EC',
        ],
        side: 'right',
      },
      timezones: [
        'UTC-06:00',
        'UTC-05:00',
      ],
      continents: [
        'South America',
      ],
      flags: [
        'https://flagcdn.com/ec.svg',
        'https://flagcdn.com/w320/ec.png',
      ],
    }));

    expect(newState.countries).toEqual([]);
    expect(newState.loading).toEqual('idle');
    expect(newState.error).toEqual(null);
  });
});

describe('fetchCountryData', () => {
  jest.setTimeout(10000);
  it('should dispatch the correct actions on successful API request', async () => {
    // Mock the response data
    const mockResponse = {
      countries: [
        {
          name: {
            common: 'Ecuador',
            official: 'Republic of Ecuador',
            nativeName: {
              spa: {
                official: 'República del Ecuador',
                common: 'Ecuador',
              },
            },
          },
          tld: [
            '.ec',
          ],
          cca2: 'EC',
          ccn3: '218',
          cca3: 'ECU',
          cioc: 'ECU',
          independent: true,
          status: 'officially-assigned',
          unMember: true,
          currencies: {
            USD: {
              name: 'United States dollar',
              symbol: '$',
            },
          },
          idd: {
            root: '+5',
            suffixes: [
              '93',
            ],
          },
          capital: [
            'Quito',
          ],
          altSpellings: [
            'EC',
            'Republic of Ecuador',
            'República del Ecuador',
          ],
          region: 'Americas',
          subregion: 'South America',
          languages: {
            spa: 'Spanish',
          },
          translations: {
            ara: {
              official: 'جمهورية الإكوادور',
              common: 'الإكوادور',
            },
            bre: {
              official: 'Republik Ecuador',
              common: 'Ecuador',
            },
            ces: {
              official: 'Ekvádorská republika',
              common: 'Ekvádor',
            },
            cym: {
              official: 'Gweriniaeth Ecwador',
              common: 'Ecwador',
            },
            deu: {
              official: 'Republik Ecuador',
              common: 'Ecuador',
            },
            est: {
              official: 'Ecuadori Vabariik',
              common: 'Ecuador',
            },
            fin: {
              official: 'Ecuadorin tasavalta',
              common: 'Ecuador',
            },
            fra: {
              official: "République de l'Équateur",
              common: 'Équateur',
            },
            hrv: {
              official: 'Republika Ekvador',
              common: 'Ekvador',
            },
            hun: {
              official: 'Ecuadori Köztársaság',
              common: 'Ecuador',
            },
            ita: {
              official: "Repubblica dell'Ecuador",
              common: 'Ecuador',
            },
            jpn: {
              official: 'エクアドル共和国',
              common: 'エクアドル',
            },
            kor: {
              official: '에콰도르 공화국',
              common: '에콰도르',
            },
            nld: {
              official: 'Republiek Ecuador',
              common: 'Ecuador',
            },
            per: {
              official: 'جمهوری اکوادور',
              common: 'اکوادور',
            },
            pol: {
              official: 'Ekwador',
              common: 'Ekwador',
            },
            por: {
              official: 'República do Equador',
              common: 'Equador',
            },
            rus: {
              official: 'Республика Эквадор',
              common: 'Эквадор',
            },
            slk: {
              official: 'Ekvádorská republika',
              common: 'Ekvádor',
            },
            spa: {
              official: 'República del Ecuador',
              common: 'Ecuador',
            },
            swe: {
              official: 'Republiken Ecuador',
              common: 'Ecuador',
            },
            urd: {
              official: 'جمہوریہ ایکوڈور',
              common: 'ایکواڈور',
            },
            zho: {
              official: '厄瓜多尔共和国',
              common: '厄瓜多尔',
            },
          },
          latlng: [
            -2,
            -77.5,
          ],
          landlocked: false,
          borders: [
            'COL',
            'PER',
          ],
          area: 276841,
          demonyms: {
            eng: {
              f: 'Ecuadorean',
              m: 'Ecuadorean',
            },
            fra: {
              f: 'Équatorienne',
              m: 'Équatorien',
            },
          },
          flag: '🇪🇨',
          maps: {
            googleMaps: 'https://goo.gl/maps/TbX8hUW4gcbRPZiK7',
            openStreetMaps: 'https://www.openstreetmap.org/relation/108089',
          },
          population: 17643060,
          gini: {
            2019: 45.7,
          },
          fifa: 'ECU',
          car: {
            signs: [
              'EC',
            ],
            side: 'right',
          },
          timezones: [
            'UTC-06:00',
            'UTC-05:00',
          ],
          continents: [
            'South America',
          ],
          flags: [
            'https://flagcdn.com/ec.svg',
            'https://flagcdn.com/w320/ec.png',
          ],
        },
        {
          name: {
            common: 'France',
            official: 'French Republic',
            nativeName: {
              fra: {
                official: 'République française',
                common: 'France',
              },
            },
          },
          tld: [
            '.fr',
          ],
          cca2: 'FR',
          ccn3: '250',
          cca3: 'FRA',
          cioc: 'FRA',
          independent: true,
          status: 'officially-assigned',
          unMember: true,
          currencies: {
            EUR: {
              name: 'Euro',
              symbol: '€',
            },
          },
          idd: {
            root: '+3',
            suffixes: [
              '3',
            ],
          },
          capital: [
            'Paris',
          ],
          altSpellings: [
            'FR',
            'French Republic',
            'République française',
          ],
          region: 'Europe',
          subregion: 'Western Europe',
          languages: {
            fra: 'French',
          },
          translations: {
            ara: {
              official: 'الجمهورية الفرنسية',
              common: 'فرنسا',
            },
            bre: {
              official: 'Republik Frañs',
              common: 'Frañs',
            },
            ces: {
              official: 'Francouzská republika',
              common: 'Francie',
            },
            cym: {
              official: 'French Republic',
              common: 'France',
            },
            deu: {
              official: 'Französische Republik',
              common: 'Frankreich',
            },
            est: {
              official: 'Prantsuse Vabariik',
              common: 'Prantsusmaa',
            },
            fin: {
              official: 'Ranskan tasavalta',
              common: 'Ranska',
            },
            fra: {
              official: 'République française',
              common: 'France',
            },
            hrv: {
              official: 'Francuska Republika',
              common: 'Francuska',
            },
            hun: {
              official: 'Francia Köztársaság',
              common: 'Franciaország',
            },
            ita: {
              official: 'Repubblica francese',
              common: 'Francia',
            },
            jpn: {
              official: 'フランス共和国',
              common: 'フランス',
            },
            kor: {
              official: '프랑스 공화국',
              common: '프랑스',
            },
            nld: {
              official: 'Franse Republiek',
              common: 'Frankrijk',
            },
            per: {
              official: 'جمهوری فرانسه',
              common: 'فرانسه',
            },
            pol: {
              official: 'Republika Francuska',
              common: 'Francja',
            },
            por: {
              official: 'República Francesa',
              common: 'França',
            },
            rus: {
              official: 'Французская Республика',
              common: 'Франция',
            },
            slk: {
              official: 'Francúzska republika',
              common: 'Francúzsko',
            },
            spa: {
              official: 'República francés',
              common: 'Francia',
            },
            swe: {
              official: 'Republiken Frankrike',
              common: 'Frankrike',
            },
            urd: {
              official: 'جمہوریہ فرانس',
              common: 'فرانس',
            },
            zho: {
              official: '法兰西共和国',
              common: '法国',
            },
          },
          latlng: [
            46,
            2,
          ],
          landlocked: false,
          borders: [
            'AND',
            'BEL',
            'DEU',
            'ITA',
            'LUX',
            'MCO',
            'ESP',
            'CHE',
          ],
          area: 551695,
          demonyms: {
            eng: {
              f: 'French',
              m: 'French',
            },
            fra: {
              f: 'Française',
              m: 'Français',
            },
          },
          flag: '🇫🇷',
          maps: {
            googleMaps: 'https://goo.gl/maps/g7QxxSFsWyTPKuzd7',
            openStreetMaps: 'https://www.openstreetmap.org/relation/1403916',
          },
          population: 67391582,
          gini: {
            2018: 32.4,
          },
          fifa: 'FRA',
          car: {
            signs: [
              'F',
            ],
            side: 'right',
          },
          timezones: [
            'UTC-10:00',
            'UTC-09:30',
            'UTC-09:00',
            'UTC-08:00',
            'UTC-04:00',
            'UTC-03:00',
            'UTC+01:00',
            'UTC+02:00',
            'UTC+03:00',
            'UTC+04:00',
            'UTC+05:00',
            'UTC+10:00',
            'UTC+11:00',
            'UTC+12:00',
          ],
          continents: [
            'Europe',
          ],
          flags: [
            'https://flagcdn.com/fr.svg',
            'https://flagcdn.com/w320/fr.png',
          ],
        },
      ],
    };
    const mockFetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(mockResponse),
    }));

    const store = mockStore();
    await store.dispatch(fetchCountryData(mockFetch));

    const actions = store.getActions();
    expect(actions[0].type).toEqual('countries/fetchCountryData/pending');
    expect(actions[1].type).toEqual('countries/fetchCountryData/fulfilled');
    expect(actions[1].payload).toHaveLength(250);
  });
});
