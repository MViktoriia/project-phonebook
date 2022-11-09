import { StyledInput } from '../ContactForm/ContactForm.styled';
// redux
import { getFilter } from "redux/contacts/filter/filterSelector";
import { setFilter } from "redux/contacts/filter/filterSlice";
import { useSelector, useDispatch } from "react-redux";

const Filter = () => {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const OnFilterChange = (e) => {
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