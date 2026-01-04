import React from 'react';
import {FaInstagram, FaGoogle, FaFacebook} from "react-icons/fa"
import {Icons} from './icons.css'

const icons = [
  {
    id: '0',
    icon: <FaFacebook/>,
    path: 'https://www.facebook.com/%D0%A3%D0%97%D0%98-%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D1%83%D0%BC-%D0%9C%D0%B5%D0%BB%D0%B8%D1%82%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C-1201088976730769/?ref=aymt_homepage_panel&eid=ARBEC7SHtGbG7OaIRqX5ORw16K1YbYr67hO5nXgo0pWY-08qTw6qZPhE9yJPWiEruTeMdv92T5SW8hCm'
  },
  {
    id: '1',
    icon: <FaGoogle/>,
    path: 'https://www.google.com/maps/place/%D0%A3%D0%97%D0%98+%22%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D1%83%D0%BC%22/@46.8475009,35.3707643,15z/data=!4m5!3m4!1s0x0:0xcaee2180fc0ee77e!8m2!3d46.8475009!4d35.3707643'
  },
  {
    id: '2',
    icon: <FaInstagram />,
    path: 'https://www.instagram.com/lokmedic/'
  },
]


export default (props) => {
  return (
    <Icons {...props}>
      {icons.map(item => {
        return (
          <a href={item.path} key={item.id}
             target="_blank" rel="noopener noreferrer" aria-label="links to Medias"
          >
            {item.icon}
          </a>
        )
      })}
    </Icons>
  )
}
