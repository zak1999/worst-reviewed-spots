import React, { useState} from 'react'
import "./Result.css"
import StarRatings from 'react-star-ratings/build/star-ratings'

const sampleObj ={
  "id": "WavvLdfdP6g8aZTtbBQHTw",
  "alias": "gary-danko-san-francisco",
  "name": "Gary Danko",
  "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/CPc91bGzKBe95aM5edjhhQ/o.jpg",
  "is_claimed": true,
  "is_closed": false,
  "url": "https://www.yelp.com/biz/gary-danko-san-francisco?adjust_creative=wpr6gw4FnptTrk1CeT8POg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=wpr6gw4FnptTrk1CeT8POg",
  "phone": "+14157492060",
  "display_phone": "(415) 749-2060",
  "review_count": 5296,
  "categories": [
    {
      "alias": "newamerican",
      "title": "American (New)"
    },
    {
      "alias": "french",
      "title": "French"
    },
    {
      "alias": "wine_bars",
      "title": "Wine Bars"
    }
  ],
  "rating": 4.5,
  "location": {
    "address1": "800 N Point St",
    "address2": "",
    "address3": "",
    "city": "San Francisco",
    "zip_code": "94109",
    "country": "US",
    "state": "CA",
    "display_address": [
      "800 N Point St",
      "San Francisco, CA 94109"
    ],
    "cross_streets": ""
  },
  "coordinates": {
    "latitude": 37.80587,
    "longitude": -122.42058
  },
  "photos": [
    "https://s3-media2.fl.yelpcdn.com/bphoto/CPc91bGzKBe95aM5edjhhQ/o.jpg",
    "https://s3-media4.fl.yelpcdn.com/bphoto/FmXn6cYO1Mm03UNO5cbOqw/o.jpg",
    "https://s3-media4.fl.yelpcdn.com/bphoto/HZVDyYaghwPl2kVbvHuHjA/o.jpg"
  ],
  "price": "$$$$",
  "hours": [
    {
      "open": [
        {
          "is_overnight": false,
          "start": "1730",
          "end": "2200",
          "day": 0
        },
        {
          "is_overnight": false,
          "start": "1730",
          "end": "2200",
          "day": 1
        },
        {
          "is_overnight": false,
          "start": "1730",
          "end": "2200",
          "day": 2
        },
        {
          "is_overnight": false,
          "start": "1730",
          "end": "2200",
          "day": 3
        },
        {
          "is_overnight": false,
          "start": "1730",
          "end": "2200",
          "day": 4
        },
        {
          "is_overnight": false,
          "start": "1730",
          "end": "2200",
          "day": 5
        },
        {
          "is_overnight": false,
          "start": "1730",
          "end": "2200",
          "day": 6
        }
      ],
      "hours_type": "REGULAR",
      "is_open_now": false
    }
  ],
  "transactions": [],
  "special_hours": [
    {
      "date": "2019-02-07",
      "is_closed": null,
      "start": "1600",
      "end": "2000",
      "is_overnight": false
    }
  ]
}

export default function Result({result}) { 
  const [business, setBusiness] = useState(result)

  
  console.log("bussiness",business)
  if (!business) return <>nowt</>
  return (
    <div className='Result'>
  
        <div className=" card">
        
          {business.image_url ? 
          <img className="left" src={business.image_url} />
          :<img className="left" src="https://img.freepik.com/free-photo/background-blurry-restaurant-shop-interior_1203-4031.jpg?t=st=1655196639~exp=1655197239~hmac=8f101edc2da95a653d738c8a6ec9182851487420ec2407831438ffc83705c2a7&w=1380" />
          }
                  
          <div className="right">
              <h1 className="business-name">{business.name}</h1>
                <div className='container top'>
                  <StarRatings
                    starDimension="30px"
                    rating={business.rating}
                    starRatedColor="#1875D0"
                    numberOfStars={5}
                    name='rating'
                  />
                  {business.location && <div className='address'>{business.location.display_address && business.location.display_address.map((item=>{return(<p className='address-line'>{item}</p>)}))}</div>}
                </div>
              <div className="separator"></div>
              <ul>
                {business.categories.map(item=><li className='points'>{item.title}</li>)}
                <li className='points'>{business.review_count} reviews</li>
                {business.price &&<li className='points'> {business.price}</li>}
              </ul>
              {business.photos && 
              <>
              <div className="separator"></div>
              <div className='gallery'>
                { 
                business.photos.map((url)=>{
                  return(
                    <img className="thumbnail" src={url}></img>
                    )
                  })}
              </div>
              </>}
            </div>
           <a href={business.url}><div className="fab">Vist yelp page</div></a>
        </div>

    </div>
  )
}
