import Contact from '../Contact/Contact'
import css from './Contactlist.module.css'

const ContactList = ({contacts, removeContact }) => {
    return (
      <ul className={css.contacts_list}>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            removeContact={removeContact}
          />
        ))}
      </ul>
    );
};

export default ContactList;