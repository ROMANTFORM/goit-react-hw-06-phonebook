import './ContactList.css';
import { connect } from "react-redux";
import * as actions from '../../redux/pb-actions';
import shortid from "shortid";

const ContactList = ({ contacts, onDeleteContact}) => {

    return (

        <div className="Contact-container">
            <ul className="Contact-container__list">
                {contacts.map(contact => (
                    <li key={shortid.generate()} className="Contact-container__item">{contact.name}: {contact.number}
                        <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
};

const mapStateToProps = state => {
    const { items, filter } = state.contacts;
    const normalizeFilter = filter.toLowerCase();
    const visibleContacts = items.filter(item => item.name.toLowerCase().includes(normalizeFilter));
    return { contacts: visibleContacts }
};

const mapDispatchToProps = dispatch => ({
    onDeleteContact: id => dispatch(actions.deleteContact(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);