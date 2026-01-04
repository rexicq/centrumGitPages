import React from 'react'
import { Form, HoneyPot, Input, Label, Textarea } from '../main/contact/contact.css';
import { Button } from '../utils';

export default ({action}) => {
  return (
    <Form
      key="contact-form"
      name="contact"
      method="POST"
      action={action}
      data-netlify-honeypot="full-name"
      data-netlify="true"
    >
      <HoneyPot>
        <Label htmlFor="full-name">
          Don’t fill out this field if you’re a human.
        </Label>
        <Input type="text" id="full-name" name="full-name" />
      </HoneyPot>
      <Label htmlFor="fname">Имя</Label>
      <Input type="text" id="fname" name="name" required />
      <Label htmlFor="email">Почта</Label>
      <Input type="email" id="email" name="email" required />
      <Label htmlFor="phone">Номер Телефона</Label>
      <Input type="tel" id="phone" name="phone" required />
      <Label htmlFor="message">Сообщение</Label>
      <Textarea id="message" name="message" required />
      <Button type="submit"  height='4.5rem' size='1.5rem'>
        <span>Отправить</span>
      </Button >
      <Input type="hidden" name="form-name" value="contact" />
    </Form>
  )
}
