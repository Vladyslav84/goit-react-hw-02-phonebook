import React,{Component} from 'react';
import s from './ContactForm.module.css';
console.log(s);

class ContactForm extends Component  {

    state = { 
    name: '',
    number: '',
    }

      handleChange = e => {
    this.setState({ name: e.target.value });
    };
    
    handleSubmit = evt => {
    evt.preventDefault();
    console.log(this.props.onSubmit);

    // Проп который передается форме для вызова при сабмите
    
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <span>Name</span>
            <label className={s.formItem}>
                    <input
                       autoComplete="off"
                       type="text"
                       name="name"
                       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                       title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                       required
                       onChange={this.handleChange}
/>
            </label>
                <span>Number</span>
            {/* <label className={s.formItem}>
                    <input
                       autoComplete="off"
                       type="tel"
                       name="number"
                       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                       title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                       required
                    //    onChange={this.handleChange}
                        
/>
             </label> */}
            <button type="submit">Add contact</button>
        </form>
         )
     }

}

export default ContactForm ;