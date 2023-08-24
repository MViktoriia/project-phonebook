import { StyledInput } from '../ContactForm/ContactForm.styled';
// redux
import { getFilter } from "redux/contacts/filter/filterSelector";
import { setFilter } from "redux/contacts/filter/filterSlice";
import { useAppDispatch, useAppSelector } from 'redux/hooks';

const Filter = () => {
    const filter = useAppSelector(getFilter);
    const dispatch = useAppDispatch();

    const OnFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        dispatch(setFilter(value));
    }


    return (
        <>
            <label>Find contact by name
                <StyledInput type="text" value={filter} onChange={OnFilterChange} />
            </label>
        </>
    )
};

export default Filter;