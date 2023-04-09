import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { Layout, TitlePhonebook, TitleContacts } from './Layout';

export default function App() {
  const dispatch = useDispatch();
  //  const isLoading = useSelector(getIsLoading);
  //  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <GlobalStyle />
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>
      <Filter />
      {/* {isLoading && !error && <b>Request in progress...</b>} */}
      <ContactList />
    </Layout>
  );
}
