import React, { useState, useEffect } from 'react'
import * as api from "../yelp-api/api"

const tempRes = {
  "businesses": [
      {
          "id": "Dg8TuN5gp3k1QUozOkXdpg",
          "alias": "berber-barbershop-san-francisco",
          "name": "Berber Barbershop",
          "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/glXm0M76LcMC2Okil9S1SA/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/berber-barbershop-san-francisco?adjust_creative=AUYvm1K1DCEG2ubbgNLPRg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=AUYvm1K1DCEG2ubbgNLPRg",
          "review_count": 233,
          "categories": [
              {
                  "alias": "barbers",
                  "title": "Barbers"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 37.7900128,
              "longitude": -122.4118187
          },
          "transactions": [],
          "price": "$$",
          "location": {
              "address1": "878 Bush St",
              "address2": null,
              "address3": "",
              "city": "San Francisco",
              "zip_code": "94108",
              "country": "US",
              "state": "CA",
              "display_address": [
                  "878 Bush St",
                  "San Francisco, CA 94108"
              ]
          },
          "phone": "+14154005206",
          "display_phone": "(415) 400-5206",
          "distance": 1097.6936205319732
      },
      {
          "id": "Q5BHbsIVu7dknfS6m-7-QA",
          "alias": "locals-barbershop-san-francisco",
          "name": "Locals Barbershop",
          "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/8Wdlnu_Nnqs51klS3krjdQ/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/locals-barbershop-san-francisco?adjust_creative=AUYvm1K1DCEG2ubbgNLPRg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=AUYvm1K1DCEG2ubbgNLPRg",
          "review_count": 142,
          "categories": [
              {
                  "alias": "barbers",
                  "title": "Barbers"
              }
          ],
          "rating": 5,
          "coordinates": {
              "latitude": 37.7871451,
              "longitude": -122.4198573
          },
          "transactions": [],
          "price": "$$",
          "location": {
              "address1": "1118 Polk St",
              "address2": null,
              "address3": "",
              "city": "San Francisco",
              "zip_code": "94109",
              "country": "US",
              "state": "CA",
              "display_address": [
                  "1118 Polk St",
                  "San Francisco, CA 94109"
              ]
          },
          "phone": "+14155253194",
          "display_phone": "(415) 525-3194",
          "distance": 1747.696949411364
      },
      {
          "id": "ScXPC0pQcRJHBpteMyOK_Q",
          "alias": "kyles-barbershop-san-francisco",
          "name": "Kyle's BarberShop",
          "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/_lfveqg20yfrYBJB1bfT4w/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/kyles-barbershop-san-francisco?adjust_creative=AUYvm1K1DCEG2ubbgNLPRg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=AUYvm1K1DCEG2ubbgNLPRg",
          "review_count": 62,
          "categories": [
              {
                  "alias": "barbers",
                  "title": "Barbers"
              }
          ],
          "rating": 5,
          "coordinates": {
              "latitude": 37.7884699,
              "longitude": -122.40297
          },
          "transactions": [],
          "price": "$$",
          "location": {
              "address1": "660 Market St",
              "address2": "Ste 223",
              "address3": "",
              "city": "San Francisco",
              "zip_code": "94104",
              "country": "US",
              "state": "CA",
              "display_address": [
                  "660 Market St",
                  "Ste 223",
                  "San Francisco, CA 94104"
              ]
          },
          "phone": "+17073632719",
          "display_phone": "(707) 363-2719",
          "distance": 306.4358620891618
      },
      {
          "id": "9EMlSQMLvofzGf3JeKRPSQ",
          "alias": "the-district-barbers-soma-district-san-francisco-3",
          "name": "The District Barbers - Soma District",
          "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/7WO31MW-HzSNj8b8evfJ8w/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/the-district-barbers-soma-district-san-francisco-3?adjust_creative=AUYvm1K1DCEG2ubbgNLPRg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=AUYvm1K1DCEG2ubbgNLPRg",
          "review_count": 134,
          "categories": [
              {
                  "alias": "barbers",
                  "title": "Barbers"
              }
          ],
          "rating": 4,
          "coordinates": {
              "latitude": 37.7837816209106,
              "longitude": -122.398711026459
          },
          "transactions": [],
          "price": "$$",
          "location": {
              "address1": "333 3rd St",
              "address2": "Ste 201",
              "address3": "",
              "city": "San Francisco",
              "zip_code": "94107",
              "country": "US",
              "state": "CA",
              "display_address": [
                  "333 3rd St",
                  "Ste 201",
                  "San Francisco, CA 94107"
              ]
          },
          "phone": "+14158007325",
          "display_phone": "(415) 800-7325",
          "distance": 362.11773970280035
      },
      {
          "id": "xWcSyWz39HC0DT7K8o53pw",
          "alias": "peoples-barber-and-shop-san-francisco-5",
          "name": "People's Barber & Shop",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/QJGhuMzMXGGrX7GZzxAEFw/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/peoples-barber-and-shop-san-francisco-5?adjust_creative=AUYvm1K1DCEG2ubbgNLPRg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=AUYvm1K1DCEG2ubbgNLPRg",
          "review_count": 112,
          "categories": [
              {
                  "alias": "barbers",
                  "title": "Barbers"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 37.7799883973854,
              "longitude": -122.391269528185
          },
          "transactions": [],
          "location": {
              "address1": "133 Townsend St",
              "address2": null,
              "address3": "",
              "city": "San Francisco",
              "zip_code": "94107",
              "country": "US",
              "state": "CA",
              "display_address": [
                  "133 Townsend St",
                  "San Francisco, CA 94107"
              ]
          },
          "phone": "+14156587799",
          "display_phone": "(415) 658-7799",
          "distance": 1093.5180324303876
      },
      {
          "id": "rMQ_r67oOv07VtELq-PBTA",
          "alias": "blades-co-barber-shop-san-francisco-3",
          "name": "Blades Co Barber Shop",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/BKaPHMFFmeQRHmOTepdbaA/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/blades-co-barber-shop-san-francisco-3?adjust_creative=AUYvm1K1DCEG2ubbgNLPRg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=AUYvm1K1DCEG2ubbgNLPRg",
          "review_count": 246,
          "categories": [
              {
                  "alias": "barbers",
                  "title": "Barbers"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 37.7955329,
              "longitude": -122.4036438
          },
          "transactions": [],
          "price": "$$",
          "location": {
              "address1": "13 Columbus Ave",
              "address2": "",
              "address3": "",
              "city": "San Francisco",
              "zip_code": "94111",
              "country": "US",
              "state": "CA",
              "display_address": [
                  "13 Columbus Ave",
                  "San Francisco, CA 94111"
              ]
          },
          "phone": "+14153063773",
          "display_phone": "(415) 306-3773",
          "distance": 1014.6034712936018
      },
      {
          "id": "XqzT99hrRLi9UOCH6UA3UQ",
          "alias": "peoples-barber-and-shop-san-francisco-3",
          "name": "Peoples Barber & Shop",
          "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/oST4N-E__OjPyQF_CS2tjQ/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/peoples-barber-and-shop-san-francisco-3?adjust_creative=AUYvm1K1DCEG2ubbgNLPRg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=AUYvm1K1DCEG2ubbgNLPRg",
          "review_count": 1053,
          "categories": [
              {
                  "alias": "barbers",
                  "title": "Barbers"
              }
          ],
          "rating": 4,
          "coordinates": {
              "latitude": 37.788578,
              "longitude": -122.420411
          },
          "transactions": [],
          "price": "$$",
          "location": {
              "address1": "1259 Polk St",
              "address2": null,
              "address3": "",
              "city": "San Francisco",
              "zip_code": "94109",
              "country": "US",
              "state": "CA",
              "display_address": [
                  "1259 Polk St",
                  "San Francisco, CA 94109"
              ]
          },
          "phone": "+14152924099",
          "display_phone": "(415) 292-4099",
          "distance": 1805.965396233236
      },
      {
          "id": "7N1PFNNXnJKKE3i8UsADKQ",
          "alias": "dapper-down-barber-lounge-san-francisco",
          "name": "Dapper Down Barber Lounge",
          "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/hnhNzk0-fOYN1EgzOJvHnw/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/dapper-down-barber-lounge-san-francisco?adjust_creative=AUYvm1K1DCEG2ubbgNLPRg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=AUYvm1K1DCEG2ubbgNLPRg",
          "review_count": 1,
          "categories": [
              {
                  "alias": "barbers",
                  "title": "Barbers"
              }
          ],
          "rating": 5,
          "coordinates": {
              "latitude": 37.78661,
              "longitude": -122.40832
          },
          "transactions": [],
          "location": {
              "address1": "207 Powell St",
              "address2": "Fl 4",
              "address3": "",
              "city": "San Francisco",
              "zip_code": "94102",
              "country": "US",
              "state": "CA",
              "display_address": [
                  "207 Powell St",
                  "Fl 4",
                  "San Francisco, CA 94102"
              ]
          },
          "phone": "+14156587441",
          "display_phone": "(415) 658-7441",
          "distance": 734.9490097811369
      },
      {
          "id": "L9GLhkfKFs7evJIRcMSk-Q",
          "alias": "the-barbershop-san-francisco-2",
          "name": "The Barbershop",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/SEjsr7_Kt9CugOqpfyyvBg/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/the-barbershop-san-francisco-2?adjust_creative=AUYvm1K1DCEG2ubbgNLPRg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=AUYvm1K1DCEG2ubbgNLPRg",
          "review_count": 192,
          "categories": [
              {
                  "alias": "barbers",
                  "title": "Barbers"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 37.7974775,
              "longitude": -122.432661
          },
          "transactions": [],
          "price": "$$$",
          "location": {
              "address1": "2030 Union St",
              "address2": "",
              "address3": null,
              "city": "San Francisco",
              "zip_code": "94123",
              "country": "US",
              "state": "CA",
              "display_address": [
                  "2030 Union St",
                  "San Francisco, CA 94123"
              ]
          },
          "phone": "+14159137562",
          "display_phone": "(415) 913-7562",
          "distance": 3104.630985023365
      },
      {
          "id": "OLeTKo-karlsbavFH0ypaA",
          "alias": "nob-hill-barbershop-san-francisco",
          "name": "Nob Hill Barbershop",
          "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/BpDREcLwTkJUnW_b9wsD7A/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/nob-hill-barbershop-san-francisco?adjust_creative=AUYvm1K1DCEG2ubbgNLPRg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=AUYvm1K1DCEG2ubbgNLPRg",
          "review_count": 89,
          "categories": [
              {
                  "alias": "barbers",
                  "title": "Barbers"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 37.79097,
              "longitude": -122.41087
          },
          "transactions": [],
          "price": "$$",
          "location": {
              "address1": "906 Pine St",
              "address2": "",
              "address3": "",
              "city": "San Francisco",
              "zip_code": "94108",
              "country": "US",
              "state": "CA",
              "display_address": [
                  "906 Pine St",
                  "San Francisco, CA 94108"
              ]
          },
          "phone": "+15103750016",
          "display_phone": "(510) 375-0016",
          "distance": 1064.235903852738
      },
      {
          "id": "R-PLvYGp4SEoZT2_21EyWg",
          "alias": "church-barber-and-apothecary-san-francisco-4",
          "name": "Church Barber & Apothecary",
          "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/hbpA475_cxhT9C2wjX5SaQ/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/church-barber-and-apothecary-san-francisco-4?adjust_creative=AUYvm1K1DCEG2ubbgNLPRg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=AUYvm1K1DCEG2ubbgNLPRg",
          "review_count": 60,
          "categories": [
              {
                  "alias": "barbers",
                  "title": "Barbers"
              }
          ],
          "rating": 5,
          "coordinates": {
              "latitude": 37.7769998,
              "longitude": -122.42454
          },
          "transactions": [],
          "price": "$$",
          "location": {
              "address1": "524 Octavia St",
              "address2": null,
              "address3": "",
              "city": "San Francisco",
              "zip_code": "94102",
              "country": "US",
              "state": "CA",
              "display_address": [
                  "524 Octavia St",
                  "San Francisco, CA 94102"
              ]
          },
          "phone": "+14158143788",
          "display_phone": "(415) 814-3788",
          "distance": 2416.604201444874
      },
      {
          "id": "wS74K964__u9lSz-PlpgHg",
          "alias": "freedom-barber-sf-san-francisco",
          "name": "Freedom Barber SF",
          "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/A4ZfvaaHfk69DzzrYi3m6g/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/freedom-barber-sf-san-francisco?adjust_creative=AUYvm1K1DCEG2ubbgNLPRg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=AUYvm1K1DCEG2ubbgNLPRg",
          "review_count": 71,
          "categories": [
              {
                  "alias": "barbers",
                  "title": "Barbers"
              }
          ],
          "rating": 5,
          "coordinates": {
              "latitude": 37.7941649,
              "longitude": -122.4028233
          },
          "transactions": [],
          "price": "$$",
          "location": {
              "address1": "520 Montgomery St",
              "address2": "Ste 107",
              "address3": "",
              "city": "San Francisco",
              "zip_code": "94111",
              "country": "US",
              "state": "CA",
              "display_address": [
                  "520 Montgomery St",
                  "Ste 107",
                  "San Francisco, CA 94111"
              ]
          },
          "phone": "+14158514965",
          "display_phone": "(415) 851-4965",
          "distance": 847.693960565644
      },
      {
          "id": "GSpw0ElIOOnbwJM-P4c9Kg",
          "alias": "fresh-blades-barbershop-san-francisco",
          "name": "Fresh Blades Barbershop",
          "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/4WhizNn84tsgmQNIFu0OYg/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/fresh-blades-barbershop-san-francisco?adjust_creative=AUYvm1K1DCEG2ubbgNLPRg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=AUYvm1K1DCEG2ubbgNLPRg",
          "review_count": 80,
          "categories": [
              {
                  "alias": "barbers",
                  "title": "Barbers"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 37.78944,
              "longitude": -122.42022
          },
          "transactions": [],
          "price": "$$",
          "location": {
              "address1": "1346 Polk St",
              "address2": null,
              "address3": null,
              "city": "San Francisco",
              "zip_code": "94109",
              "country": "US",
              "state": "CA",
              "display_address": [
                  "1346 Polk St",
                  "San Francisco, CA 94109"
              ]
          },
          "phone": "+14157570281",
          "display_phone": "(415) 757-0281",
          "distance": 1804.1057060732383
      },
      {
          "id": "u4AuBRiyRK4dTLP08rA1tQ",
          "alias": "public-barber-salon-san-francisco-3",
          "name": "Public Barber Salon",
          "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/0uo30n6XE8PKZWLW1N8TSw/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/public-barber-salon-san-francisco-3?adjust_creative=AUYvm1K1DCEG2ubbgNLPRg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=AUYvm1K1DCEG2ubbgNLPRg",
          "review_count": 481,
          "categories": [
              {
                  "alias": "barbers",
                  "title": "Barbers"
              },
              {
                  "alias": "menshair",
                  "title": "Men's Hair Salons"
              }
          ],
          "rating": 5,
          "coordinates": {
              "latitude": 37.8011397,
              "longitude": -122.407594
          },
          "transactions": [],
          "price": "$$",
          "location": {
              "address1": "1528 Grant Ave",
              "address2": "",
              "address3": "",
              "city": "San Francisco",
              "zip_code": "94133",
              "country": "US",
              "state": "CA",
              "display_address": [
                  "1528 Grant Ave",
                  "San Francisco, CA 94133"
              ]
          },
          "phone": "+14153620040",
          "display_phone": "(415) 362-0040",
          "distance": 1721.0395927508323
      },
      {
          "id": "PiRPnW20VkhIx0gdc1X75w",
          "alias": "public-barber-salon-san-francisco-4",
          "name": "Public Barber Salon",
          "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/fmRDJVlVBD265r7dj3GWxQ/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/public-barber-salon-san-francisco-4?adjust_creative=AUYvm1K1DCEG2ubbgNLPRg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=AUYvm1K1DCEG2ubbgNLPRg",
          "review_count": 955,
          "categories": [
              {
                  "alias": "barbers",
                  "title": "Barbers"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 37.786702,
              "longitude": -122.412664
          },
          "transactions": [],
          "price": "$$",
          "location": {
              "address1": "571 Geary St",
              "address2": "",
              "address3": "",
              "city": "San Francisco",
              "zip_code": "94102",
              "country": "US",
              "state": "CA",
              "display_address": [
                  "571 Geary St",
                  "San Francisco, CA 94102"
              ]
          },
          "phone": "+14154418599",
          "display_phone": "(415) 441-8599",
          "distance": 1111.9200419977303
      },
      {
          "id": "KKMZjfHm9KsePKR7G1g8cQ",
          "alias": "fellow-barber-san-francisco-2",
          "name": "Fellow Barber",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/2MwgSFpkclQ4ozCQBIu7GA/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/fellow-barber-san-francisco-2?adjust_creative=AUYvm1K1DCEG2ubbgNLPRg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=AUYvm1K1DCEG2ubbgNLPRg",
          "review_count": 200,
          "categories": [
              {
                  "alias": "barbers",
                  "title": "Barbers"
              },
              {
                  "alias": "menshair",
                  "title": "Men's Hair Salons"
              }
          ],
          "rating": 4,
          "coordinates": {
              "latitude": 37.7828720308316,
              "longitude": -122.409147284925
          },
          "transactions": [],
          "price": "$$",
          "location": {
              "address1": "973 Market St",
              "address2": "",
              "address3": "",
              "city": "San Francisco",
              "zip_code": "94103",
              "country": "US",
              "state": "CA",
              "display_address": [
                  "973 Market St",
                  "San Francisco, CA 94103"
              ]
          },
          "phone": "+14153440443",
          "display_phone": "(415) 344-0443",
          "distance": 921.3909344481594
      },
      {
          "id": "RZqE-6fqxgMk9qKrfc08IQ",
          "alias": "metropolitan-barber-shop-san-francisco",
          "name": "Metropolitan Barber Shop",
          "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/_4w6aMS5cnhLcab42-CjZQ/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/metropolitan-barber-shop-san-francisco?adjust_creative=AUYvm1K1DCEG2ubbgNLPRg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=AUYvm1K1DCEG2ubbgNLPRg",
          "review_count": 153,
          "categories": [
              {
                  "alias": "barbers",
                  "title": "Barbers"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 37.789708,
              "longitude": -122.4141497
          },
          "transactions": [],
          "price": "$$",
          "location": {
              "address1": "1018 Bush St",
              "address2": "",
              "address3": "",
              "city": "San Francisco",
              "zip_code": "94109",
              "country": "US",
              "state": "CA",
              "display_address": [
                  "1018 Bush St",
                  "San Francisco, CA 94109"
              ]
          },
          "phone": "+14155807265",
          "display_phone": "(415) 580-7265",
          "distance": 1284.8840378995617
      },
      {
          "id": "VBEHjgSo6gdFq3f0_7GfTQ",
          "alias": "brogan-and-son-san-francisco",
          "name": "Brogan and Son",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/LTY8_KLKgXc80yZ3y5qJaQ/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/brogan-and-son-san-francisco?adjust_creative=AUYvm1K1DCEG2ubbgNLPRg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=AUYvm1K1DCEG2ubbgNLPRg",
          "review_count": 243,
          "categories": [
              {
                  "alias": "barbers",
                  "title": "Barbers"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 37.7951308,
              "longitude": -122.4004914
          },
          "transactions": [],
          "price": "$$",
          "location": {
              "address1": "425C Battery St",
              "address2": "",
              "address3": "",
              "city": "San Francisco",
              "zip_code": "94111",
              "country": "US",
              "state": "CA",
              "display_address": [
                  "425C Battery St",
                  "San Francisco, CA 94111"
              ]
          },
          "phone": "+14153982272",
          "display_phone": "(415) 398-2272",
          "distance": 918.3585198484309
      },
      {
          "id": "UztGhH-jO3LQIT91LE4XEw",
          "alias": "strictly-faded-barbershop-san-francisco",
          "name": "Strictly Faded Barbershop",
          "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/ElT4eiw742H2hRpJQ6AC1w/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/strictly-faded-barbershop-san-francisco?adjust_creative=AUYvm1K1DCEG2ubbgNLPRg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=AUYvm1K1DCEG2ubbgNLPRg",
          "review_count": 23,
          "categories": [
              {
                  "alias": "barbers",
                  "title": "Barbers"
              }
          ],
          "rating": 5,
          "coordinates": {
              "latitude": 37.75868,
              "longitude": -122.41627
          },
          "transactions": [],
          "location": {
              "address1": "3367 20th St",
              "address2": null,
              "address3": "",
              "city": "San Francisco",
              "zip_code": "94110",
              "country": "US",
              "state": "CA",
              "display_address": [
                  "3367 20th St",
                  "San Francisco, CA 94110"
              ]
          },
          "phone": "+14156415344",
          "display_phone": "(415) 641-5344",
          "distance": 3449.1267605462076
      },
      {
          "id": "O4FiQnzTXIKptET_SIoQ-w",
          "alias": "peoples-barber-and-shop-san-francisco-2",
          "name": "Peoples Barber & Shop",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/fDX7ZGBBaGC1UnrqS3nyVw/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/peoples-barber-and-shop-san-francisco-2?adjust_creative=AUYvm1K1DCEG2ubbgNLPRg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=AUYvm1K1DCEG2ubbgNLPRg",
          "review_count": 304,
          "categories": [
              {
                  "alias": "barbers",
                  "title": "Barbers"
              }
          ],
          "rating": 4,
          "coordinates": {
              "latitude": 37.76768,
              "longitude": -122.42169
          },
          "transactions": [],
          "price": "$$$",
          "location": {
              "address1": "321 Valencia St",
              "address2": null,
              "address3": "",
              "city": "San Francisco",
              "zip_code": "94103",
              "country": "US",
              "state": "CA",
              "display_address": [
                  "321 Valencia St",
                  "San Francisco, CA 94103"
              ]
          },
          "phone": "+14154005955",
          "display_phone": "(415) 400-5955",
          "distance": 2863.545010886629
      }
  ],
  "total": 447,
  "region": {
      "center": {
          "longitude": -122.399972,
          "latitude": 37.786882
      }
  }
}
export default function ResultList(results) {
  const [businesses, setBusinesses] = useState([tempRes.businesses])
  const [amount, setAmount] = useState(tempRes.total)

  useEffect(()=>{
    //reorder the business in order 
    console.log(businesses[0])
    console.log(amount)
    setBusinesses(businesses.map((buss1,buss2)=> buss1.rating - buss2.rating))
    console.log(businesses[0])
  },[])

  return (
    <div className='Results'>
      {}
    <>{businesses[1]}</>

    </div>
  )
}
